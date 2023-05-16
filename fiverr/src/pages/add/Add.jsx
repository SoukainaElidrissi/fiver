import React from "react";
import "./Add.scss";
import Footer from "../../components/footer/Footer";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Project</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
             
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="" id=""></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input type="text"  />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            <label htmlFor="">Revision Number</label>
            <input type="number" />
            <label htmlFor="">Add Features</label>
            <input type="text"  />
            <input type="text"  />
            <input type="text"  />
            <input type="text" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
        </div>
        <Footer/>
      </div>
      
    </div>
   
       
   
    
  );
};

export default Add;