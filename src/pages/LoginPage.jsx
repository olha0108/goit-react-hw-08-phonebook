import css from './Pages.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Input, Button } from '@mui/material';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.div}>
      <h1 className={css.h1}>Sign in</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <Input color="success" type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Input color="success" type="password" name="password" />
        </label>
        <Button variant="contained" color="success" size="small" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};
