import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class MainPage extends Component{

    signUpHandler(){
        this.props.history.push('/signup')
    }
    render(){
        return(
            <div className="MainPage">
                <h1>HOLA</h1>
                <button onClick={() => this.signUpHandler()}>Signup</button>
            </div>
        )
    }
}

export default withRouter(MainPage);