
import React, { useContext } from 'react'
import styles from './sidebar.module.scss'
import { sidebarContext } from '../../contexts/sidebar.context'
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router'
import GlobalSearch from '../search-bar/global-search-bar';
import ShoppingCart from '../cart/shopping-cart';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
    const isLogin = useSelector(state=> state.user.isLogin);
    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(removeUser())
    }
    const { is_sidebar, sidebarOpen, sidebarClose } = useContext(sidebarContext);
    const is_sidebar_active = is_sidebar ? `${styles.sidebar_container} ${styles.active}` : `${styles.sidebar_container}`

    return (
        <aside className={is_sidebar_active}>
            <span className={styles.close_sidebar_icon} onClick={() => sidebarClose()}><RxCross1 /></span>
            <div className={styles.siebar_content_container}>

                <div>
                    <div className={styles.global_search_wrapper}><GlobalSearch></GlobalSearch>
                    </div>
                    <div className={styles.shopping_cart_container}>
                        <h5>My shopping</h5>
                        <ShoppingCart></ShoppingCart>
                    </div>
                </div>
                <div className={styles.nav_link_container}>
                    <ul>
                        <li className="nav-item mx-3">
                            <NavLink to='/' className={`${styles.nav_link_item} nav-link active`}>Home</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to='/contact_us' className={`${styles.nav_link_item} nav-link active`}>Contact</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to='/about' className={`${styles.nav_link_item} nav-link active`}>About</NavLink>
                        </li>
                        {
                            isLogin ?
                                <li className="nav-item mx-3">
                                    <NavLink onClick={signOut} className={`${styles.nav_link_item} nav-link active`}>Sign Out</NavLink>
                                </li> :
                                <li className="nav-item mx-3">
                                    <NavLink to='/auth/signup' className={`${styles.nav_link_item} nav-link active`}>Sign Up</NavLink>
                                </li>
                        }
                    </ul>
                </div>

            </div>
        </aside>
    )
}
export default Sidebar


