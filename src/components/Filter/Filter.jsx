import { useSelector } from "react-redux";
import css from "./Filter.module.css";
import { filterProductsItems } from "assets/items/filterItems";
import { selectFilter } from "../../redux/filter/selectors";

const Filter = () => {
  const filter = useSelector(selectFilter);

  return (
    <section>
      <form>
        <button type="button" className={css.filterMenu}>
          {filter}
        </button>
        <ul>
          {filterProductsItems.map(item => (
            <li key={item} className={css.filterOptions}>
              {item}
            </li>
          ))}
        </ul>

        <button
          type="submit"
          className={css.filterBtn}
          title="search"
          aria-label="search"
        >
          <svg className={css.magnifyingGlass} width="15" height="15">
            <use href="../../assets/images/icons.svg#icon-search"></use>
          </svg>
        </button>
      </form>

      <button type="button" className={css.addBtn}>
        +
      </button>
    </section>
  );
};

export default Filter;
