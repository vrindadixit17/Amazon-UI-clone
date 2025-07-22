import "./Product.css";

import Price from "./Price";

function Product({ title, idx }) {
    let oldPrices = ["12, 400", "13, 400", "14, 400", "15, 400"];
    let newPrices = ["1200", "1300", "1400", "1500"];
    let description = [
        ["8000 dpi", "5 prog buttons"], ["intuitve surface", "designed for ipad pro"], ["designed for ipad pro", "intuitve surface"], ["wireless", "optical orientation"]
    ]

    return (
        <div className="Product">
            <h3>{title}</h3>
            <p className="description">{description[idx][0]}</p>
            <p className="description">{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />

        </div>
    )
}
export default Product;