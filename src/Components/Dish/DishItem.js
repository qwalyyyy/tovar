import classes from "../../Styles/Dish/DishItem.module.scss";
import { BsTrash3 } from 'react-icons/bs';
const DishItem = ({ dishList, setDishList }) => {
  const delet = (id) => {
    dishList.filter((i) => i.id !== id);
    setDishList(dishList.filter((i) => i.id !== id));
  };
  return (
    <div className={classes["DishItem"]}>
      {dishList.map((i) => (
        <div className={classes["DishItem__elements"]}>
          <div>{i.dishName}</div>
          <div>{i.dishComposition}</div>
          <div>{i.dishPrice}</div>
          
          <div
            className={classes["DishItem__elements-button"]}
            onClick={() => delet(i.id)}
          ><BsTrash3/></div>
        </div>
      ))}
    </div>
  );
};

export default DishItem;
