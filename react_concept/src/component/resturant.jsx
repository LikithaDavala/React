function Resturants({resturant}) {
    return (
        <div>
            {resturant?.map((ver) => {
                return (
                    <div key={ver._id}>
                        <label>Number of Counts:</label>
                        {ver.restaurantcode}
                        <br />
                        <label>No of Collections:</label>
                        {ver.restaurantname}
                        <br />
                    </div>
                )
            })}
        </div>
    )


} export default Resturants;