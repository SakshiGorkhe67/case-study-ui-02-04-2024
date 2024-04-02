import React, { useEffect, useState } from "react";
import productservice from "../Service/productservice";
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Import the logo image


const AllProductList = ({product}) => {
    const [productList, setProductList] = useState([]);
    const [msg, setMsg] = useState("");
    /*for displaying element on home screen*/
    useEffect(() => {
        init();
    }, []);
    //whenever an operation is performed in the page useState method is called

    const init = () => {
        productservice.getAllProduct().then((res) => {

            setProductList(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }


    //code for delete button fuction

    const deleteProduct = (id) => {
        productservice.deleteProduct(id).then((res) => {
            setMsg("Delete Successfully");
            init();
            setTimeout(() => {
                    setMsg("");
                }, 3000);
        }).catch((error) => {
            console.log(error);
        })


    }


    return (

        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="auto" height="40" className="d-inline-block align-top" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto"></ul>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/">admin-home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/home">user-home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/logout">logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        <Link to="/addProduct" class="btn btn-primary mt-4">Add Product</Link>
        
            <div className="container mt-3">

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3text-center">
                                All Product List
                                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                            </div>
                            <div className="card-body">
                                <table class="table">
                                    <thead>

                                        <tr>
                                            <th scope="col">Sl No</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productList.map((p, num) => (
                                                <tr>
                                                    <td>{num + 1}</td>
                                                    <td>{p.productName}</td>
                                                    <td>{p.description}</td>
                                                    <td>{p.price}</td>
                                                    <td>{p.status}</td>
                                                    <td>
                                                        <Link to={'/home/editProduct/'+p.id} className="btn btn-sm btn-primary">Edit</Link>
                                                        <button onClick={() => deleteProduct(p.id)} className="btn btn-sm btn-danger ms-1">Delete</button>

                                                    </td>
                                                </tr>

                                            ))
                                        }


                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AllProductList;