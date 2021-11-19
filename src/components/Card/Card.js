import React, {Component} from 'react';
import './Card.css';


export default class Card extends Component{
  render(){
    return(
      <div className="card">
        <div className="card-header">
          My Card
        </div>
        <div className="card-body">
          {this.props.children}
          <card>
                <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>{}
            </card>
        </div>
      </div>
    );
  }
}