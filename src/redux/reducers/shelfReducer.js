const shelf = (state = [], action) => {
    switch (action.type) {
      case 'SET_SHELF':
        return action.payload;
      case 'SET_PERSONAL_SHELF':
        return action.payload;
      default:
        return state;
    }
  };

  export default shelf;
  