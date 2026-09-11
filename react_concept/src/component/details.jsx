function Details({ users}) {
  return (
    <div>
  
    
      {users.map((u) => (
        <div>
          <p>Name: {u.name}</p>
          <p>Phone Number: {u.phoneNumber}</p>
          <p>Email: {u.email}</p>
        </div>
      ))} 
    </div>
  );
}
export default Details;