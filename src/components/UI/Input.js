import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.htmlFor}>{props.props.label}</label>
      <input {...props.props} />
    </div>
  );
};

export default Input;
