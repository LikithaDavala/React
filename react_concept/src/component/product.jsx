function Products({ productlist }) {
    return (

        <div>
            {productlist.map((prod) => {
                return (
                    <div key={prod.id}>
                        <label>Item Name:</label>
                        {prod.itemname}
                        <label>item category:</label>
                        {prod.itemcategory}
                        <br />
                    </div>
                )
            })}
        </div>
    )


} export default Products;