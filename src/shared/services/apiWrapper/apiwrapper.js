import HTTPClient from "../httpclient";
class APIWrapper extends HTTPClient {
  constructor(dispatch = () => { }) {
    super();
    this.baseURL = "https://dev-interviewinsights.innovasolutions.com:7443/InterviewInsights-0.0.1-SNAPSHOT";
    this.dispatch = dispatch;
  }
  async postUserCredentials({
    data,
    onSuccess = () => { },
    onError = () => { },
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
    onSuccess = () => { },
    onError = () => { },
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
    onSuccess = () => { },
    onError = () => { },
  }) {
    return this.get({
      url: "/interviewapi/techSkill/getTechSkills",
      onSuccess,
      onError,
    });
  }

  async getCandidateDetails({
    data,
    onSuccess = () => { },
    onError = () => { },
  }) {
    return this.post({
      data,
      url: "/interviewinsights/searchcandidates",
      onSuccess,
      onError,
    });
  }

  async addCandidate({
    data,
    onSuccess = () => { },
    onError = () => { },
  }) {
    return this.post({
      data,
      url: "/interviewinsights/addcandidate",
      onSuccess,
      onError,
    });
  }

  async editCandidate({
    data,
    onSuccess = () => { },
    onError = () => { },
  }) {
    const {
      candidateId,
      ...formData
    } = data;
    return this.put({
      data: formData,
      url: `/interviewinsights/editcandidate/${candidateId}`,
      onSuccess,
      onError,
    });
  }

  async getFileDownload({
    onSuccess = () => { },
    onError = () => { },
  }) {
    return this.get({
      url: "/interviewinsights/downloadTemplate",
      onSuccess,
      onError,
    });
  }

  async getAssessmentQuestions({
    candidateId,
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.get({
      url: `/interviewapi/getQuestions?candidateId=${candidateId}`,
      onSuccess,
      onError,
    });
  }

  async verifyCandidateStatus({
    candidateId,
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.get({
      url: `/interviewinsights/getCandidateDetails?candidateId=${candidateId}`,
      onSuccess,
      onError,
    });
  }

  async postAssessmentAnswers({
    data,
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.post({
      url: "/interviewinsights/assessmentSaveResponse",
      data,
      onSuccess,
      onError,
    });
  }

  async postUploadFile({
    file,
    onSuccess = () => { },
    onError = () => { },
  }) {
    const formData = new FormData();
    const adminToken = sessionStorage.getItem("Token");
    formData.append("file", file);
    formData.append("createdBy", adminToken);
    formData.append("modifiedBy", adminToken);
    this.headers = {
      "Content-Type": "multipart/form-data",
    };

    return this.post({
      url: "/interviewinsights/uploadExcelFile",
      data: formData,
      onSuccess,
      onError,
    });
  }

  async postIdProofDetails({
    file,
    candidateId,
    onSuccess = () => {},
    onError = () => {},
  }) {
    const formData = new FormData();
    formData.append("file", file);

    this.headers = {
      "Content-Type": "multipart/form-data",
    };

    return this.post({
      url: `/interviewinsights/uploadProof/${candidateId}`,
      data: formData,
      onSuccess,
      onError,
    });
  }

  async postFeedback({
    data,
    onSuccess = () => { },
    onError = () => { },
  }) {
    return this.post({
      data,
      url: "/feedback/saveFeedbackDetails",
      onSuccess,
      onError,
    });
  }

}

export default APIWrapper;

