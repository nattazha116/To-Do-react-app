import FeedBackItem from "./FeedBackItem"

function FeedbackList({feedback,handleDelete}){
    console.log(feedback)
   if(!feedback || feedback.length===0){
     return <p>No feedBack Yet</p>
   }
    return (
        <div className='feedback-list'>
            {feedback.map((item) =>(
            <FeedBackItem key={item.id} item={item}
            handleDelete={handleDelete}
            />
        ))}
        </div>
       
    )
}
export default FeedbackList