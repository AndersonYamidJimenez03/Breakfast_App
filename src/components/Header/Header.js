import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
import { Fragment } from "react";
import img from "../../img/food-img.jpg";

const Header = (props) => {

  return (
    <Fragment>
      <header className={classes["header"]}>
        <h1>The Breakfasts</h1>
        <HeaderButton onClickView={props.onOrderViewHandler} />
      </header>
      <div className={classes["img"]}>
        <img src={img} alt="Really good Food" />
      </div>
    </Fragment>
  );
};

export default Header;
