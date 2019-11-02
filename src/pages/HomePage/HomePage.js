import React, { Component } from "react";
import {Link} from 'react-router-dom'
export class HomePage extends Component {
  render() {
    return (
      <div className="Container">
          <h1 className='text-center'>
            This is Home Page
          </h1>
          <h3 className='text-center'>Thank for visiting. This is simple CRUD Product Management App built with React - Redux - and MockApi</h3>
          <p className='text-center'style={{color: 'dodgerblue', fontWeight : 'bold'}}>Please navigate to Product Management Tab to try or <Link to="/product-list" className='text-center btn btn-success '>
            Click Here
          </Link></p>
          
      </div>
    );
  }
}

export default HomePage;
