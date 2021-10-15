import React from 'react';


function Skills(){
    return(
        <div id="js" className="container">
            <br /><hr/><br/>
            <h1 id="skills">SKILLS</h1>
           
            <h3>These are programming languages and frameworks that I used in my projects.</h3>
            <br /><hr/><br/>
            <div id="javascript">
                <img id="javascriptimg"src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" />
                <h1>JavaScript</h1>
                <p id="jstext"> JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
            </div>
            <div className="react">
                <img id="reactimg"src="https://miro.medium.com/max/1400/1*CeuWv9fCjD1uTiTuKytnBQ.png"/>
                <h1>React.js</h1>
                <p id="reacttext">React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
            </div>
            <div className="node">
                <img id="nodeimg"src="https://tutorialhour.com/wp-content/uploads/2021/05/nodejs.png"/>
                <h1>Node.js</h1>
                <p id="nodetext">Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.</p>
            </div>
            <div className="HTML-CSS">
                <img id="htmlcss"src="https://www.lambdatest.com/blog/wp-content/uploads/2018/11/JPG-2.jpg"/>
                <h1>HTML - CSS</h1>
                <p id="htmlcsstext">HTML - The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. 
                <br /><hr />CSS - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. </p>
            </div>
            <h1 id="endtext">I TAKE PRIDE IN MY WORK & EVERYTHING I CREATE WITH PRECISION & LOVE</h1>
            <br />

        </div>
    )
}

export default Skills