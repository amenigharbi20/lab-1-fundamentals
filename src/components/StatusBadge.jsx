function StatusColor() {
  const isOnline = true; 
  return (
    <p style={{ color: isOnline ? 'green' : 'red' }}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  );
}

export default StatusColor;
