import HTTPClient from "../httpclient";

class APIWrapper extends HTTPClient {
  constructor(dispatch = () => {}) {
    super();
    // Need to get from .env file
    this.baseURL = process.env.REACT_APP_BASE_URL;
    this.dispatch = dispatch;
  }

  async getTechSkills({
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.get({
      url:"/interviewapi/techSkill/getTechSkills",
      onSuccess,
      onError,
    });
  }

  async addCandidate({
    data,
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.post({
      data,
      url:"/interviewinsights/addcandidate",
      onSuccess,
      onError,
    });
  }

  async editCandidate({
    data,
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.put({
      data,
      url:"/interviewinsights/4ca936a4-f3b8-451a-9803-1a09ff415f4d",
      onSuccess,
      onError,
    });
  }

  async GetFileDownload({
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.get({
      url: this.baseURL + "/downloadTemplate",
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
    formData.append("file", file);
    console.log(formData);

    return this.post({
      url: this.baseURL + "/uploadExcelFile",
      data: formData,
      onSuccess,
      onError,
    });
  }

}

export default APIWrapper;

