import { useState } from "react";
import productAPI from "../api/product";
import Products  from "../component/product";

function Resturant() {
    const [countValue, ccountInput] = useState("");
    const [refetcheValue, refetcheInput] = useState("");
    const [productlist, setproductlist] = useState([]);

    productAPI().then((response) => {
        return response.json();
    }).then((data) => {
        projectInput(data.project);
        collectionInput(data.collection)
        setproductlist(data.products);
    }).catch((error) => {
        console.error(error)
    })


    return (
        <div>
            <div>
                <label>Number of Counts:</label>
                <input
                    value={countValue}
                    onChange={(e) => countValue(e.target.value)}
                />
            </div>


            <div>
                <label>Number of Counts:</label>
                {countValue}
                <br />
                <label>needs Refetche:</label>
                {refetcheInput}
            </div>

         <Products productlist={productlist}/>
        </div>
    )
}
export default Resturant;