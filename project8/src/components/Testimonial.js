import React from 'react'

export default function Testimonial() {
  return (
    <div>
        
        <section className="jarallax">
                <img src="images/background/4.jpg" className="jarallax-img" alt=""/>
                  <div className="container">
                    <div className="row gx-4">
                      <div className="col-lg-12 text-center">
                        <h2 className="title center">Testimonials
                          <span className="small-border"></span>
                        </h2>
                      </div>

                      <div className="col-md-8 offset-md-2 wow fadeInUp">

                        <div id="testimonial-carousel-single" className="owl-carousel owl-theme wow fadeInUp">
                          <blockquote className="testimonial-big">
                            <span className="d-testi">The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown</span>
                            <span className="name">Benedict Mervine, Customer</span>
                          </blockquote>

                          <blockquote className="testimonial-big">
                            <span className="d-testi">They were extremely accommodating and allowed us to check in early at like 10am. We got to hotel super early and I didn’t wanna wait. So this was a big plus. The sevice was exceptional as well. Would definitely send a friend there.</span>
                            <span className="name">Doretta Mccourtney, Customer</span>
                          </blockquote>

                          <blockquote className="testimonial-big">
                            <span className="d-testi">I had a wonderful experience at the hotel. Every staff member I encountered, from the valet to the check- in to the cleaning staff were delightful and eager to help! Thank you! Will recommend to my colleagues!</span>
                            <span className="name">Carole Hunckler, Customer</span>
                          </blockquote>
                        </div>

                      </div>
                    </div>
                  </div>
              </section>
    </div>
  )
}
