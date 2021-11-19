import React, {Component} from 'react';
import Card from './components/Card/Card';
import Input from '.components/Input/Input';

export default class Main extends Component {
    constructor(){
        super();

        //deklarasi state
        this.state = {
            your_name : '',
            status : ''
        }
    }
    render(){
        return(
        <React.Fragment>
            <h2 style={{width: '550px', margin: 'auto', textAlign: 'center', color:'#4d90fe'}}>
                Sistem Informasi E-biz
            </h2>
            <Card>
            <div>
            <Input getValues={(name, value)=> this.setState({[name]: value})}/>)
            </div>
            </Card>
            <Card>
                <div>
                <p>{this.state.your_name} </p>
                <p>{this.state.status} </p>
                </div>
            </Card>
        </React.Fragment>
        );
    }
}

// export default class Main extends Component{
//     render(){
//         return(
//             <Card>
//                 <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>{}
//             </Card>
//         );
//     }
// }