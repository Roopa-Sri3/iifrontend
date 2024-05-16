import HTTPClient from "../httpclient";

class APIWrapper extends HTTPClient {
  constructor(dispatch = () => {}) {
    super();
    this.baseURL = "http://10.139.166.48:8081/InterviewInsights-0.0.1-SNAPSHOT";
    this.dispatch = dispatch;
  }

  async postUserCredentials({
    data,
    onSuccess = () => {},
    onError = () => {},
  }) {

    this.headers = {
      "Content-Type": "application/json",
    };

    return this.post({
      url: "/interview/authenticate",
      data,
      onSuccess,
      onError,
    });
  }

  async postToken({
    data,
    onSuccess = () => {},
    onError = () => {},
  }) {

    this.headers = {
      "Content-Type": "application/json",
    };

    return this.post({
      url: "/user/getUserDetails",
      data,
      onSuccess,
      onError,
    });
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
      url:"/interviewinsights/fb954df5-bd69-4d20-85d2-849ba6bc9501",
      onSuccess,
      onError,
    });
  }

}

export default APIWrapper;

