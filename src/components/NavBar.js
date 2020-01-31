import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
export default class NavBar extends Component {
  render() {
    return (
      <NavWrap className="navbar navbar-expand-lg navbar-light bg-light">
  <a exact className="navbar-brand" href="/">Bookstore</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a exact className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/bestseller">Best Seller</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/authors">Featured Authors</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Genre
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div clasName="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">My Account</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</NavWrap>
     
    );
  }
}
const NavWrap = styled.nav`
 background-color:var(--navYellow)!important;
 font-size:1.5rem;
 transition:0.5s;
 &:hover{
  background-color:var(--mainYellow)!important;
 }
`;