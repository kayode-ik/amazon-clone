/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Reducers/StateProvider';
import { auth } from "../../utils/firebase";

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img
                    className='header__logo'
                    src='data:image/png;base64,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'
                    alt=''
                />
            </Link>
            {/* Logo */}

            {/* Search bar */}
            <div className='header__search'>
                <input
                    className='header__searchInput'
                    type="text"
                />
                <SearchIcon className='header__searchIcon' />
            </div>

            {/* Header nav */}
            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>
                            Hello {!user ? 'Guest' : user?.email}
                        </span>
                        <span className='header__optionLineTwo'>
                            {user ? 'Sign Out ' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <Link to="/orders">
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        Orders
                    </span>
                </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                </span>
                    <span className='header__optionLineTwo'>
                        Prime
                </span>
                </div>

                <Link to="/checkout">
                    <div className='header__optionBasket'>

                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket?.length}
                        </span>

                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
