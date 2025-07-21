import React, { useState } from 'react';

const ServerSwitch = () => {
  const [servers, setServers] = useState([
    { id: '123', name: 'Zeta HS', enabled: false },
    { id: '456', name: 'Flakious Den', enabled: true },
  ]);

  const toggleServer = (id) => {
    setServers(prev =>
      prev.map(server =>
        server.id === id ? { ...server, enabled: !server.enabled } : server
      )
    );
  };

  return (
    <div>
      {servers.map(server => (
        <div key={server.id}>
          <label>
            <input
              type="checkbox"
              checked={server.enabled}
              onChange={() => toggleServer(server.id)}
            />
            {server.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ServerSwitch; 