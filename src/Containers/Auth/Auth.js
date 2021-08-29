import React, { Component } from 'react';
import Button from '../../Components/Buttons/Button/Button';
import Input from '../../Components/Input/Input';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import { signInURL, signUpURL } from './authURL';
import { connect } from 'react-redux';
import { updateObject } from '../../utility/utility';
import { Redirect } from 'react-router';
import Spinner from '../../Components/Spinner/Spinner';

class Auth extends Component {
    state = {
        authForm: {
            email: {
                config: {
                    value: '',
                    type: 'text',
                    placeholder: 'Email',
                },
                auth: {
                    isValid: false,
                    isRequired: {
                        email: true,
                        password: false
                    }
                }
            },
            password: {
                config: {
                    value: '',
                    type: 'password',
                    placeholder: 'Password'
                },
                auth: {
                    isValid: false,
                    isRequired: {
                        email: false,
                        password: true
                    }
                }
            }
        }
    }

    onChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    authentication = (event, identifier) => {
        const newConfig = updateObject(this.state.authForm[identifier].config, {
            value: event.target.value
        });

        const newAuth = updateObject(this.state.authForm[identifier].auth, {
            isValid: this.isValid(this.state.authForm[identifier].auth.isRequired, newConfig.value)
        });

        const newIdentifier = updateObject(this.state.authForm[identifier], {
            config: newConfig,
            auth: newAuth
        })

        const newAuthForm = updateObject(this.state.authForm, {
            [identifier]: newIdentifier
        })

        const newState = updateObject(this.state, { authForm: newAuthForm });
        this.setState(newState);
    }

    isValid = (isRequired, value) => {

        if (isRequired.email) {
            return value.trim().includes('@') && value.trim().endsWith('.com') && !value.trim().includes('~!#$%^&*()_+{}|:"<>?`-=[];.,/');
        }

        if (isRequired.password) {
            return value.trim().length > 6;
        }

        return value.trim() > 0;
    }

    errorFormatter = (error) => {
        return error.split('_').join(' ');
    }

    render() {
        const inputElements = [];

        for (let input in this.state.authForm) {
            inputElements.push({
                id: input,
                config: this.state.authForm[input].config,
                isValid: this.state.authForm[input].auth.isValid
            })
        }

        const inputs = inputElements.map(input => {

            return (<Input key={input.id}
                isValid={input.isValid}
                onChangeListener={(event) => this.authentication(event, input.id)}
                placeholder={input.config.placeholder}
                type={input.config.type} />)
        })

        const authRedirect = this.props.isAuthenticated ? <Redirect to='/top-rated' /> : null;

        let auth = null;

        if (this.props.loading) {
            auth = (
                <div className={classes.Auth}>
                    <Spinner />
                </div>
            );
        }

        let error = null;
        if (this.props.error) {
            error = <p style={{color: '#d2342d', fontSize: '1.6rem', textAlign: 'center'}}>{this.errorFormatter(this.props.error)}</p>
        }

        return (
            <div className={classes.Auth}>
                {auth}
                {error}
                {authRedirect}
                {inputs}
                < div style={{ textAlign: 'left', marginTop: '.5rem' }}>
                    <Button clicked={() => this.props.signIn(signInURL, {
                        email: this.state.authForm.email.config.value,
                        password: this.state.authForm.password.config.value
                    })}
                        type='continue'>Sign In</Button>
                    <Button clicked={() => this.props.signUp(signUpURL, {
                        email: this.state.authForm.email.config.value,
                        password: this.state.authForm.password.config.value
                    })}
                        type='cancel'>Create new Account</Button>
                </div >
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (signInURL, authData) => dispatch(actions.authUser(signInURL, authData)),
        signUp: (signUpURL, authData) => dispatch(actions.authUser(signUpURL, authData)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);