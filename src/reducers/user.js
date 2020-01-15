const user = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        id: action.id,
        username: action.username
      };
    default:
      return state;
  }
};

export default user;
