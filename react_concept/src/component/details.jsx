function Details({ users = [] }) {
  return (
    <div>
      <p>detail component</p>
      {users.map((user) => (
        <div key={user.email}>
          <p>Name: {user.name}</p>
          <p>Phone Number: {user.phoneNumber}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Details;