import React from 'react';

const Menucard = ({ menuData }) => {
    return (
        <>
           <section className="card1 p-5">
             <div className="container"> 
               <div className="row">
           {menuData.map((curElem) => {
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
         
        </>
    );
}

export default Menucard;
