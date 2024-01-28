const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chatGptController = require('./chatGpt.controller');
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB6AIauVAJjgPSYUcmcQmjcFS5ZCq3A2qg",
  authDomain: "lessalone-bd53f.firebaseapp.com",
  projectId: "lessalone-bd53f",
  storageBucket: "lessalone-bd53f.appspot.com",
  messagingSenderId: "799491192801",
  appId: "1:799491192801:web:9a4183a09eb598ba30c4a0",
  measurementId: "G-8QY1FQJY8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/ask-to-chat-gpt', chatGptController.askToChatGpt);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});