# Interview Insights

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Details
A platform for conducting and analyzing interviews to streamline the hiring process for potential candidates.

## Follow below process to API calls
 In the apiwrapper.js ,create functions to handle the success and error cases of the API request along with the url, respectively.
 In the respective reducers, make an action creator,so that,this action creator can be dispatched from React components to initiate the data fetching process and update the Redux store with the fetched data.
 Make the necessary changes in the actual components to initiate data fetching and manage application state using Redux.
 