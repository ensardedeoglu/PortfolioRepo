import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ensar Dedeoglu</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Software Engineer dedicated to improving skills through hands-on learning and development work. Proficient in mobile and web development environments. Adept at using JavaScript, REACT, NODE.js, HTML5, CSS, and other programming languages to produce clean code. Well-organized and collaborative team player with strong communication and analytical abilities.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>San Francisco CA</p>
            <h5>Phone</h5>
            <p>(530) 414-0368</p>
            <h5>Email</h5>
            <p>ensardedeoglu@gmail.com</p>
            <h5>Web</h5>
            <a href="https://react-portfolio-master-ensardedeoglu-ensar.vercel.app">Link</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2021}
              schoolName="Thinkful Bootcamp"
              schoolDescription="Certificate, Software Engineering. The remote web development program focused on learning HTML, CSS, Javascript, SQL, and associated frameworks (such as Node.js, React, jQuery, and PostgreSQL)
              Learning at Thinkful is enjoyable and efficient. The Bootcamp is a course that focuses on projects and gives me practical experience."
               />

               <Education
                 startYear={2020}
                 endYear={"Present"}
                 schoolName="City College Of San Francisco"
                 schoolDescription="TRANSFER ASSOCIATE In Computer Science Major"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2021}
              jobName="Full Stack Web Developer Training"
              jobDescription="●The remote web development program focused on learning HTML, CSS, Javascript, SQL, and associated frameworks (such as Node.js, React, jQuery, and PostgreSQL) 
              ●Completed 2 full-stack, 2 front-end, and 2 back-end capstones.
              ●Had meetings with an industry professional for technical issues, weekly."
              />

              <Experience
                startYear={2018}
                endYear={"Present"}
                jobName="Online Business Owner "
                jobDescription="●In 2018, Launched a successful online pet store.
                ●Honed skills in marketing, sales, customer service, and communication, etc. while operating this business.
                ●Achieved 100% of the annual target in year 1
                ●Managed, mentored, and trained employee (Manager)"/>
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={100}
                />
                <Skills
                  skill="React"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={90}
                    />
                    <Skills
                      skill="HTML-CSS"
                      progress={100}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
