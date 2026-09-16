import { useState } from "react";
import productAPI from "../api/product";
import Products  from "../component/product";

function Resturant() {
    const [countValue, countInput] = useState("");
    const [refetcheValue, refetcheInput] = useState("");
    

    productAPI().then((response) => {
        return response.json();
    }).then((data) => {
        projectInput(data.project);
        collectionInput(data.collection)
    }).catch((error) => {
        console.error(error)
    })


    return (
        <div>
            <div>
                <label>Number of Counts:</label>
                <input
                    value={countValue}
                    onChange={(e) => countInput(e.target.value)}
                />
            </div>           

                  <div>
                <label>Need Refetche:</label>
                <input
                    value={refetcheValue}
                    onChange={(e) => refetcheInput(e.target.value)}
                />
            </div>


            <div>
                <label>Number of Counts:</label>
                {countValue}
                <br />
                <label>needs Refetche:</label>
                {refetcheValue}
            </div>

         <Products productlist={productlist}/>
        </div>
    )
}
export default Resturant;