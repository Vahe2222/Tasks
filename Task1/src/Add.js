import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { ProductContext } from "./Context"

export const Add = () => {
    const { products, setProducts } = useContext(ProductContext);
    const { handleSubmit, register, reset, formState: { errors } } = useForm()

    const add = data => {
        const newProduct = {
            id: data.id,
            category: data.category,
            price: data.price,
            count: data.count,
            image: URL.createObjectURL(data.photo[0])
        };
        setProducts([...products, newProduct])
        reset()
    }

    return (
        <div className="col-md-6">
            <h1>Add to basket</h1>
            <form onSubmit={handleSubmit(add)}>

                {errors.id && <p className='text-danger'>{errors.id.message}</p>}
                {errors.category && <p className='text-danger'>{errors.category.message}</p>}
                {errors.price && <p className='text-danger'>{errors.price.message}</p>}
                {errors.count && <p className='text-danger'>{errors.count.message}</p>}
                {errors.photo && <p className='text-danger'>{errors.photo.message}</p>}

                {/* Поля ввода */}
                <input
                    {...register("id", { required: "Please enter ID" })}
                    type="number"
                    placeholder="ID"
                    className="form-control my-3"
                />
                <input
                    {...register("category", { required: "Please enter category" })}
                    placeholder="Category"
                    className="form-control my-3"
                />
                <input
                    {...register("price", { required: "Please enter price" })}
                    type="number"
                    placeholder="Price"
                    className="form-control my-3"
                />
                <input
                    {...register("count", { required: "Please enter count" })}
                    type="number"
                    placeholder="Count"
                    className="form-control my-3"
                />
                <input
                    {...register("photo", { required: "Please select a photo" })}
                    type="file"
                    accept="image/*"
                    className="form-control my-3"
                />
                <button className="btn btn-danger my-1">Add</button>
            </form>
        </div>
    );
};