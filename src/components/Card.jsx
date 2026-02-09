function Card({ title, children }) {
  return (
    <div className="card" style={{ border: '1px solid #ccc', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', padding: '15px', margin: '10px' }}>
      <header>{title}</header>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default Card;
