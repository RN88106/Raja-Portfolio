import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../Assests/data.json";

const Work = () => {
  return (
    <div id='work'>
        <h2> WORK </h2>
        <section>
            <article>
                <Carousel 
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                interval={2000}
                infiniteLoop={true}
                autoPlay={true}
                >

                  {
                    data.projects.map(i=>(
                      <div key={i.Title} className="WorkItem">
                        <img src={i.imgsrc} alt={i.Title} />
                        <aside>
                          <h3>{i.Title}</h3>
                          <p>{i.Description}</p>
                          <a target={"blank"} href={i.url}> View Demo </a>
                        </aside>
                      </div>
                    ))
                  }
                    
                </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Work