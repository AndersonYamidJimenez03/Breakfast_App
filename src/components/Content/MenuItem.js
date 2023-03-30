import classes from './MenuItem.module.css';
import ItemForm from './ItemForm';
import { useContext } from 'react';
import CartContext from '../../store/CartStore';

const MenuItem = (props) => {
    const ctx = useContext(CartContext);
    
    const addCartItemHandler = amount => {
        ctx.addItem({
            id: props.id,
            name: props.name,
            description: props.description,
            amount: amount,
            price:props.price

        })
    }

    return (
        <li className={classes['menu-item']}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>{`$${props.price}`}</p>
            </div>
            <ItemForm onAddCartItem = {addCartItemHandler}/>
        </li>
    );
}

export default MenuItem;