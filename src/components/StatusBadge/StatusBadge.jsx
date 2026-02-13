import "./StatusBadge.css";

function StatusBadge() {
  return (
    <div className="status-badges-container">
      {/* Online Status */}
      <div className="status-badge">
        <div className="badge online">
          🟢 Online
        </div>
        <p className="status-message">
          User is currently online
        </p>
      </div>

      {/* Offline Status */}
      <div className="status-badge">
        <div className="badge offline">
          🔴 Offline
        </div>
        <p className="status-message">
          User is currently offline
        </p>
      </div>
    </div>
  );
}

export default StatusBadge;