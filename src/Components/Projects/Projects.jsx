/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./projects.css";
import {GrDeploy} from "react-icons/gr";
import {BsGithub} from "react-icons/bs";
 import rodan from "../../assets/beaut.png"
import buyWow from "../../assets/buy-wow.png"
import asos from "../../assets/asos.png"
import dnaIndia from "../../assets/dnaIndia.png"

// import appleTV from "../../assets/Apple-tv.png"

const Projects = () => {
  return (
    <div id="projects" className="project">
      <center><h1>Projects</h1></center>

       {/* First Project */}
      <div className="inner-project">
        <div className="project-video">
          {/* <video src={RL} autoplay loop="true"></video> */}
          <img src={asos} alt="asos_img" />
          <div className="project-tools">
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg"
                alt="JAVA SCRIPT"
              />
              <h2>JAVA SCRIPT</h2>
            </a>
            <a target="_blank"  href="https://developers.google.com/maps/documentation/geolocation/overview">
              <img
                src="http://www.multipetros.gr/wp-content/uploads/2013/03/html5-local-storage.jpg"
                alt="Google Location API"
              />
              <h2>Local Storage</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{fontSize:"34px"}}>Clone of Asos</h2>
          <p>
            Asos is an E-commerce website which sells skin care, cloth, health, grooming, footwear and accessories
            product.
          </p>
          <p>
              <br />
            <h2>Features:-</h2>
            <ul>
              <li>Sign-up/Login.</li>
              <li>Product search by Category.</li>
              <li>Sorting and Filtering products.</li>
              <li>Cart functionality.</li>
              <li>Checkout.</li>
              <li>Payment.</li>
            </ul>
            </p>
            <br />
            <div className="live-links">
                <a target="_blank"  href="https://frolicking-platypus-d42d1d.netlify.app/"><GrDeploy/> Live Site</a>
                <a target="_blank"  href="https://github.com/123bhagesh/Construct-Week-3-Re-project"><BsGithub/> Github Repo</a>
            </div>
        </div>
      </div>
        
        {/* Second Project */}


        <div className="inner-project">
        <div className="project-video">
          {/* <video src={RL} autoplay loop="true"></video> */}
          <img src={buyWow} alt="Buy Wow" />
          <div className="project-tools">
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg"
                alt="JAVA SCRIPT"
              />
              <h2>JAVA SCRIPT</h2>
            </a>
            <a target="_blank"  href="https://developers.google.com/maps/documentation/geolocation/overview">
              <img
                src="https://w7.pngwing.com/pngs/1014/646/png-transparent-google-maps-api-google-maps-navigation-map-app-text-logo-sign.png"
                alt="Google Location API"
              />
              <h2>Location API</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{fontSize:"34px"}}>Clone of Buy-wow</h2>
          <p>
            Buy Wow is an E-commerce company which sells natural skill care products and services
            to the customers.
          </p>
          <p>
              <br />
            <h2>Features:-</h2>
            <ul>
              <li>Sign-up/Login.</li>
              <li>Product search.</li>
              <li>Sorting and Filtering products.</li>
              <li>Cart functionality.</li>
              <li>Checkout.</li>
              <li>Fetching Address using google Map API </li>
              <li>Payment</li>
            </ul>
            </p>
            <br />
            <div className="live-links">
                <a target="_blank"  href="https://dazzling-horse-5169fb.netlify.app/"><GrDeploy/> Live Site</a>
                <a target="_blank"  href="https://github.com/kosireddisreeram/unit3_constructweek"><BsGithub/> Github Repo</a>
            </div>
        </div>
      </div>
      {/* Third project */}
      <div className="inner-project">
        <div className="project-video">
          <img src={rodan} alt="Bath Body Works" />
          <div className="project-tools">
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg"
                alt="JAVA SCRIPT"
              />
              <h2>JAVA SCRIPT</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
              <img
                src="http://www.multipetros.gr/wp-content/uploads/2013/03/html5-local-storage.jpg"
                alt="Local Storage"
              />
              <h2>Local Storage</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{fontSize:"34px"}}>Clone of rodan & fields</h2>
          <p>
          Clone of an E-commerce website Rodan + Fields, which sells Beauty & skin care products. 
          </p>
          <p>
              <br />
            <h2>Features:-</h2>
            <ul>
              <li>Buying products and services</li>
              <li>Sign-In and Sign-Up pages.</li>
              <li>Sorting products on different parameters.</li>
              <li>Cart item count.</li>
              <li>Checkout.</li>
              <li>Promocode</li>
              <li>Payment</li>
            </ul>
            </p>
            <br />
            <div className="live-links">
                <a target="_blank"  href="https://stately-dragon-0a0f08.netlify.app/"><GrDeploy/> Live Site</a>
                <a target="_blank"  href="https://github.com/mohitagrawal22/Construct_Week_Project" ><BsGithub/> Github Repo</a>
            </div>
        </div>
      </div>
      {/* Fourth Project */}
      
      <div className="inner-project">
        <div className="project-video">
          <img src={dnaIndia} alt="Dna India" />
          <div className="project-tools">
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg"
                alt="JAVA SCRIPT"
              />
              <h2>JAVA SCRIPT</h2>
            </a>

            <a target="_blank"  href="https://reactjs.org/">
              <img
                src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
                alt="React.js"
              />
              <h2>React.js</h2>
            </a>
            <a target="_blank"  href="https://redux.js.org/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDn-_kLAcnntK415Ct2XJd9Uz6A74Qs6LkvcoS6GNWzG-0zsBTBS1EUTYdJXXJn-JnqQ&usqp=CAU"
                alt="Redux"
              />
              <h2>Redux</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{fontSize:"34px"}}>Clone of DnaIndia</h2>
          <p>
          DnaIndia  is news website. Latest News Headlines and Live Updates - DNA India Covers all latest and breaking news on Politics, Business, Sports, Bollywood, technology & health. 
          </p>
          <p>
              <br />
            <h2>Features:-</h2>
            <ul>
              <li>Latest News</li>
              <li>Different types of News</li>
              <li>Fetching Api</li>
              <li>Photos</li>
              <li>Videos</li>
              
            </ul>
            </p>
            <br />
            <div className="live-links">
                <a target="_blank"  href="https://dna-india-clone-nine.vercel.app/"><GrDeploy/> Live Site</a>
                <a target="_blank"  href="https://github.com/SayedMajid/dnaIndiaClone" ><BsGithub/> Github Repo</a>
            </div>
        </div>
      </div>

      
     
    </div>
  )
}

export default Projects;