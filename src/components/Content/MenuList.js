import classes from "./MenuList.module.css";
import MenuItem from './MenuItem';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Continental Breakfast",
    description:
      "The traditional Continental BF consisted simply of hot croissant, brioche or toast, butter and preserves and coffee as the beverage",
    price: 22.99,
  },
  {
    id: "m2",
    name: "English Breakfast",
    description:
      "The full or English breakfast is a more elaborate meal and requires more preparation in the dining room before service than other meals.",
    price: 21.5,
  },
  {
    id: "m3",
    name: "American Breakfast",
    description:
      "The American Breakfasts also offers multiple courses as a part of the meal, and Is similar to an English Breakfasts",
    price: 20.99,
  },
  {
    id: "m4",
    name: "Italian Breakfast",
    description:
      "The Italians keep it classy with a fresh cup of cappuccino and cornetto. A cornetto is similar to a croissant, but less buttery, and is filled with sweet cream.",
    price: 18.99,
  },
];

const MenuList = () => {
  return (
    <ul className={classes["menu"]}>
      {DUMMY_MEALS.map((breakfast) => (
        <MenuItem
          key={breakfast.id}
          id={breakfast.id}
          name={breakfast.name}
          description={breakfast.description}
          price={breakfast.price}
        />
      ))}
    </ul>
  );
};

export default MenuList;
