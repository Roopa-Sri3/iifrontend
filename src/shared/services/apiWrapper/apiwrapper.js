import HTTPClient from "../httpclient";

class APIWrapper extends HTTPClient {
  constructor(dispatch = () => {}) {
    super();
    this.baseURL = "http://10.139.166.48:8081/InterviewInsights-0.0.1-SNAPSHOT";
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

  async getFileDownload({
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.get({
      url: "/interviewinsights/downloadTemplate",
      onSuccess,
      onError,
    });
  }

  async postUploadFile({
    file,
    onSuccess = () => {},
    onError = () => {},
  }) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("createdBy", "Srinu");
    formData.append("modifiedBy", "Sidhu");
    this.headers = {
      "Content-Type" : "multipart/form-data",
    };

    return this.post({
      url: "/interviewinsights/uploadExcelFile",
      data: formData,
      onSuccess,
      onError,
    });
  }

}

export default APIWrapper;

