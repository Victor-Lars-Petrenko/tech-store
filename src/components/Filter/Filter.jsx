import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { filterProductsItems } from "assets/items/filterItems";
import { selectFilter } from "../../redux/filter/selectors";
import { setFilter } from "../../redux/filter/actions";

const Filter = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleFilterSelect = item => {
    dispatch(setFilter(item));
    setIsDropdownOpen(false);
  };

  return (
    <section className={css.filterSection}>
      <form className={css.filterForm}>
        <button
          type="button"
          className={css.filterMenu}
          onClick={toggleDropdown}
        >
          {filter}
        </button>
        {isDropdownOpen && (
          <ul className={css.filterList}>
            {filterProductsItems.map(item => (
              <li key={item} className={css.filterOption}>
                <button
                  type="button"
                  className={css.filterBtn}
                  onClick={() => handleFilterSelect(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </form>

      <button type="button" className={css.addBtn}>
        +
      </button>
    </section>
  );
};

export default Filter;
