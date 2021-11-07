import React, {useState} from "react";
import Menu from "./menuApi";

const Course = () =>{
  const [courseData, setCourseData] = useState(Menu);
  
    return(
        <div>
          <section className="card1 p-5">
             <div className="container"> 
               <div className="row">
           {courseData.map((curElem) => {
               return (
                   <>
                
               <div className="col-md-4" id="forborder" key={curElem.id}>
                <div className="mb-3" id="mj">
                <img src={curElem.image}/>
                <div className="card-body">
                <h5>{curElem.name}</h5>
                <small>{curElem.lessons}</small>
                <p>BDT
                   <strong>{curElem.price}</strong>
                </p>
                </div>
                
                </div>
               </div>
               
                
                   </>
                
               );

           })}
           </div>
             </div>
          </section>
        </div>
    );

}
export default Course;