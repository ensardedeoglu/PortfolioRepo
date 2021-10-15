import React from 'react';
function Projects() {
    return (
        <div id="project" className="project">
            <h1 id="projects">PROJECTS</h1>
            <div className='rowportitems'>
            <a href='https://front-end-lime-one.vercel.app/dashboard' target='_blank'><div className='portitem' id='restaurant'>RESERVATION</div></a>
            </div>

            <div className='rowportitems'>
            <a href='https://github.com/ensardedeoglu/WeLoveMovies' target='_blank'><div className='portitem' id='WeLoveMovies'>WE LOVE MOVIES</div></a>
            </div>

            <div className='rowportitems'>
            <a href='https://ensardedeoglu.github.io/Project-Decoder-Ring/' target='_blank'><div className='portitem' id='decoder'>DECODER RING</div></a>
            </div>

            <div className='rowportitems'>
            <a href='https://github.com/ensardedeoglu/POMODORO' target='_blank'><div className='portitem' id='pomodoro'>POMODORO TIMER</div></a>
            </div>
        </div>
    )
}

export default Projects