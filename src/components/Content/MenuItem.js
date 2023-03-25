import classes from './MenuItem.module.css';

const MenuItem = (props) => {
    return (
        <section className={classes['menu-item']}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>{`$${props.price}`}</p>
            </div>
            <div>
                <p>Amount</p>
                <button>+ Add</button>
            </div>
        </section>
    );
}

export default MenuItem;