import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import img from '../../Assets/Images/logo.png'
import './Login.css'

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            }).catch((error) => {
                history.push("/home");
            })
    }
    return (
        <div className="mt-5 pt-5 login">
            <Container className="h-100">
                <h1 className="text-center text-white customized-bg "> <span className="google-login px-4 py-2">Log In</span></h1>
                <div className="row align-items-center h-50">
                    <div className="col-lg-6 col-sm-12 "></div>
                    <div className="col-lg-6 col-sm-12 text-center h-75 w-50 ">
                        <div className=" google-login h-100 d-flex align-items-center justify-content-center mt-5">
                            <div>
                                <img src={img} width="60px" height="50px" alt="" />
                                <h1><span className="text-white">TRANS</span><span className="text-danger">PO</span></h1>
                                <button
                                    className="btn btn-success"
                                    onClick={handleGoogleLogIn}
                                >Sign in with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LogIn;