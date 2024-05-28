import { useDispatch, useSelector } from "react-redux"
import { decrementQty, incrementQty, removeProduct } from "./redux/CartSlice"


export default function Cart() {
    const Carts = useSelector(state => state.carts.value)
    const bill = useSelector(state => state.carts.value.reduce((cv,pv) => cv + pv.price*pv.qty,0))
    // const calculateTotal = () => {
    //     return Carts.reduce((cv, pv) => cv + pv.price, 0);
    //   }
    
    const disptach = useDispatch()
    var delitem = (id) => {
        disptach(removeProduct(id))
    }
    return (
        <>
            <div className="container-fluid">
            <h2 className="text-center text-info">Item Details</h2>
            <button className="btn btn-dark">Billing Amount : Rs.{bill}</button>
            {/* {Carts.map((ob) =>
                <button className="btn btn-dark">Billing Amount : Rs.{calculateTotal()}</button>
                <button className="btn btn-dark">Billing Amount : Rs. {ob.qty * ob.price}</button>
                
            )} */}
           <div className="table-responsive">
            <table className="table table-striped  mt-3">
                <thead>
                    <tr>
                        <th>
                            S.No.
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Details
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Carts.map((ob, index) => <tr>
                        <td>{index + 1}</td>
                        <td><img src={ob.thumbnail} className="rounded-circle" height={50} width={50} /></td>
                        <td>
                            <strong>{ob.title}</strong><br />
                            <strong>{ob.category}</strong><br />
                            <strong>{ob.description}</strong>
                        </td>
                        <td>Rs.{ob.price}</td>
                        <td><button className="btn btn-danger" onClick={() => disptach(decrementQty(ob.id))}>-</button>
                            &nbsp;<strong>{ob.qty}</strong>&nbsp;
                            <button className="btn btn-primary" onClick={() => disptach(incrementQty(ob.id))}>+</button>
                        </td>
                        <td>Rs.{ob.price * ob.qty}</td>
                        <td><button className="btn btn-danger" onClick={() => delitem(ob.id)}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
            </div>
            </div>
        </>
    )
}