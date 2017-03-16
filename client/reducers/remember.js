const remember = ( state = false, action ) => {
  switch (action.type) {
    case 'REMEMBER':
      return action.remember;
    default:
      return state;
  }
}

export default remember;