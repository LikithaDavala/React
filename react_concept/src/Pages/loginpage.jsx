import { useState } from "react";
import Details from "../component/details";

function Loginpage(){
const [phone ,input]=useState("");

const users = [
        { name: "kavya", phoneNumber: "123-456-7890", email: "kavya@gmail.com" },
        { name: "sujana", phoneNumber: "987-654-3210", email: "sujana@gmail.com" }
    ];

    return(
        <div>

            <input
            value={phone}
            onChange={(e)=>input(e.target.value)}
            />

            <input
            value={phone}
            />
            <p>login page </p>
            <Details users={users}/>
        </div>
        
        

    )
};

export default Loginpage;
