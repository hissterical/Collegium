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
      userProfile: '/profile/1',
      isMyRequest: false,
      offers: [
        { user: 'User1', profileLink: '/profile/1' },
        { user: 'User2', profileLink: '/profile/2' }
      ]
    },
    {
      id: 2,
      title: 'Sports Buddy Wanted',
      description: 'Seeking a fitness partner for running and workouts.',
      track: 'Sports',
      helpType: 'Collaboration',
      userProfile: '/profile/2',
      isMyRequest: true,  // This request is created by the logged-in user
      offers: [
        { user: 'User3', profileLink: '/profile/3' },
        { user: 'User4', profileLink: '/profile/4' }
      ]
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
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

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
    setRequests([...requests, { ...newRequest, id: requests.length + 1, isMyRequest: true }]);
    setNewRequest({ title: '', description: '', track: '', helpType: '' });
    setShowModal(false);
  };

  const handleOpenProfileModal = (requestId) => {
    const request = requests.find(req => req.id === requestId);
    setSelectedRequest(request);
    setShowProfileModal(true);
  };

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
    setSelectedRequest(null);
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

            {request.isMyRequest ? (
              <>
                <button onClick={() => handleOpenProfileModal(request.id)}>View Profiles</button>
                <button>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => window.location.href = request.userProfile}>
                  View Profile
                </button>
                <button onClick={() => window.location.href = `/message/${request.id}`}>
                  Contact
                </button>
              </>
            )}
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

      {showProfileModal && selectedRequest && (
        <div className="modal">
          <div className="modal-content">
            <h2>People Who Want to Help</h2>
            <ul>
              {selectedRequest.offers.map((offer, index) => (
                <li key={index}>
                  <a href={offer.profileLink}>{offer.user}</a>
                </li>
              ))}
            </ul>
            <button type="button" onClick={handleCloseProfileModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertiseMarketplace;
