import axios from 'axios';

// action creator for fetch status
export const submitEmail = function (email) {
  return async function (dispatch) {
    const res = await axios.post('/api/signup', { email: email });
    dispatch({ type: 'fetch_status', payload: res.data });
  };
};