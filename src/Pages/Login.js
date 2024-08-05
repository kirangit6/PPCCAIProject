import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Login.css';
import { motion, Variants } from "framer-motion";
import publicly from "../assets/images/frame1.png";
import AnimatedSection from '../Components/AnimatedSection';
function Login() {

  return (
    <>
      <header className="header py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="logo">
                <Link to="/">{"<-Back Home"}</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatedSection>
        <main className="logincontent">
          <div className="container">
            <AnimatedSection>
              <h6 className="h6">Welcome back</h6>
            </AnimatedSection>
            <AnimatedSection>
              <div className="desc mb-4">
                Access your account now
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="banner-form-sec mt-4">
                <form className='d-flex justify-content-center align-items-center'>
                  <div className="form-group me-3">
                    <input placeholder='www.yourwebsite.com' className='form-control' />
                    <button className='form-control mt-3'>Sign Up</button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="or-sec-login mb-2 mt-2">
                OR
              </div>  </AnimatedSection>
            <AnimatedSection>
              <div className="banner-form-sec mt-4">
                <form className='d-flex justify-content-center align-items-center'>
                  <div className="form-group ">
                    <Link to="" className='form-control btn btn-border mx-1 mb-3'><img src="/images/google.png" alt="" />Continue With Google</Link>
                    <br />
                    <Link to="" className='form-control btn btn-border mx-1 mb-4'><img src="/images/microsoft.png" alt="" />Continue With Microsoft</Link>
                  </div>
                </form>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <p className="signup-text mb-3">
                Already have an account? <span className=''>Sign Up</span>
              </p>
            </AnimatedSection>
          </div>
        </main>  </AnimatedSection>
    </>

  );
}

export default Login;



