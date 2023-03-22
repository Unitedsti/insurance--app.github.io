/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.jpeg"
export default function Header() {
  return (

    <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
  <img src={Logo} alt="Logo" className='logo d-none d-sm-block' style={{marginTop:"30px"}} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Services">Services</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link " to="/Careers">Careers</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">News</Link>

        </li>
      </ul>
        <button type="button" class="btn btn-warning" style={{borderRadius:"20px"}}> <Link class="nav-link " to="/Contact">Contact</Link></button>

    </div>
  </div>
</nav>
    </>
  )
}
