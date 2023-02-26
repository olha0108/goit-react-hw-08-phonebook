import css from './Pages.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Input, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.div}>
      <h1 className={css.h1}>Create account</h1>

      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Your name
          <Input
            color="success"
            placeholder="First or last name"
            type="text"
            name="name"
          />
        </label>
        <label className={css.label}>
          Email
          <Input color="success" type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Input
            color="success"
            placeholder="At least 6 characters"
            type="password"
            name="password"
          />
        </label>
        <Button variant="contained" color="success" size="small" type="submit">
          Register
        </Button>
      </form>
      <p className={css.p}>
        By creating an account you agree to Conditions of Use
      </p>
      <p className={css.p}>
        Already have an account?{' '}
        <NavLink className={css.link} to="/login">
          Sign in{' '}
        </NavLink>{' '}
      </p>
    </div>
  );
};
