import classes from './MenuItem.module.css';
import ItemForm from './ItemForm';

const MenuItem = (props) => {
    return (
        <section className={classes['menu-item']}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>{`$${props.price}`}</p>
            </div>
            <ItemForm />
        </section>
    );
}

export default MenuItem;