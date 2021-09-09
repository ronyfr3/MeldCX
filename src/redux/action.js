import { GET_DEVICES_SUCCESS, GET_DEVICES_FAIL } from "../redux/constant";
import * as api from "../redux/api";

export const getDevices = () => async (dispatch) => {
  try {
    const { data } = await api.getDevices();
    dispatch({
      type: GET_DEVICES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_DEVICES_FAIL,
      payload: "error",
    });
  }
};
