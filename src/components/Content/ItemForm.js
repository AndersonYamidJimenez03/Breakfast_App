import classes from "./ItemForm.module.css";
import Input from '../UI/Input';
import { useRef, useState} from "react";


const ItemForm = props => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10){
             setAmountIsValid(false);
            return; 
        }

        props.onAddCartItem(enteredAmountNumber);
        setAmountIsValid(true);
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input htmlFor="orderNumber"
        ref={amountInputRef}
        props=
        {{
        label: "Amount",
        id: "orderNumber",
        type:"number",
        max:"10",
        min:"1",
        step:"1",
        name:"orders",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-10)</p>}
    </form>
  );
};

export default ItemForm;
