import React, { useState } from 'react';
import './Profile.css';

const Profile = ({ isOpen, onClose }) => {
    const [name, setName] = useState('Maharshi Patel');
    const [email, setEmail] = useState('yourname@gmail.com');
    const [mobile, setMobile] = useState('');
    const [location, setLocation] = useState('INDIA');

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <button className="close-btn" onClick={onClose}>×</button>
                <div className="profile-header">
                    <img src="https://i.pravatar.cc/100" alt="Profile" className="profile-pic" />
                    <div className="UserDetails">
                        <h3>{name}</h3>
                        <p>{email}</p>
                    </div>
                </div>
                <div className="profile-form">
                    <div className="form-row">
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label>Email account</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label>Mobile number</label>
                        <input type="text" placeholder="Add number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label>Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </div>
                <div className="action-buttons">
                    <button className="save-btn">Save Change</button>
                    <button className="logout-btn">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
