import { useContext } from "react";
import { TestContext } from "./Context";

export const ProductList = () => {



    const { text } = useContext(TestContext)

    const { products } = useContext(TestContext)
    const { cureent } = useContext(TestContext)


    let temp = cureent === "shoes" ?
        products.filter(a => a.category === "shoes") :
        cureent === "hoodies" ?
            products.filter(a => a.category === "hoodies") :
            cureent === "T-Shirt" ?
                products.filter(a => a.category === "T-Shirt") :
                products;

    if (text != "") {
        temp = temp.filter(a => a.category.startsWith(text))
    }

    return <div className='row'>
        <p className="text-danger"> Current Filter: <strong>{cureent}</strong></p>
        {
            temp.map(elm => {
                return <div key={elm.id} className='col-md-4 my-4 '>
                    <img src={elm.photo} class="rounded" style={{ width: 200, height: 200 }} />
                    <p><strong className='text-dark'>{elm.category}</strong></p>
                    <p><strong className='text-danger'>{elm.price} $</strong></p>

                </div>
            })
        }
    </div>
}