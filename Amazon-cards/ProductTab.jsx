import Product from "./Product";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"


    }
    return (
        <div style={styles}>

            <Product title="Phone" idx={0} description="Smartphone with great camera" />
            <Product title="Laptop" idx={1} description="Smartphone with great camera" />
            <Product title="Tablet" idx={2} description="Smartphone with great camera" />
            <Product title="Monitor" idx={3} description="Smartphone with great camera" />
        </div>
    );
}
export default ProductTab;