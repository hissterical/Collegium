// src/screens/ExpertiseMarketplace.js
import React, { useState } from 'react';
import '../styles/ExpertiseMarketplace.css';

const ExpertiseMarketplace = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: 'AI Project Help',
      description: 'Looking for help with building a neural network.',
      track: 'AI',
      helpType: 'Assignment',
      userProfile: '/profile/1'
    },
    {
      id: 2,
      title: 'Sports Buddy Wanted',
      description: 'Seeking a fitness partner for running and workouts.',
      track: 'Sports',
      helpType: 'Collaboration',
      userProfile: '/profile/2'
    }
  ]);

  const [filterTrack, setFilterTrack] = useState('');
  const [filterHelpType, setFilterHelpType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newRequest, setNewRequest] = useState({
    title: '',
    description: '',
    track: '',
    helpType: ''
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRequest((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    setRequests([...requests, { ...newRequest, id: requests.length + 1 }]);
    setNewRequest({ title: '', description: '', track: '', helpType: '' });
    setShowModal(false);
  };

  const filteredRequests = requests.filter(
    (request) =>
      (filterTrack ? request.track === filterTrack : true) &&
      (filterHelpType ? request.helpType === filterHelpType : true)
  );

  return (
    <div className="marketplace-container">
      <h1>Expertise Marketplace</h1>
      <div className="filters">
        <select onChange={(e) => setFilterTrack(e.target.value)} value={filterTrack}>
          <option value="">Select Track</option>
          <option value="AI">AI</option>
          <option value="Sports">Sports</option>
          <option value="Programming">Programming</option>
        </select>

        <select onChange={(e) => setFilterHelpType(e.target.value)} value={filterHelpType}>
          <option value="">Select Help Type</option>
          <option value="Assignment">Assignment</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Consultation">Consultation</option>
        </select>

        <button onClick={handleOpenModal}>Create Request</button>
      </div>

      <div className="requests-list">
        {filteredRequests.map((request) => (
          <div key={request.id} className="request-card">
            <h3>{request.title}</h3>
            <p><strong>Track:</strong> {request.track}</p>
            <p>{request.description}</p>
            <button onClick={() => window.location.href = request.userProfile}>
              View Profile
            </button>
            <button>Contact</button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create New Request</h2>
            <form onSubmit={handleSubmitRequest}>
              <input
                type="text"
                name="title"
                placeholder="Request Title"
                value={newRequest.title}
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newRequest.description}
                onChange={handleChange}
              />
              <select name="track" value={newRequest.track} onChange={handleChange}>
                <option value="">Select Track</option>
                <option value="AI">AI</option>
                <option value="Sports">Sports</option>
                <option value="Programming">Programming</option>
              </select>
              <select name="helpType" value={newRequest.helpType} onChange={handleChange}>
                <option value="">Select Help Type</option>
                <option value="Assignment">Assignment</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Consultation">Consultation</option>
              </select>
              <button type="submit">Submit Request</button>
              <button type="button" onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertiseMarketplace;
