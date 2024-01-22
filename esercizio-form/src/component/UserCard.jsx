export function UserCard({user}){
    return(
    <div className="user-card">
        <h3>Utente</h3>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </div>
    )    
}