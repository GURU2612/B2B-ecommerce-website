import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useUser } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = ({ isOpen, onClose }) => {
    const { user, login, logout } = useUser();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        
        setName(user.name || '');
        setEmail(user.email || '');
        setMobile(user.mobile || '');
        setLocation(user.location || '');
    }, [user, navigate]);

    const handleMobileChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 10) {
            setMobile(value);
        }
    };

    const handleSave = () => {
        const updatedUser = {
            ...user,
            mobile,
            location
        };
        login(updatedUser);
        if (onClose) onClose();
    };

    const handleLogout = () => {
        logout();
        if (onClose) onClose();
        navigate('/login');
    };

    const content = (
        <div className={isOpen ? "popup-container" : "profile-page-container"}>
            {onClose && <button className="close-btn" onClick={onClose}>×</button>}
            <div className="profile-header">
                <img src="https://i.pravatar.cc/100" alt="Profile" className="profile-pic" />
                <div className="UserDetails">
                    <h3>{name || 'User'}</h3>
                    <p>{email || 'No email provided'}</p>
                </div>
            </div>
            <div className="profile-form">
                <div className="form-row">
                    <label>Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        readOnly 
                        className="readonly-input"
                    />
                </div>
                <div className="form-row">
                    <label>Email account</label>
                    <input 
                        type="email" 
                        value={email} 
                        readOnly 
                        className="readonly-input"
                    />
                </div>
                <div className="form-row">
                    <label>Mobile number</label>
                    <input 
                        type="text" 
                        placeholder="Enter 10-digit number" 
                        value={mobile} 
                        onChange={handleMobileChange}
                        maxLength="10"
                    />
                </div>
                <div className="form-row">
                    <label>Location</label>
                    <input 
                        type="text" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter your location"
                    />
                </div>
            </div>
            <div className="action-buttons">
                <button className="save-btn" onClick={handleSave}>Save Change</button>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );

    if (isOpen !== undefined) {
        return isOpen ? <div className="popup-overlay">{content}</div> : null;
    }

    return <div className="profile-page">{content}</div>;
};

export default Profile;