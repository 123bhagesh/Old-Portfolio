/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React from 'react'
import "./skills.css"
import "../../index.css"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {SiJavascript} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {SiRedux} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {GrNode} from "react-icons/gr"
import {GrMysql} from "react-icons/gr"
import {SiMongodb} from "react-icons/si"

const Skills = () => {
  return (
    <section id="skills" className="skills">

    <center><h1>Skills</h1></center>
    <div className="skillsContainer">
        <div className="front">
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
                <img src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="HTML" />
                <h2>HTML</h2>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png" alt="CSS" />
                <h2>CSS</h2>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <img src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg" alt="JAVA SCRIPT" />
                <h2>JAVA SCRIPT</h2>
            </a>
            <a href="https://reactjs.org/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" />
                <h2>React JS</h2>
            </a>
            <a href="https://redux.js.org/">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png" alt="Redux" />
                <h2>Redux</h2>
            </a>
        </div>
        <div className="back">
            <a href="https://nodejs.org/en/">
                <img src="https://user-images.githubusercontent.com/4727/38117898-75c704e4-336c-11e8-82bb-dffd73f55e94.png" alt="Node JS" />
                <h2>Node JS</h2>
            </a>
            <a href="https://expressjs.com/">
                <img src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" alt="Express JS" />
                <h2>Chakra UI</h2>
            </a>
            <a href="https://www.mongodb.com/">
                <img src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg" alt="Mongo DB" />
                <h2>Typescript</h2>
            </a>
            <a href="https://www.npmjs.com/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png" alt="NPM" />
            <h2>NPM</h2>
            </a>
            <a href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" />
            <h2>Github</h2>
            </a>
            {/* <a href="#">
            <img src="https://w7.pngwing.com/pngs/125/653/png-transparent-algorithms-data-structures-programs-data-structures-and-algorithms-introduction-to-algorithms-others-miscellaneous-angle-computer-science.png" alt="DS ALGO" />
            <h2>DSA</h2>
            </a> */}
            
        </div>
    </div>

    </section>
  )
}

export default Skills

