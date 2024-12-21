import React, { useState } from 'react';
import '../styles/ExpertiseMarketplace.css';

const ExpertiseMarketplace = () => {
  const [helpType, setHelpType] = useState('');
  const [description, setDescription] = useState('');
  const [track, setTrack] = useState('');
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null); // State for selected request

  // Example data for requests posted by others (in a real scenario, fetch from a backend)
  const postedRequests = [
    { id: 1, title: 'Math Assignment Help', helpType: 'Assignment', track: 'Math', description: 'Need help with solving calculus problems', deadline: '2024-12-25' },
    { id: 2, title: 'AI-based Recommendation System', helpType: 'Project', track: 'AI', description: 'Looking for help to build a recommendation system using machine learning', deadline: '2024-12-30' },
    { id: 3, title: 'Sports Buddy Needed', helpType: 'Project', track: 'Sports', description: 'Looking for a partner for regular jogging sessions', deadline: '2024-12-31' }
  ];

  // Handle form submission for creating a new request
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!helpType || !description || !track || !deadline) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    console.log('Request posted:', { helpType, description, track, deadline });
    // Call backend API to save the request
    setShowModal(false); // Close the modal after posting the request
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal without posting
  };

  const handleOpenModal = () => {
    setShowModal(true); // Open modal to add a new request
  };

  const handleRequestClick = (request) => {
    setSelectedRequest(request); // Set selected request to display its details
  };

  const handleCloseDetailView = () => {
    setSelectedRequest(null); // Close the detailed view
  };

  return (
    <div className="expertise-container">
      {/* Add Request Button */}
      <button className="add-request-button" onClick={handleOpenModal}>
        Add a Request
      </button>

      {/* Requests List */}
      <div className="requests-list">
        <h2>Requests from Others</h2>
        <div className="requests">
          {postedRequests.length === 0 ? (
            <p>No requests posted yet.</p>
          ) : (
            postedRequests.map((request) => (
              <div
                key={request.id}
                className="request-card"
                onClick={() => handleRequestClick(request)}
              >
                <h3>{request.title}</h3>
                <p><strong>Help Type:</strong> {request.helpType}</p>
                <p><strong>Track:</strong> {request.track}</p>
                <p><strong>Deadline:</strong> {request.deadline}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Detailed View of Selected Request */}
      {selectedRequest && (
        <div className="request-detail-view">
          <button onClick={handleCloseDetailView} className="close-detail-button">Close</button>
          <h2>{selectedRequest.title}</h2>
          <p><strong>Help Type:</strong> {selectedRequest.helpType}</p>
          <p><strong>Track:</strong> {selectedRequest.track}</p>
          <p><strong>Description:</strong> {selectedRequest.description}</p>
          <p><strong>Deadline:</strong> {selectedRequest.deadline}</p>
        </div>
      )}

      {/* Modal for Add Request */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1>Post a Request for Help</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Help Type:</label>
                <select
                  value={helpType}
                  onChange={(e) => setHelpType(e.target.value)}
                >
                  <option value="">Select Help Type</option>
                  <option value="assignment">Assignment</option>
                  <option value="project">Project</option>
                </select>
              </div>
              <div className="input-group">
                <label>Track:</label>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                >
                  <option value="">Select Track</option>
                  <option value="AI">AI</option>
                  <option value="Sports">Sports</option>
                  <option value="Math">Math</option>
                  <option value="Programming">Programming</option>
                  <option value="Design">Design</option>
                </select>
              </div>
              <div className="input-group">
                <label>Description:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the help you need"
                />
              </div>
              <div className="input-group">
                <label>Deadline:</label>
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
              {error && <div className="error">{error}</div>}
              <div className="modal-buttons">
                <button type="submit" className="submit-button">Post Request</button>
                <button type="button" className="cancel-button" onClick={handleCloseModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertiseMarketplace;
