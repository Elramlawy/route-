import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function () {
let location=useLocation()
  
  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary my-0 py-0 ">
   <div className="container-fluid bg-primary  ">
    <h3 className="navbar-brand mx-5 me-5 text-light py-3" href="#">STARTFRAMEWORK</h3>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className={location.pathname==="/"? "bg":""} >
          <Link  className="nav-link active text-light ms-3 ps-0" aria-current="page" to="/">ABOUT</Link>
        </li>
        <li className={location.pathname==="/PORTFOLIO"? "bg":""}>
          <Link className="nav-link active text-light" to="PORTFOLIO">PORTFOLIO</Link>
        </li>
        <li className={location.pathname==="/CONTACT"? "bg":""}>
          <Link className="nav-link active text-light" to="CONTACT">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  
  </>
}
