import { useEffect, useState } from "react"
import { addProduct } from "./redux/CartSlice"
import { useDispatch } from "react-redux"

export default function Products() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => { loaddata() }, [])
    var loaddata = async () => {
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()
        setProducts(data.products)
    }
    var add = (ob) => {
        dispatch(addProduct(ob))
    }
    return (
        <>
            <h2 className="text-center">Products Details</h2>
            <div className="row">
                {products.map(ob => <div className="col-xl-4 col-lg-4 mb-4">
                    <div className="text-center">
                        <img src={ob.thumbnail} className="rounded-circle" height={200} width={200} />
                        <br />
                        <strong>{ob.title} ({ob.brand})</strong>
                        <br />
                        <strong className="text-danger">Rs. {ob.price}</strong>
                        <br />
                        <br />
                        <button className="btn btn-sm btn-success" onClick={() => add(ob)} >Add To Cart</button>
                    </div>
                </div>)}
            </div>
        </>
    )

}