import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  FloatingSelect from './select';

function UserProfile() {
  // State for holding the selected username from the dropdown
  const [selectedUsername, setSelectedUsername] = useState('Lwandile');
  const [profile, setProfile] = useState(null);

  // Example user data (replace with actual data fetching logic if needed)
  const users = [
    { name: 'Lwandile', bio: 'Master chef', bio:' lwandile.Toto@foodiesrestaurant.com', bio:'+27 655-234-5678',bio: 'Culinary Experience: 20+ years of experience in gourmet cuisine and food innovation.'},
    { name: 'Anathi', bio: 'CEO ', bio:'+27 353-244-2354', bio:'Anathi.3d@foodiesrestaurant.com', bio:'Industry Experience: 15+ years in the food and hospitality industry.' },
    { name: 'Milani', bio: 'CFO', bio:'+27 353-244-2545', bio:'Milani.7@foodiesrestuarant.com', bio:'Financial Expertise: 18+ years in corporate finance, accounting, and investment strategy.' }
  ];

  useEffect(() => {
    // Simulating a fetch based on selectedUsername
    const fetchProfile = async () => {
      const userProfile = users.find(user => user.name === selectedUsername);
      setProfile(userProfile);
    };

    fetchProfile();
  }, [selectedUsername]);

  return (
    <div>
      <h1>Admins Profile</h1>

     
      <div className="form-floating">
        <select
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          value={selectedUsername}
          onChange={(e) => setSelectedUsername(e.target.value)} 
        >
          <option value="Steve">Lwandile</option>
          <option value="Jobs">Anathi</option>
          <option value="Elon">Milani</option>
        </select>
        <label htmlFor="floatingSelect">Select User</label>
       
      </div>

     
      <div>
        <h2>Profile for: {profile ? profile.name : 'Loading...'}</h2>
        <p>{profile ? profile.bio : ''}</p>
      </div>
    </div>
  );
}

export default UserProfile;
