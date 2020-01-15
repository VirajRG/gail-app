import { combineReducers } from 'redux'
import user from './user'

export default combineReducers({
  user
})

// const user = (state = {}, action) => {
//   switch (action.type) {
//     case "SET_USER":
//       console.log("reducer reached!!", action);
//       return {
//         id: action.id,
//         username: action.username
//       };
//     default:
//       return state;
//   }
// };

// export default user;
