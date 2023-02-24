// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { ThreeDots } from 'react-loader-spinner';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
//import {  useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavbarHeader } from 'components/App.styles';
import { NavbarLabel } from 'components/App.styles';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
//import { selectIsLoading, selectContacts, selectError } from 'redux/selectors';
import { HomeView } from '../views/HomeView';
//import TodosView from '../views/TodosView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const contacts = useSelector(selectContacts);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
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
      </NavbarHeader>

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        {/* <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<TodosView />}/> */}
      </Routes>
    </BrowserRouter>

    // <>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<HomeView />} />
    //     </Routes>
    //   </div>
    //   <div>
    //     <h1>Phonebook</h1>
    //     <ContactForm />
    //     {isLoading && !error && <ThreeDots />}
    //     <h2>Contacts</h2>
    //     <p>Find contacts by name</p>
    //     <Filter />
    //     <ContactList contacts={contacts} />
    //   </div>
    // </>
  );
};
