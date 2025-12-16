import React, { useState } from 'react';
import './App.css';

const ProfileCard = ({ name, role, location, email, avatar, bio, skills, isOnline }) => {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <div className="avatar">{avatar}</div>
          {isOnline && <span className="online-dot"></span>}
        </div>
        <div className="profile-info-header">
          <h3>{name}</h3>
          <p className="role">{role}</p>
        </div>
      </div>

      <p className="bio">{bio}</p>

      <div className="details">
        <p>📍 {location}</p>
        <p>✉️ {email}</p>
      </div>

      <div className="skills">
        <p className="skills-label">SKILLS</p>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>

      <button 
        onClick={() => setLiked(!liked)}
        className={liked ? 'like-btn liked' : 'like-btn'}
      >
        {liked ? '❤️ Liked!' : '🤍 Like Profile'}
      </button>
    </div>
  );
};

function App() {
  const profiles = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      location: "San Francisco, CA",
      email: "sarah@example.com",
      avatar: "SJ",
      bio: "Passionate about creating beautiful user experiences with React and modern web technologies.",
      skills: ["React", "JavaScript", "CSS", "Figma"],
      isOnline: true
    },
    {
      name: "Mike Chen",
      role: "Full Stack Developer",
      location: "New York, NY",
      email: "mike@example.com",
      avatar: "MC",
      bio: "Building scalable web applications and mentoring junior developers in my free time.",
      skills: ["Node.js", "React", "MongoDB", "AWS"],
      isOnline: false
    },
    {
      name: "Emma Davis",
      role: "UI/UX Designer",
      location: "Austin, TX",
      email: "emma@example.com",
      avatar: "ED",
      bio: "Designer who codes. I love bringing designs to life with clean, semantic code.",
      skills: ["Figma", "HTML", "CSS", "Prototyping"],
      isOnline: true
    }
  ];

  return (
    <div className="App">
      <div className="header">
        <h1>👥 Team Directory</h1>
        <p>Meet our amazing team members</p>
      </div>

      <div className="cards-container">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>

      <div className="learning-box">
        <h2>🎓 What You're Learning About Props</h2>
        
        <div className="learning-point">
          <strong>1. Passing Props:</strong> The parent (App) passes data to child (ProfileCard) components
        </div>
        
        <div className="learning-point">
          <strong>2. Receiving Props:</strong> Child receives props as parameters: <code>ProfileCard(props)</code>
        </div>
        
        <div className="learning-point">
          <strong>3. Different Data Types:</strong> Props can be strings, booleans, arrays, objects
        </div>
        
        <div className="learning-point">
          <strong>4. Reusable Components:</strong> One component displays different data using props
        </div>
      </div>
    </div>
  );
}

export default App;