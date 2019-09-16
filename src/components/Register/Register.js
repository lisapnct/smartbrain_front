import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

      onRouteChange = (route) => {
    if (route === 'logout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://infinite-anchorage-19440.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
    }

    render () {
        const { onRouteChange } = this.props;
        return (
            <div className="flex items-center pt5">
                <article className="br4 ba b--black-10 mv5 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 white">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">REGISTER</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name"/>Name
                                    <input 
                                        className="pa2 mt2 white input-reset ba bg-transparent hover-white w-100" 
                                        type="text" 
                                        name="name"  
                                        id="name"
                                        onChange={this.onNameChange}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address"/>Email
                                    <input 
                                        className="pa2 mt2 white input-reset ba bg-transparent hover-white w-100" 
                                        type="email" 
                                        name="email-address"  
                                        id="email-address"
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password"/>Password
                                    <input 
                                        className="b mt2 white pa2 input-reset ba bg-transparent hover-white w-100" 
                                        type="password" 
                                        name="password"  
                                        id="password"
                                        onChange={this.onPasswordChange}
                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                <input 
                                    onClick={this.onSubmitSignIn}
                                    className="b br3 white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
                                    type="submit" 
                                    value="Register"/>
                            </div>
                            <div className="lh-copy mt3">
                                <p 
                                onClick={() => onRouteChange('signin')} 
                                href="#0" 
                                className="f6 pointer white link dim black db">
                                    Sign in
                                </p>
                            </div>                   
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}

export default Register;
