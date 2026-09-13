import { useState } from "react";
import Details from "../component/details"; 

function Register() {
  const [name, inputName] = useState("");
  const [phoneNumber, inputPhoneNumber] = useState("");
  const [email, inputEmail] = useState("");

  function submit(event) {
    event.preventDefault();
    console.log(name);
    console.log(phoneNumber);
    console.log(email);
  }


   const users = [
        { name: "kavya", phoneNumber: "123-456-7890", email: "kavya@gmail.com" },
        { name: "sujana", phoneNumber: "987-654-3210", email: "sujana@gmail.com" }
    ];

  return (

    <div>
      <label>Full Name:</label>
      <input
        value={name}
        type="text"
        placeholder="Enter your Full Name"
        onChange={(e) => inputName(e.target.value)}
      />
      <br />
      <label>Phone Number:</label>
      <input
        value={phoneNumber}
        type="number"
        placeholder="Enter your PhoneNumber"
        onChange={(e) => inputPhoneNumber(e.target.value)}
      />
      <br />
      <label>Email:</label>
      <input
        value={email}
        type="email"
        placeholder="Enter your Email"
        onChange={(e) => inputEmail(e.target.value)}
      />


      <button onClick={submit}>save</button>
    
    </div>
  )

};
export default Register;