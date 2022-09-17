import { useState } from "react"
import Header from "./Header"

function AddProduct() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function addProduct() {
        //let item = { name, file, price, description };
        const fromData = new FormData();

        fromData.append('name', name);
        fromData.append('file', file);
        fromData.append('price', price);
        fromData.append('description', description);
        //console.warn(fromData);

        let result = await fetch("http://localhost:8000/api/addproduct", {
            method: 'POST',
            body: fromData
            // headers: {
            //     "Content-Type": "application/json",
            //     "Accept": "application/json"
            // }
        });
        alert("Data has been saved");

        //console.warn();
    }
    return (
        <div>
            <Header />
            <h1>AddProduct Page</h1>
            <div className="col-sm-6 offset-3">
                <input type="text" className="form-control mb-2" placeholder="Prouduct Name" onChange={(e) => setName(e.target.value)} />
                <input type="file" className="form-control mb-2" placeholder="Prouduct Image" onChange={(e) => setFile(e.target.files[0])} />
                <input type="text" className="form-control mb-2" placeholder="Prouduct Price" onChange={(e) => setPrice(e.target.value)} />
                <input type="text" className="form-control mb-2" placeholder="Prouduct Description" onChange={(e) => setDescription(e.target.value)} />
                <button className="btn btn-primary" onClick={addProduct}>Add Product</button>

            </div>
        </div>
    )
}

export default AddProduct