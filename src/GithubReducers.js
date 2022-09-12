const GitHubReducers = (currentState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...currentState,
        users: action.payload,
        loading: false,
      };
    case 'GET_USER':
      return {
        ...currentState,
        user: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...currentState,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...currentState,
        users: [],
      };
    default:
      return currentState;
  }
};

export default GitHubReducers;
