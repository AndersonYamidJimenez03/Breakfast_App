import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/CartStore';
import CartItem from './CartItem';

const Cart = (props) => {

    const ctx = useContext(CartContext);

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
      ctx.removeItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      ctx.addItem({ ...item, amount: 1 });
    };

  return (
    <Modal onClose={props.onOrderHideHandler}>
      <ul className={classes['cart-items']}>
        {ctx.items.map((order) => (
          <CartItem
            key={order.id}
            id={order.id}
            name={order.name}
            amount={order.amount}
            price={order.price}
            onRemove={cartItemRemoveHandler.bind(null, order.id)}
            onAdd={cartItemAddHandler.bind(null, order)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onOrderHideHandler}>Close</button>
       {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
