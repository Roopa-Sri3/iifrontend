import HTTPClient from '../httpclient';

class APIWrapper extends HTTPClient {
  constructor(dispatch = () => {}) {
    super();
    this.baseURL = '';
    this.dispatch = dispatch;
  }

  async getTechSkills({
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.get({
      // eslint-disable-next-line max-len
      url:"http://10.139.166.48:8080/InterviewInsights-0.0.1-SNAPSHOT/interviewapi/techSkill/getTechSkills",
      onSuccess,
      onError,
    });
  }

}

export default APIWrapper;

