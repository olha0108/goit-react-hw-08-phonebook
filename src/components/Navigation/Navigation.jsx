import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import HomeIcon from '@mui/icons-material/Home';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        <HomeIcon color="success" fontSize="large" /> 
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
         Your Contacts
        </NavLink>
      )}
    </nav>
  );
};
