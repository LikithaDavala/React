import { useState } from "react";

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