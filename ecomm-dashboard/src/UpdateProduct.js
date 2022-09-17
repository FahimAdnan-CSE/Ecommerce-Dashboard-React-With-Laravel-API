import Header from "./Header"
import { withRouter } from 'react-router-dom'
import React, { useState, useEffect } from "react";

function UpdateProduct(props) {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {

        fetchData();

    }, []);
    // console.warn("props",props.match.params.id);
    async function fetchData() {
        let result = await fetch("http://localhost:8000/api/getproduct/" + props.match.params.id);
        result = await result.json();
        setData(result);
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
    }
  
    async function updateProductData() {
        const formData = new FormData();
        formData.append('id',props.match.params.id);
        formData.append('name', name);
        formData.append('file', file);
        formData.append('price', price);
        formData.append('description', description);

        let result = await fetch("http://localhost:8000/api/updateproduct", {
                method:'post',
                body:formData
        })
        result = await result.json();
        alert("Success Fully Update")
        //console.warn("result",formData);
    }
    return (
        <div>
            <Header />
            <h1>UpdateProduct Page</h1>
            <div className="col-sm-4 offset-4">
                <input type="text" name="username" defaultValue={data.name} className="form-control m-2" onChange={(e) => setName(e.target.value)} />
                <input type="text" defaultValue={data.price} className="form-control m-2" onChange={(e) => setPrice(e.target.value)} />
                <input type="text" defaultValue={data.description} className="form-control m-2" onChange={(e) => setDescription(e.target.value)} />
                <input type="file" className="form-control m-2" onChange={(e) => setFile(e.target.files[0])} />
                <img src={"http://localhost:8000/" + data.file_path} style={{ width: 450 }} className="form-control m-2" />
                <button className="btn btn-primary mb-5" onClick={updateProductData}>Add Product</button>

            </div>
        </div>
    )
}

export default withRouter(UpdateProduct)