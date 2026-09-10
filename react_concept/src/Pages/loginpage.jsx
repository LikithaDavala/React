import { useState } from "react";

function Loginpage(){
const [phone ,input]=useState("");


    return(
        <div>

            <input
            value={phone}
            onChange={(e)=>input(e.target.value)}
            />

            <input
            value={phone}
            />
        </div>
        
        

    )
};

export default Loginpage;
