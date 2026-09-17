import { useState } from "react";
import ResturantAPI from "../api/resturant";
import Resturants from "../component/resturant";

function Resturant() {
    // const [countValue, countInput] = useState("");
    // const [collectionValue, collectionInput] = useState("");
    const [dataValue , dataInput] = useState("");

    ResturantAPI().then((response) => {
        console.log("1", response)
        return response.json();
    }).then((data) => {
        // countInput(data.count);
        // collectionInput(data.collection)
        dataInput(data)
    }).catch((error) => {
        console.error(error)
    })


    return (
        <div>
            {/* <div>
                <label>Number of Counts:</label>
                <input
                    value={countValue}
                    onChange={(e) => countInput(e.target.value)}
                />
            </div>           

                  <div>
                <label>No of Collections:</label>
                <input
                    value={collectionValue}
                    onChange={(e) => collectionInput(e.target.value)}
                />
            </div>


            <div>
                <label>Number of Counts:</label>
                {countValue}
                <br />
                <label>needs Refetche:</label>
                {collectionValue}
            </div> */}
            <div>
                <label>All Data:</label>
                {dataValue.count}
                {dataValue.collection}
                {dataValue.project}
            </div>
            <Resturants resturant={dataValue.restaurants} />
        </div>
    
    )
}
export default Resturant;