import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import BASE_URL from '@src/config.js';
import { useParams, useNavigate } from 'react-router-dom';
import './AdminBlogView.css';

const AdminBlogEdit = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            setIsEdit(true);
            fetchBlogData();
        }
    }, [id]);

    const fetchBlogData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${BASE_URL}/api/blogs/${id}`);
            const blog = response.data;
            
            setTitle(blog.title);
            setAuthor(blog.author);
            setCategory(blog.category);
            setImagePreview(blog.image);
            
            if (blog.content) {
                setContent(blog.content);
            }
            
            setIsLoading(false);
        } catch (err) {
            setError('Failed to fetch blog data');
            setIsLoading(false);
            console.log(err)
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 3 * 1024 * 1024) {
                setError('Image size must be less than 3MB');
                return;
            }
            
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
            ['clean']
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet',
        'color', 'background',
        'align',
        'link', 'image'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!title.trim()) {
            setError('Title is required');
            return;
        }
        
        if (!content.trim()) {
            setError('Content is required');
            return;
        }
        
        if (!isEdit && !image) {
            setError('Featured image is required');
            return;
        }

        try {
            setIsLoading(true);
            setError('');
            
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('author', author);
            formData.append('category', category);
            
            if (image) {
                formData.append('image', image);
            }

            if (isEdit) {
                await axios.put(`${BASE_URL}/api/blogs/${id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            } else {
                await axios.post(`${BASE_URL}/api/blogs`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }
            
            setIsLoading(false);
            navigate('/admin/blogs');
        } catch (err) {
            setError('Failed to save blog post');
            setIsLoading(false);
            console.log(err)
        }
    };

    return (
        <div className="admin-blog-edit">
            <div className="edit-container">
                <h2>{isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
                
                {error && <div className="error-message">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            id="title"
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder="Enter blog title"
                            required
                        />
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input 
                                type="text" 
                                id="author"
                                value={author} 
                                onChange={(e) => setAuthor(e.target.value)} 
                                placeholder="Author name"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input 
                                type="text" 
                                id="category"
                                value={category} 
                                onChange={(e) => setCategory(e.target.value)} 
                                placeholder="Blog category"
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="image">Featured Image {isEdit && "(Leave empty to keep current image)"}</label>
                        <input 
                            type="file" 
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="file-input"
                        />
                        {imagePreview && (
                            <div className="image-preview">
                                <img src={imagePreview} alt="Preview" />
                            </div>
                        )}
                    </div>
                    
                    <div className="form-group editor-container">
                        <label htmlFor="content">Content</label>
                        <ReactQuill 
                            value={content} 
                            onChange={setContent}
                            modules={modules}
                            formats={formats}
                            placeholder="Write your blog content here..."
                            theme="snow"
                            className="react-editter"
                        />
                    </div>
                    
                    <div className="form-actions">
                        <button 
                            type="button" 
                            className="cancel-btn"
                            onClick={() => navigate('/admin/blogs')}
                            disabled={isLoading}
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Saving...' : (isEdit ? 'Update Post' : 'Publish Post')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminBlogEdit;