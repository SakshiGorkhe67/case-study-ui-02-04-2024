import React from "react";
import { useState } from "react";
import categoryservice from "../Service/categoryservice";
import Navbar from "./navbar";

export const AddCategory = () => {

    const[category,setCategory]=useState({
      categoryName:"",
      brandName:""
  });
  const[msg,setMsg]=useState("");
  
  const handleChange=(e)=>{
  const value=e.target.value;
  setCategory({...category,[e.target.name]:value});
  }
  
  const CategoryRegister = (e) => {
  e.preventDefault(); // page will not refresh
  categoryservice.saveCategory(category).then((res)=>{
    console.log("Category Added Successfully");
    setMsg("Category Added Sucessfully");
    setCategory({
     categoryName: "",
     brandName:""
  
    });
    setTimeout(() => {
      setMsg("");
  }, 3000);
  
    
  }).catch((error)=>{
   console.log(error);
  })
  };
  return (
    <>
    {/*Importing navbar* */}
    <Navbar/>
      <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">
                                Add Category
                        </div>
                      

                   
                            
                        <div className="card-body">
                            <form  onSubmit={(e) =>CategoryRegister (e)}>
                                <div className="mb-3">
                                    <label>Enter Category Name</label>
                                    <input type="text" name="productName" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label>Enter Brand Name</label>
                                    <input type="text" name="description" className="form-control"/>
                                </div>
                               
                                <button className="btn btn-primary col-md-12">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  );
};


  




