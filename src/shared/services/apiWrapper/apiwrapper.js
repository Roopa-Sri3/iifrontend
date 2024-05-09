import HTTPClient from '../httpclient';

class APIWrapper extends HTTPClient {
  constructor(dispatch = () => {}) {
    super();
    // Need to get from .env file
    this.baseURL = process.env.REACT_APP_BASE_URL;
    this.dispatch = dispatch;
  }

  async GetFileDownload({
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.get({
      url: this.baseURL + "/api/download",
      onSuccess,
      onError,
    });
  }

  async PostUploadFile({
    file,
    onSuccess = () => {},
    onError = () => {},
  }) {
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);

    return this.post({
      url: this.baseURL + "/api/interviewinsights/upload",
      data: formData,
      onSuccess,
      onError,
    });
  }

}

export default APIWrapper;

