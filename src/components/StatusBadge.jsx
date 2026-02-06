const isOnline = true

function StatusColor() {
  return (
    <p style={{ color: isOnline ? 'green' : 'red' }}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  )
}

export default StatusColor
