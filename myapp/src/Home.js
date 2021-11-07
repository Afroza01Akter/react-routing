import React, {useState} from "react";
import Menu from "./menuApi";
import Menucard from "./Menucard";
import { NavLink } from "react-router-dom";



const Home = () =>{
  const [menuData, setMenuData] = useState(Menu);
  
  return(
      <>
      <section className="main">
          <div className="welcome">
          <div className="left">
              <h1>Welcome to Codev.</h1>
              <NavLink className="na" to="/course">View Our Courses</NavLink>
          </div>
          <div className="right">
            <img src={require('./images/banner1.png').default}/>
          </div>

          </div>

        </section>

        <Menucard menuData={menuData} />
      </>
  );
     
    
 

}
export default Home;