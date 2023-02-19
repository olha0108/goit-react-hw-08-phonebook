import { useDispatch } from 'react-redux';
import { filterContactAction } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(filterContactAction(e.target.value.toLowerCase()));
  };

  return (
    <>
      <input type="text" onChange={onFilter} />
    </>
  );
};