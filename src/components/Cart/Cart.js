import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = () => {
  const orders = [
    {
      id: "m4",
      name: "Italian Breakfast",
      description:
        "The Italians keep it classy with a fresh cup of cappuccino and cornetto. A cornetto is similar to a croissant, but less buttery, and is filled with sweet cream.",
      price: 18.99,
    },
  ];

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {orders.map((order) => (
          <li
            key={order.id}
            id={order.id}
            name={order.name}
            description={order.description}
            price={order.price}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
