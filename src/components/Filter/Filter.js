import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from 'redux/filterSlice';
import { getFilters } from 'redux/selectors';

export const Filter = () => {

  const dispatch = useDispatch();
  const filterName = useSelector(getFilters).name;

  return (
    <div>
      <h3>Find contact by name</h3>
      <FilterInput
        type="text"
        name="filter"
        value={filterName}
        onChange={({ currentTarget: { value } }) =>
          dispatch(setNameFilter(value))
        }
        placeholder="Filter by name..."
      />
    </div>
  );
};
