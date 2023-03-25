import classes from './Header.module.css';
import HeaderButton from './HeaderButton';
import { Fragment } from 'react';
import img from '../../img/food-img.jpg';

const Header = () => {
    return (
        <Fragment >
            <header className={classes['header']}>
                <h1>The Breakfasts</h1>
                <HeaderButton />
            </header>
            <div className={classes['img']}>
                <img src={img} alt='Really good Food' />
            </div>
        </Fragment>
    );
}

export default Header;