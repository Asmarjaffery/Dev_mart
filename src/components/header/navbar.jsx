import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import styles from './navbar.module.scss'
import Sidebar from '../sidebar/sidebar'
import GlobalSearch from '../search-bar/global-search-bar'
import ShoppingCart from '../cart/shopping-cart'
import { sidebarContext } from '../../contexts/sidebar.context'

export const Navbar = () => {
  const { is_sidebar, sidebarOpen } = useContext(sidebarContext)

  return (
    <>
      <Sidebar></Sidebar>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.app_navbar_container}`}>
        <div className="container">
          <a className="navbar-brand" href="#">Dev Mart</a>
          <button className="navbar-toggler" onClick={() => sidebarOpen()} type="button" aria-controls="navbarSupportedContent" data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item mx-3">
                <NavLink to='/' className={`${styles.nav_link_item} nav-link active`}>Home</NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to='/contact_us' className={`${styles.nav_link_item} nav-link active`}>Contact</NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to='/about' className={`${styles.nav_link_item} nav-link active`}>About</NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to='/auth/signup' className={`${styles.nav_link_item} nav-link active`}>Sign Up</NavLink>
              </li>
            </ul>
            <form className="d-flex align-items-center-gap-5" role="search">
              <GlobalSearch></GlobalSearch>
              <ShoppingCart></ShoppingCart>
            </form>
          </div>
        </div>

      </nav>
    </>
  )
}
export default Navbar