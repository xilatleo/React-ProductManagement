import React, { Component } from "react";

export class ProductActionPage extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
       
       <form>       
         <div className="form-group">
           <label>Product Name: </label>
           <input type="text" className="form-control"/>
         </div>
         <div className="form-group">
           <label>Price: </label>
           <input type="number" className="form-control"/>
         </div>
         <div className="form-group">
           <label>Status: </label>           
         </div>        
        <div className="checkbox">
          <label>
            <input type="checkbox"/>
            Instock
          </label>
        </div>
        
         
       
         <button type="submit" className="btn btn-primary">Save</button>
       </form>
       
      </div>
    )
  }
  
}

export default ProductActionPage;
