import HTTPClient from "../httpclient";

class APIWrapper extends HTTPClient {
  constructor(dispatch = () => {}) {
    super();
    this.baseURL = "";
    this.dispatch = dispatch;
  }
}

export default APIWrapper;

