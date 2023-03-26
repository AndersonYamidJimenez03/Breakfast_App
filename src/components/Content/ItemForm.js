import classes from "./ItemForm.module.css";
import Input from '../UI/Input';

const ItemForm = () => {
  return (
    <form className={classes.form}>
        <Input htmlFor="orderNumber"
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
    </form>
  );
};

export default ItemForm;
