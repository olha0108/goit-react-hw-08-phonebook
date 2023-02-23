import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
//import { selectFilter } from 'redux/selectors';
//import { useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  //const filter = useSelector(selectFilter);
  
  const onFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <>
      <input type="text"  onChange={onFilter} />
    </>
  );
};
