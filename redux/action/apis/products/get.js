import * as Types from "../../../constants/actionTypes";
import { mainApiInstance } from '../axiosInstances'


export const GetProducts = ({ page = "1", limit, q, sortOrder, categoryId }) => {
  const req = "GetProducts"
  return async dispatch => {
    dispatch({ type: Types.FETCH_DATA_REQUEST, req: req });
    try {
      const params = {};
      if (q?.length > 0) params.q = q;
      if (page) params.page = parseInt(page);
      if (limit) params.limit = limit;
      if (sortOrder) params.sortOrder = sortOrder;
      params.categoryId = categoryId
      const queryString = new URLSearchParams(params).toString();
      const response = await mainApiInstance.get(`products?${queryString}`);
      dispatch({ type: Types.FETCH_DATA_SUCCESS, payload: response.data, req: req });
    } catch (error) {
      dispatch({ type: Types.FETCH_DATA_FAILURE, payload: JSON.stringify(error.response), req: req });
    }
  };
};