import React, { useState } from 'react';
import categoryService from "../Service/categoryservice";
import { Link } from 'react-router-dom';
const AllCategoryList = ({ category }) => {
    const [categoryList, serCategoryList] = useState([]);
    const [msg, setMsg] = useState("");
    /*for displaying element on home screen*/
    useEffect(() => {
        init();
    }, []);

    //whenever an operation is performed in the page useState method is called
    const init = () => {
        categoryService.getAllCategory(), then((res) => {
            serCategoryList(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }
    //code for delete button fuction
    const deleteCategory = (id) => {
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
            {/**Nav Admin */}
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


            {/**Add Category fetch Data */}
            <Link to="/addProduct" class="btn btn-primary mt-4">Add Category</Link>

            <div className="container mt-3">

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3text-center">
                                All Category List
                                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                            </div>
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">S1 No</th>
                                            <th scope="col">Category Name</th>
                                            <th scope="col">Category Brand</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            categoryList.map((c, num) => (
                                                <tr>
                                                    <td>{num + 1}</td>
                                                    <td>{c.categoryName}</td>
                                                    <td>{c.categoryBrand}</td>
                                                    <td>
                                                        <Link to={'/home/editProduct/' + p.id} className="btn btn-sm btn-primary">Edit</Link>
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

export default AllCategoryList;