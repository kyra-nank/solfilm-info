
export default function (state = false, action) {
  switch (action.type) {
    case 'fetch_status':
      return action.payload || false;
    default:
      return state;
  }
}
