import React, { useState } from 'react';

const ExpertiseMarketplace = () => {
  const [search, setSearch] = useState("");

  const peers = [
    { name: 'John Doe', expertise: 'Math' },
    { name: 'Jane Smith', expertise: 'Physics' },
    // Add more peer data here
  ];

  const filteredPeers = peers.filter(peer =>
    peer.name.toLowerCase().includes(search.toLowerCase()) ||
    peer.expertise.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Expertise Marketplace</h1>
      <input
        type="text"
        placeholder="Search peers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredPeers.map((peer, index) => (
          <li key={index}>{peer.name} - {peer.expertise}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpertiseMarketplace;

