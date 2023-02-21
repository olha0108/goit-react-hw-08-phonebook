import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(filterContact(e.target.value.toLowerCase()));
  };

  return (
    <>
      <input type="text" onChange={onFilter} />
    </>
  );
};
