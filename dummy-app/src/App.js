import './App.css';
import Header from './components/Header';
import FeedbackData from './Data/FeedBackData';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedBackStats from './components/FeedBackStats';
function App() {
  const [feedback,setFeedback]=useState(FeedbackData);
  const deleteFeedback =(id)=>{
    if(window.confirm('are you sure you wanna delete'))
    { 
     setFeedback(feedback.filter((item) =>
       item.id!==id
     ))
    }
  }
  return (
    <>
    <Header />
    <div className='container'>
      <FeedBackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </> 
  );
}

export default App;
