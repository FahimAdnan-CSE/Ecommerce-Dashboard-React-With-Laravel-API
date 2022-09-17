import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchProduct() {
    async function deleteOperation(id) {
        //alert(id);
        let result = await fetch("http://localhost:8000/api/delete", {
            method: "post",
            body: JSON.stringify({ id }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        result = await result.json();
        //console.warn("result", result);
        if (result) {
            alert("Delete Succces");
        }
        //alert('asdas');
        searchData("");
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        searchData();
    }, [])
    async function searchData(key) {
        let result = await fetch("http://localhost:8000/api/searchproduct",{
            method:'post',
            body: JSON.stringify({key}),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        });
        result = await result.json();
        setData(result);
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Product</h1>
                <input type="text" className="form-control" onChange={(e) => searchData(e.target.value)} placeholder="Search Product" />
                <Table striped bordered hover responsive>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Operations</td>
                    </tr>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}  </td>
                                <td> <img src={"http://localhost:8000/" + item.file_path} style={{ width: 100 }} /> </td>
                                <td className="btn btn-danger btn-sm m-2"><span onClick={() => deleteOperation(item.id)}>Delete</span></td>
                                <Link to={"update/"+item.id} className="btn btn-primary btn-sm m-2">
                                    <td  ><span>Update</span></td>
                                </Link>

                            </tr>
                        )
                    }
                </Table>
            </div>
        </div>
    )
}

export default SearchProduct;