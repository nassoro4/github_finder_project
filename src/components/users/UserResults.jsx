import React from 'react';
import { useContext } from 'react';
import Spinner from '../layouts/Spinner';
import UsersItems from '../pages/UsersItems';
import GitHubContext from '../context/gitHub/GitHubContext';
function UserResults() {
  const { loading, users } = useContext(GitHubContext);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <div key={user.id}>
            <UsersItems user={user} />
          </div>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
