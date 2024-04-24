import { useContext } from "react";
import { ProductContext } from "../Context";


export const Cart = (itmes) => {

  const { cart, Up, Down, Delate, total } = useContext(ProductContext)
  return (
    <div className="col-md-6">
      <h3>Cart {total} USD</h3>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th>product</th>
            <th>count</th>
            <th>price</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(elm => {
            return (
              <tr key={elm.id}>
                <td>{elm.category}</td>
                <td>{elm.count}</td>
                <td>{elm.price}</td>
                <td>
                  <button className="btn btn-info btn-sm mx-1" onClick={() => Up(elm)}>Up</button>
                  <button className="btn btn-info btn-sm mx-1" onClick={() => Down(elm)}>Down</button>
                  <button className="btn btn-danger btn-sm mx-1" onClick={() => Delate(elm)}>Delate</button>
                </td>

              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}




