import React from "react";

const About = () =>{
    return(
        <div>
          <div className="about">
           <h2>About Us</h2>
          </div>
          <section className="main">
            <div className="welcome">
            <div className="left">
                <p>My name is Mehedi Hassan Durjoi and I’m the founder of Codev. In 2021, I published my first online course. My goal was to make complex DevOps technologies simple and easy to understand. In July 2021, I launched Codev with the goal of providing an immersive learning experience to students all over the world.</p>
            </div>
            <div className="right1" >
              <img src={require('./images/banner1.png').default}/>
            </div>

            </div>

          </section>
        </div>
    );

}
export default About;