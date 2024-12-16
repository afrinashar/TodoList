const initialState = {
    notifications: [],
  };
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTIFICATION':
        return { ...state, notifications: [...state.notifications, action.payload] };
      case 'CLEAR_NOTIFICATIONS':
        return { ...state, notifications: [] };
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  