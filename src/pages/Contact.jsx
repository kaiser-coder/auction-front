import HeroSection from '../components/HeroSection'

export default function Contact() {
   return (
      <main>
         <HeroSection title="Contact"/>
         <section className="contact-section padding-bottom">
            <div className="container">
                  <div className="contact-wrapper padding-top padding-bottom mt--100 mt-lg--440">
                     <div className="section-header">
                        <h5 className="cate">Contact Us</h5>
                        <h2 className="title">get in touch</h2>
                        <p>We'd love to hear from you! Let us know how we can help.</p>
                     </div>
                     <div className="row">
                        <div className="col-xl-8 col-lg-7">
                              <form className="contact-form" id="contact_form">
                                 <div className="form-group">
                                    <label htmlFor="name"><i className="far fa-user"></i></label>
                                    <input type="text" placeholder="Your Name" name="name" id="name"/>
                                 </div>
                                 <div className="form-group">
                                    <label htmlFor="name"><i className="fas fa-envelope-open-text"></i></label>
                                    <input type="text" placeholder="Enter Your Email ID" name="email" id="email"/>
                                 </div>
                                 <div className="form-group">
                                    <label htmlFor="message" className="message"><i className="far fa-envelope"></i></label>
                                    <textarea name="message" id="message" placeholder="Type Your Message"></textarea>
                                 </div>
                                 <div className="form-group text-center mb-0">
                                    <button type="submit" className="custom-button">Send Message</button>
                                 </div>
                              </form>
                        </div>
                        <div className="col-xl-4 col-lg-5 d-lg-block d-none">
                              <img src="assets/images/contact.png" className="w-100" alt="images"/>
                        </div>
                     </div>
                  </div>
            </div>
         </section>
      </main>
   )
}