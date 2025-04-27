import axios from 'axios';

export const FETCH_PLANTS_REQUEST = 'FETCH_PLANTS_REQUEST';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';
export const FETCH_PLANTS_FAILURE = 'FETCH_PLANTS_FAILURE';

const API_URL = 'https://67eb766aaa794fb3222a5495.mockapi.io/greenshop';

// Запрос для получения всех растений
export const fetchPlants = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PLANTS_REQUEST });

    try {
      const response = await axios.get(`${API_URL}/plants`);
      dispatch({
        type: FETCH_PLANTS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_PLANTS_FAILURE,
        error: error.message
      });
    }
  };
};
