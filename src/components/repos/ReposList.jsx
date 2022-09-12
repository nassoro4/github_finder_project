// import React from 'react';
// import GitHubContext from '../context/gitHub/GitHubContext';
// import { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ReposItem from './ReposItem';
// function ReposList() {
//   const { repos, getRepos } = useContext(GitHubContext);
//   const params = useParams();
//   useEffect(() => {
//     getRepos(params.login);
//   }, []);

//   return (
//     <div className="rounded-lg shadow-lg card bg-base-100">
//       <div className="card-body">
//         <h2 className="text-3xl card-title my-4 font-bold">{params.login}</h2>
//       </div>
//     </div>
//   );
// }

// export default ReposList;
