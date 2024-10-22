import React from 'react'
import {NavLink } from "react-router-dom";
import {connect} from 'react-redux'
function Header({productReducer:{cartItems}}) {
  return (
    <div class="bg-info">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"></svg>
          <span class="fs-4">Karthik</span>
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item"><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >Home</NavLink></li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li class="nav-item"><NavLink to="/Pricing" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >Pricing</NavLink></li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li class="nav-item"><NavLink to="/Contact" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >Contact</NavLink></li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li class="nav-item"><NavLink to="/About" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >About</NavLink></li>
          &nbsp;&nbsp;
          <li class="nav-item"><NavLink to="/Countries" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >Countries</NavLink></li>
          &nbsp;&nbsp;
          <li class="nav-item"><NavLink to="/Product" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >Product</NavLink></li>
          &nbsp;&nbsp;
          <li class="nav-item"><NavLink to="/Counter" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
        >Counter</NavLink></li>
        &nbsp;&nbsp;
          <li class="nav-item"><NavLink to="/Todolist" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >todolist</NavLink></li>
          &nbsp;&nbsp;
          <li class="nav-item"><NavLink to="/EmpolyeeForm" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >EmpolyeeForm</NavLink></li>
          &nbsp;&nbsp;
          <li class="nav-item"><NavLink to="/Student" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >Student</NavLink></li>
        </ul>
        <NavLink to="/Cart">
        <button type="button" class="btn btn-primary position-relative">
  Cart
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <span class="visually-hidden">unread messages</span>
    {cartItems.length}
  </span>
</button>
        </NavLink>
      </header>
    </div>
  )
}
export default connect(store=>store) (Header)
