function Resturants({ productlist }) {
    return (

        <div>
            {productlist.map((prod) => {
                return (
                    <div key={prod.id}>
                        <label>Number of Counts:</label>
                        {prod.count}
                        <label>needs Refetch:</label>
                        {prod.needsRefetch}
                        <br />
                    </div>
                )
            })}
        </div>
    )


} export default Resturants;