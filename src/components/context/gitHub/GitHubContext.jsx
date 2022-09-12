import { createContext } from 'react';
import { useReducer } from 'react';
import GitHubReducers from '../../../GithubReducers';

const GitHubContext = createContext();

export const GitHubContextProvider = ({ children }) => {
  const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  const fullYear = new Date().getFullYear();

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHubReducers, initialState);

  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    setLoading();

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  //GET USER
  const getUsers = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    });
    if (response.status === 404) {
      window.location = '/NotFound';
    } else {
      const data = await response.json();
      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };

  //GET REPO
  const getRepos = async (login) => {
    const response = await fetch(`http://127.0.0.1:8000/api/repos/`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
    dispatch({
      type: 'GET_REPOS',
      payload: data,
    });
  };

  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    });
  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        loading: state.loading,
        users: state.users,
        fullYear,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUsers,
        getRepos,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
