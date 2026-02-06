
function UserCard({name,eamil,role}){
    return (
 <div className="card">
 <h2>{name}</h2>
 <p>Email: {eamil}</p>
 <p>Role: {role}</p>
 </div>
 )
}
export default UserCard

