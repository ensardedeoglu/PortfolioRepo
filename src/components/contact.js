import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ensar Dedeoglu</h2>
            <img
              src="data:image/jpeg;base64,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"
              alt="avatar"
              style={{height: '250px'}}
               />
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (530) 414 0368
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '28px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ensardedeoglu@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    www.linkedin.com/in/ensar-dedeoglu
                  </ListItemContent>
                </ListItem>

                
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
