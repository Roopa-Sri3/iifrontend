import axios from "axios";
import {
  decrementApiCounter,
  incrementApiCounter,
} from "../../../store/reducers/app/app";

class HTTPClient {
  constructor(dispatch = () => {}) {
    this.dispatch = dispatch;
    this.headers = {};
  }

  async get({
    url,
    configObj = {},
    onSuccess = () => {},
    onError = () => {},
  }) {
    let result;
    try {
      this.dispatch(incrementApiCounter());
      const response = await axios.get(`${this.baseURL || ""}${url}`, {
        ...configObj,
        headers: this.headers,
      });
      const { data } = response;
      onSuccess(data);
      result = data;
    } catch (e) {
      onError(e);
      result = {
        isError: true,
        errorMessage: e.message,
      };
    } finally {
      this.dispatch(decrementApiCounter());
    }
    return result;
  }

  async post({
    url,
    data,
    configObj = {},
    onSuccess = () => {},
    onError = () => {},
  }) {
    let result;
    try {
      this.dispatch(incrementApiCounter());
      const response = await axios.post(
        `${this.baseURL || ""}${url}`,
        data,
        {
          ...configObj,
          headers: this.headers,
        });
      const { data: responseData } = response;
      onSuccess(responseData);
      result = responseData;
    } catch (e) {
      const errorResponse = e.response?.data || {message:e.message};
      result = {
        isError: true,
        errorMessage: errorResponse.message,
      };
      onError(result);
    } finally {
      this.dispatch(decrementApiCounter());
    }
    return result;
  }

  async put({
    url,
    data,
    configObj = {},
    onSuccess = () => {},
    onError = () => {},
  }) {
    let result;
    try {
      this.dispatch(incrementApiCounter());
      const response = await axios.put(
        `${this.baseURL || ""}${url}`,
        data,
        {
          ...configObj,
          headers: this.headers,
        });
      const { data: responseData } = response;
      onSuccess(responseData);
      result = responseData;
    } catch (e) {
      const errorResponse = e.response?.data || {message:e.message};
      result = {
        isError: true,
        errorMessage: errorResponse.message,
      };
      onError(result);
    } finally {
      this.dispatch(decrementApiCounter());
    }
    return result;
  }
}

export default HTTPClient;
