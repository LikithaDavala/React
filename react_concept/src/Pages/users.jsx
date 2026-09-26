import Details from '../component/details';

function Users() {
    const users = [
        { name: "likitha", phoneNumber: "123-456-7890", email: "liktha@gmail.com" },
        { name: "pallavi", phoneNumber: "987-654-3210", email: "pallavi@gmail.com" }
    ];

  return (
    <div>
         <p>Welcome to the Users page!</p>
         <Details users={users} />
          <h3>Users Component</h3>
    </div>
  );
}
export default Users;