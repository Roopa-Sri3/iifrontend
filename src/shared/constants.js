
/**
 * File to save all constants in app
 */

export const instructions = [
  "Download Template: Before importing questions, download the template file by clicking the 'Download Template' button below. This file contains the required format for uploading questions." ,
  "Fill in Questions: Open the downloaded template file using a spreadsheet program (e.g., Microsoft Excel, Google Sheets). Each row represents a question. Fill in your questions in the appropriate columns.",
  "Save Your Changes: Once you have filled in the questions, save the file. Ensure that the file format remains the same (e.g. XLSX) for successful upload.",
  "Upload Your File: Click the 'Click to upload' button and select the modified template file from your computer.",
  "Review Before Importing: After uploading, review the questions to ensure they are correctly formatted and appear as expected.",
  "Upload Questions: Finally, click 'Upload' to add the questions to your database.",
  "Note: Only upload files with a maximum size of [4Mb] to ensure smooth processing."
];

export const assessmentInstructions = [
  "This is an online assessment.",

  "You need to use google chrome browser for writing this assessment.",

  "This assessment comprises of 14 multiple choice questions and 1(one) coding question. The time allocated for this assessment is 40 minutes. The timer will be displayed above the questions.",

  "Only One answer should be selected for each question;please choose accordingly.",

  "For saving the answer and to go to next question, click on 'Save & Next' button. To navigate to respective questions, you can use the circle icon. For coding question, click on 'Save' to save the coding answer. Click on 'Submit' button to submit the assessment.",

  "Note- please don't change the tabs, while writing the examination.All these are recorded and can lead to disqualification which results in force test submission.",

  "If you switch tabs the test will be automatically submitted when you exceed limited number of warnings.",

  "Please ensure to submit the test before the time limit or else the test will be automatically submitted with in the time duration.",

  "This test is designed to grade your ability on your skills based on your experience and domain.",

  "Don’t close the tab or refresh the tab else test will get automatically submitted.",

  "On top of the page, there's a submit button which, when clicked, will submit the exam.",

  "Please note that the assessment can only be accessed once, and once submitted, it cannot be revisited.",

  "Please ensure you have completed all questions before submitting.",
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

export const results = [
  {
    label:"Pass",
    value: "Pass"
  },
  {
    label:"Fail",
    value: "Fail"
  },
];

export const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;

export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

