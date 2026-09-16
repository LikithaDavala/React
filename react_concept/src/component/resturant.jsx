function Resturants({ version }) {
    return (

        <div>
            {version.map((ver) => {
                return (
                    <div key={ver.id}>
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