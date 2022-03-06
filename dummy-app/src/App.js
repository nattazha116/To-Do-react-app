import './App.css';
import Header from './components/Header';
import FeedbackData from './Data/FeedBackData';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
function App() {
  const [feedback,setFeedback]=useState(FeedbackData);
  return (
    <>
    <Header />
    <div>
      <FeedbackList feedback={feedback}/>
    </div>
    </> 
  );
}

export default App;
