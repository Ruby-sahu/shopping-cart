import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Menu() {
    const cartSize = useSelector(state => state.carts.value.reduce((p, ob) => ob.qty + p, 0))
    return (
        <>
            <div className="row mt-1">
                <div className="col-xl-10 col-lg-10">
                    <h2 className="alert-success text-center">Shopping Cart Application</h2>
                </div>
                <div className="col-xl-2 col-lg-2">
                    <Link to="/"><button className="btn btn-primary">Home</button></Link>
                    &nbsp; &nbsp;
                    <Link to="/cart"><button className="btn btn-primary">Cart({cartSize})</button></Link>
                </div>
            </div>
            <hr />
        </>
    )
}