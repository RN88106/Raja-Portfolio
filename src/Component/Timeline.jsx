import React from 'react'
import data from "../Assests/data.json";

const Timeline = () => {
  return (
    <div id='timeline'>   
    <div className="timelinebox">

      {
        data.projects.map((item , index) =>(
          <TimelineItem heading={item.Title} index={index} key={item.Title}/>
        ))
      }

    </div>

    </div>
  )
}

const TimelineItem = ({heading, text, index}) =>(
    <div className={`timelineItem ${index%2===0 ? "leftTimeline" : "rihtTimeline"}`}>

     <div>
     <h2>{heading}</h2>
      <p>{text}</p>

     </div>
    </div>
)

export default Timeline