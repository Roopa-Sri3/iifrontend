export const GetStoreSkills = (state) => state.dashboard.skillsOptions;

export const GetStoreCandidates = (state) => state.dashboard.dashBoardCandidates.candidateDetails || [];

export const GetStoreCandidatesTotalCount = (state) => state.dashboard.dashBoardCandidates.totalCount;

