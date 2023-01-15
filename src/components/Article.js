import React from "react";
//Bonus Deliverables
function minutesRead(minutes) {
    if (minutes > 0 && minutes < 30) {
      const times = Math.ceil(minutes / 5);
      return "☕️".repeat(times);
    } else if (minutes >= 30) {
      const times = Math.ceil(minutes / 10);
      return "🍱".repeat(times);
    } else {
      return "";
    }
}


function Article({title, date = "January 1, 1970", preview}){
    return (
      <article>
        <h3>{title}</h3>
        <small>
            {date} {minutesRead(minutes)}
            {minutes} min read
        </small>
        <p>{preview}</p>
      </article>
    )
}

export default Article; 