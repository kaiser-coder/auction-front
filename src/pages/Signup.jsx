import HeroSection from "../components/HeroSection"

export default function Signup() {
   return (
      <main>
         <HeroSection title="Sign Up"/>
         <section className="account-section padding-bottom">
            <div className="container">
                  <div className="account-wrapper mt--100 mt-lg--440">
                     <div className="left-side">
                        <div className="section-header">
                              <h2 className="title">SIGN UP</h2>
                              <p>We're happy you're here!</p>
                        </div>
                        <ul className="login-with">
                              <li>
                                 <a href="#0"><i className="fab fa-facebook"></i>Log in with Facebook</a>
                              </li>
                              <li>
                                 <a href="#0"><i className="fab fa-google-plus"></i>Log in with Google</a>
                              </li>
                        </ul>
                        <div className="or">
                              <span>Or</span>
                        </div>
                        <form className="login-form">
                              <div className="form-group mb-30">
                                 <label htmlFor="login-email"><i className="far fa-envelope"></i></label>
                                 <input type="text" id="login-email" placeholder="Email Address"/>
                              </div>
                              <div className="form-group mb-30">
                                 <label htmlFor="login-pass"><i className="fas fa-lock"></i></label>
                                 <input type="password" id="login-pass" placeholder="Password"/>
                                 <span className="pass-type"><i className="fas fa-eye"></i></span>
                              </div>
                              <div className="form-group checkgroup mb-30">
                                 <input type="checkbox" name="terms" id="check"/><label htmlFor="check">The Sbidu Terms of Use apply</label>
                              </div>
                              <div className="form-group mb-0">
                                 <button type="submit" className="custom-button">LOG IN</button>
                              </div>
                        </form>
                     </div>
                     <div className="right-side cl-white">
                        <div className="section-header mb-0">
                              <h3 className="title mt-0">ALREADY HAVE AN ACCOUNT?</h3>
                              <p>Log in and go to your Dashboard.</p>
                              <a href="sign-in.html" className="custom-button transparent">Login</a>
                        </div>
                     </div>
                  </div>
            </div>
         </section>
      </main>
   )
}