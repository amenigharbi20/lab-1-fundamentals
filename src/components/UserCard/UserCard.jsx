import "./UserCard.css";

function UserCard({ name, email, role }) {
  return (
    <div className="user-card">
      <h3 className="user-name">{name}</h3>
      <p className="user-email"><strong>Email:</strong> {email}</p>
      <p className="user-role"><strong>Role:</strong> {role}</p>
    </div>
  );
}

export default UserCard;