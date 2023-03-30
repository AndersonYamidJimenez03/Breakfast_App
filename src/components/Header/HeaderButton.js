import classes from './HeaderButton.module.css';
import { useContext } from 'react';
import CartStore from '../../store/CartStore';

const ButtonHeader = props => {
    const ctx = useContext(CartStore);

    const ordersNumber = ctx.items.reduce((acc, order) => {
        return acc + order.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClickView}>
            <span className={classes.cart}>🛒</span>
            <span>Your Cart</span>
            <span className={classes.orders}>{ordersNumber}</span>
        </button>
    );
}

export default ButtonHeader;