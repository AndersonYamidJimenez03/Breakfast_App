import classes from './HeaderButton.module.css';

const ButtonHeader = () => {
    return (
        <button className={classes.button}>
            <span className={classes.cart}>🛒</span>
            <span>Your Cart</span>
            <span className={classes.orders}>2</span>
        </button>
    );
}

export default ButtonHeader;