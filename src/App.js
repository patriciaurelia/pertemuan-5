import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './App.css';
import logo from  './logo.svg';
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';
import Card from './components/Card/Card';
import Input from './components/Input/Input';
import Main from './Main/Main';



function Mycomponent(props){
  return <div> {props.children} </div>
}

<Mycomponent> Belajar Reactjs </Mycomponent>
//Latihan 5.6
class App extends Component {
  constructor(){
    super();
    this.state = {
      view : 'home'
    }
  }
  render(){
    const View = ()=>{
      if(this.state.view == 'home')
      return <Home name="Eden Hazard" />
      else if(this.state.view == 'about')
      return <About />
      else if(this.state.view == 'card')
      return <Card />
      else if(this.state.view == 'input')
      return <Input />
      else if(this.state.view == 'main')
      return <Main />
    }
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a onClick={()=> this.setState({view : 'home'})} className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=> this.setState({view : 'about'})} className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=> this.setState({view : 'card'})} className="nav-link" href="#">
                Card
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=> this.setState({view : 'input'})} className="nav-link" href="#">
                Input
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=> this.setState({view : 'main'})} className="nav-link" href="#">
                Main
              </a>
            </li>
          </ul>
        </nav>

        <View /> {}
      </div>
    );
  }
}


//PROPS
// function Message(props){
// return <p>Hello {props.name},</p>;
// }

// class App extends Component{

//   render(){
//     return(
//       <div>
//         <Message name="Ulrich" />
//         <Home name="Muhammad Salah" />
//       </div>
//     )
//   }
// }

//CLASS COMPONENT
// function Message(){
// return "Pesan didalam Component";
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message />
//         <Home />
//       </div>
//     );
//   }
// }

// FUNCTIONAL COMPONENTS
// function Message() {
//   return <p>Hello from message component</p>
// }

// class App extends Component{
//   render() {
//     return(
//       <div>
//         <Message />
//       </div>
//     )
//   }
// }

// FUNCTION
// function sayHello() {
//   return "Hello World";
// }

// class App extends Component {
//   bilangHalo() {
//     return "Halo Dunia";
//   }

//   render() {
//     return(
//       <>
//         <p>sayHello : <b>{sayHello()}</b></p>
//         <p>bilangHalo : <b>{this.bilangHalo()}</b></p>
//       </>
//     )
//   }
// }
 
export default App;
