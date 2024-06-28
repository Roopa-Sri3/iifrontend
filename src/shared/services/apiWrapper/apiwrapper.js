import HTTPClient from "../httpclient";
class APIWrapper extends HTTPClient {
  constructor(dispatch = () => { }) {
    super();
    this.baseURL = process.env.REACT_APP_API_BASE_URL;
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
    onSuccess = () => { },
    onError = () => { },
  }) {

    this.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
    };

    return this.get({
      url: "/user/getUserDetails",
      headers: this.headers,
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
    this.headers = {
      Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
    };
    return this.post({
      data,
      headers: this.headers,
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
    this.headers = {
      Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
    };
    return this.post({
      data,
      headers: this.headers,
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
    this.headers = {
      Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
    };
    return this.put({
      data: formData,
      headers: this.headers,
      url: `/interviewinsights/editcandidate/${candidateId}`,
      onSuccess,
      onError,
    });
  }

  async shareAssessmentLink({
    candidateID,
    onSuccess = () => { },
    onError = () => { },
  }) {
    this.headers = {
      Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
    };
    return this.post({
      url: `/interviewinsights/shareLink?candidateId=${candidateID}`,
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

  async getAssessmentRefreshData({
    assessmentId,
    candidateId,
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.get({
      url: `/interviewinsightapi/refreshPage?assessmentId=${assessmentId}&candidateId=${candidateId}`,
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
    formData.append("file", file);
    formData.append("createdBy", `Bearer ${sessionStorage.getItem("Token")}`);
    formData.append("modifiedBy", `Bearer ${sessionStorage.getItem("Token")}`);
    this.headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
    };

    return this.post({
      url: "/interviewinsights/uploadExcelFile",
      data: formData,
      headers: this.headers,
      onSuccess,
      onError,
    });
  }

  async postCandidateTillDate({
    data,
    onSuccess = () => { },
    onError = () => { },
  }) {
    this.headers = {
      "Content-Type": "application/json",
    };

    return this.post({
      url: "user/getUserDetails",
      data,
      onSuccess: (response) => {
        onSuccess(response.response.candidateTillDate);
      },
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

  async postTabSwitchCount({
    data,
    onSuccess = () => {},
    onError = () => {},
  }) {
    return this.post({
      data,
      url: "/interviewapi/updateAssessmentViolation",
      onSuccess,
      onError,
    });
  }

  async downloadCandidateReport({
    candidateId,
    onSuccess = () => {},
    onError = () => {},
  }) {
    this.headers = {
      Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
    };

    return this.get({
      headers: this.headers,
      configObj:{responseType: "blob"},
      url: `/interviewinsights/downloadCandidateReport?candidateId=${candidateId}`,
      onSuccess,
      onError,
    });
  }

}

export default APIWrapper;

