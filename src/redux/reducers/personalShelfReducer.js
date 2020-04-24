const personalShelfReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PERSONAL_SHELF':
        return action.payload;
      default:
        return state;
    }
  };

  export default personalShelfReducer;