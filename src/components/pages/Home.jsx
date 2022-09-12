import React from 'react';
import UserResults from '../users/UserResults';
import UsersSearch from '../users/UsersSearch';
function Home() {
  return (
    <>
      {/* SEARCH COMPONENT */}
      <UsersSearch />
      <UserResults />
    </>
  );
}

export default Home;
