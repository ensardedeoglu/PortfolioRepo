import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '176px', background: 'url(https://i.pinimg.com/originals/61/a4/a4/61a4a4ccec276d39f2156b1058a31fca.jpg) center / cover'}} >Restaurant Reservation</CardTitle>
            <CardText>
            A Restaurant Reservation System intended for internal use by restaurant employees.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/ensardedeoglu/Restaurant-Reservation-Project" colored>GitHub</Button>
              <Button href="https://front-end-lime-one.vercel.app/dashboard" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWn6iySqI9n9cP5Mfck92B8zzeJzi3ttCgQ&usqp=CAU) center / cover'}} >We Love Movies</CardTitle>
            <CardText>
              It is an amazing colorful movie app for movie lovers.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/ensardedeoglu/WeLoveMovies" colored>GitHub</Button>
              <Button href="https://github.com/ensardedeoglu/WeLoveMovies" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ebayimg.com/images/g/r8sAAOSwSeVaKD8z/s-l400.png) center / cover'}} >Decoder Ring</CardTitle>
            <CardText>
            The app has 3 different decoders. 1.The Caesar cipher - 2. The Polybius Square - 3.In cryptography
            </CardText>
            <CardActions border>
              <Button href="https://github.com/ensardedeoglu/Project-Decoder-Ring" colored>GitHub</Button>
              <Button href="https://ensardedeoglu.github.io/Project-Decoder-Ring/" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://charuzu.files.wordpress.com/2012/03/images.jpg?w=840) center / cover'}} >Pomodoro Timer</CardTitle>
            <CardText>
            The Pomodoro technique is uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/ensardedeoglu/POMODORO" colored>GitHub</Button>
              <Button href="https://github.com/ensardedeoglu/POMODORO" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '176px', background: 'url(https://content.api.news/v3/images/bin/9da010285ed2df52012e9db32f3bf03b) center / cover'}} >Weather App</CardTitle>
            <CardText>
           The application provides accessing current weather for any location including over 200,000 cities.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/ensardedeoglu/WeatherApp" colored>GitHub</Button>
              <Button href="https://weather-ensardedeoglu.vercel.app/" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
