import { fetchCurrentUser } from 'redux/auth/auth.operations';
import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { NavbarHeader } from 'components/App.styles';
import { NavbarLabel } from 'components/App.styles';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
//import { PublicRoute } from 'components/AuthRouts/PublicRoute';
//import { PrivateRoute } from 'components/AuthRouts/PrivateRoute';
import { ContactsPage } from 'pages/ContactsPage';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Suspense fallback={<p>Loading...</p>}>
        <NavbarHeader>
          <NavLink to="/" end>
            <NavbarLabel>Home</NavbarLabel>
          </NavLink>
          <NavLink to="/login">
            <NavbarLabel>Login </NavbarLabel>
          </NavLink>
          <NavLink to="/register">
            <NavbarLabel>Register </NavbarLabel>
          </NavLink>
          <NavLink to="/contacts">
            <NavbarLabel>Contacts </NavbarLabel>
          </NavLink>
        </NavbarHeader>

        <Routes>
          <Route path="" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/contacts" element={<ContactsPage />} />
          {/*           <Route path="" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
               <Route path="/contacts" element={<ContactsPage />} />
 </Route> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
