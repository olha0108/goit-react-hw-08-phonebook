import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 20,
    textAlign: 'center',
  },
    p: {
    fontSize: 16,
    textAlign: 'center',
  },
};

export const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Contact Book​ application 
      <span role="img" aria-label="Greeting icon">
        💁‍♀️
      </span>
    </h1>
    <p style={styles.p}>
      with the ability to register, login, and user updates, and work with a
      private collection of contacts.
      <br />
      Backend - https://connections-api.herokuapp.com/
    </p>
  </div>
);
