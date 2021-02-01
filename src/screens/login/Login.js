import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Header from '../../common/header/Header';
import './Login.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

const username = "user";
const password = "pass";
const accessToken = "IGQVJVQmFtWGtjbHI5dUU2M2hjNkxNR1RxLXpQemtPcUdLdm9wSEZAVM3Q5RjM3VkZAHR3oxUHQ3NGdBeUI1bXVzbVhOOHBJOVJDSnktcFhPRnZAfTXRIOVRQcTkxSHY4eTFLT195VUhuQlltb2FMUlhfY3czbzZAuc0d3QnJr";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            reqUsername: "dispNone",
            reqPassword: "dispNone",
            loginSuccess: false,
            incorrectLogin: false,
        }
    }
    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
        this.state.incorrectLogin = false;
    }

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
        this.state.incorrectLogin = false;
    }

    loginHandler = () => {
        console.log("loginHandler" + this.state.username);
        this.state.username === "" ? this.setState({ reqUsername: "dispBlock" }) : this.setState({ reqUsername: "dispNone" });
        this.state.password === "" ? this.setState({ reqPassword: "dispBlock" }) : this.setState({ reqPassword: "dispNone" });
        if (this.state.username === "" || this.state.password === "") {
            return;
        }
        // update loginSuccess if login is successfull, otherwise return
        if (username === this.state.username || password === this.state.password) {
            this.state.loginSuccess = true;
        }
        else {
            this.state.incorrectLogin = true;
            return;
        }
        // redirect to home page if login is successful and
        // Store authtoken in Session Storage
        sessionStorage.setItem("access-token", accessToken)
        this.props.history.push('/home');
    }


    render() {
        return (
            <div>
                <Header />
                <Card className="card-container">
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            LOGIN
                            </Typography><br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                            <FormHelperText className={this.state.reqUsername}>
                                <span className="red">Required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /><br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" password={this.state.password} onChange={this.inputLoginPasswordChangeHandler} />
                            <FormHelperText className={this.state.reqPassword}>
                                <span className="red">Required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /><br />
                        {this.state.incorrectLogin === true &&
                            <FormControl>
                                <span className="red">
                                    Incorrect Username and/or Password
                                      </span>
                            </FormControl>
                        }
                        <br /><br />
                        <Button variant="contained" onClick={this.loginHandler} color="primary">
                            LOGIN
                            </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Login;