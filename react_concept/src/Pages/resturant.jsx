import { useState } from "react";
import productAPI from "../api/product";
import Products  from "../component/product";

function Resturant() {
    const [projectValue, projectInput] = useState("");
    const [collectionValue, collectionInput] = useState("");
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
                    value={projectValue}
                    onChange={(e) => projectInput(e.target.value)}
                />
            </div>


            <div>
                <label>Project Name:</label>
                {projectValue}
                <br />
                <label>Collection Name:</label>
                {collectionValue}
            </div>

         <Products productlist={productlist}/>
        </div>
    )
}
export default Resturant;