import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'


class Facebook extends Component {
    state = { 
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: '' 
     }
    componentClicked = () => console.log('clicked')
    
    responseFacebook = (response) => {
        console.log(response)
    }
    render() { 
        if (this.state.isLoggedIn){

        }else{
            
        }

        return ( <FacebookLogin 
                    appId="529247101331826" 
                    autoLoad = {true}
                    callback={this.responseFacebook}
                    icon="fab fa-facebook"
                    cssClass="my-facebook-button-class"
                    textButton = {null}
                    />
                )
        }
}
 
export default Facebook;