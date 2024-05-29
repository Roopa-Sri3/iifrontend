
/**
 * File to save all constants in app
 */

export const downloadUrl = "http://10.139.166.48:8081/InterviewInsights-0.0.1-SNAPSHOT/interviewinsights/downloadTemplate";

export const instructions =
[
  "Download Template: Before importing questions, download the template file by clicking the 'Download Template' button below. This file contains the required format for uploading questions." ,
  "Fill in Questions: Open the downloaded template file using a spreadsheet program (e.g., Microsoft Excel, Google Sheets). Each row represents a question. Fill in your questions in the appropriate columns.",
  "Save Your Changes: Once you have filled in the questions, save the file. Ensure that the file format remains the same (e.g., CSV, XLSX) for successful upload.",
  "Upload Your File: Click the 'Upload File' button and select the modified template file from your computer.",
  "Review Before Importing: After uploading, review the questions to ensure they are correctly formatted and appear as expected.",
  "Upload Questions: Finally, click 'Upload Questions' to add the questions to your database.",
  "Note: Only upload files with a maximum size of [4Mb] to ensure smooth processing."
];

export const options = [
  {label:"Java", value:1},
  {label:"Python", value:2},
  {label:"C", value:3},
  {label:"C++", value:4},
  {label:"PHP", value:5},
  {label:"CSS", value:6}
];

export const LOGIN_MOCKUP_DATA = [
  {
    username: "admin@innova.in",
    password: "Admin@123",
    profileName: "Uday Dontula",
    role: "ADMIN"
  },
  {
    username: "hr@innova.in",
    password: "Hr@123456",
    profileName: "Tharun Ganga",
    role: "HR"
  }
];

export const ratingLabels = ["Bad", "Average", "Good", "Excellent", "Outstanding"];
export const statuses = [
  {
    label:"Pending",
    value: "Pending"
  },
  {
    label:"Completed",
    value: "Completed"
  },
  {
    label:"Expired",
    value: "Expired"
  },
  {
    label:"New",
    value: "New"
  },
];
export const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;

// eslint-disable-next-line max-len
export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

