import React from "react";
import "../Style/Pricing.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

import AnimatedSection from '../Components/AnimatedSection';
const settings = {
  centerMode: true,
  centerPadding: '30',
  slidesToShow: 1,
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 5000, // Slide change interval in milliseconds
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
    }
  ]

};

const Pricing = () => {


  const data = [
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 34, city: 'San Francisco' },
    { id: 3, name: 'Alice Johnson', age: 24, city: 'Chicago' },
    { id: 4, name: 'Mike Brown', age: 45, city: 'Los Angeles' },
  ];
  return (
    <div classNamxe="main">
       <AnimatedSection>
        <section className="table-sc text-center space-mr-m ">
          <div className="container">
            <div className="top-title mb-3 pb-2">PRICING</div>
            <AnimatedSection>
              <h1 className="h1">Supercharge your productivity. Start free now</h1>
              <div className="desc mb-4 mt-3">
                No credit card required. 1/20 Cost cheap enough?
              </div>
             </AnimatedSection>
          </div>

          <div className="container container2">
            <div className="transparent-table position-relative overflow-hidden">
              <div class="table-inner position-relative overflow-hidden">
                <table class="w-100">
                  <thead>
                    <tr>
                      <th>
                        <div className="d-lg-flex f-row">
                          <h3>Compare plans</h3> <a href="" className="btn ms-lg-2 mt-lg-0 mt-2">40% Off</a>
                        </div>

                        <p>Choose your workspace plan according to your organisation</p>
                      </th>
                      <th>
                        <div className="amount"><span>$0.02</span>/Credit</div>



                        <a href="" className="btn btn-sq">Choose This Plan</a></th>
                      <th><div className="amount"><span>$0.015</span>/Credit</div>



                        <a href="" className="btn btn-sq w-100">Choose This Plan</a></th>
                      <th><div className="amount"><span>$0.01</span>/Credit</div>



                        <a href="" className="btn btn-sq w-100">Choose This Plan</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Amount of Credits</td>
                      <td>2,500 Credits</td>
                      <td>15,000 Credits</td>
                      <td>45,000 Credits</td>
                    </tr>
                    <tr>
                      <td>Equivalent of</td>
                      <td>5 Campaigns</td>
                      <td>30 Campaigns</td>
                      <td>100 Campaigns</td>
                    </tr>
                    <tr>
                      <td>Extract campaign data</td>
                      <td>
                        ⚡
                      </td>
                      <td>⚡</td>
                      <td>⚡</td>
                    </tr>
                    <tr>
                      <td>Headines</td>
                      <td>
                        ⚡
                      </td>
                      <td>⚡</td>
                      <td>⚡</td>
                    </tr>                    <tr>
                      <td>Descriptions</td>
                      <td>
                        ⚡
                      </td>
                      <td>⚡</td>
                      <td>⚡</td>
                    </tr>                    <tr>
                      <td>Callouts</td>
                      <td>
                        ⚡
                      </td>
                      <td>⚡</td>
                      <td>⚡</td>
                    </tr>                    <tr>
                      <td>Structured Snippets</td>
                      <td>
                        ⚡
                      </td>
                      <td>⚡</td>
                      <td>⚡</td>
                    </tr>                    <tr>
                      <td>Sitelinks</td>
                      <td>
                        ⚡
                      </td>
                      <td>⚡</td>
                      <td>⚡</td>
                    </tr>                    <tr>
                      <td>Multiple editions</td>
                      <td>
                        ⚡
                      </td>
                      <td>⚡</td>
                      <td>⚡</td>
                    </tr>                    <tr>
                      <td>Extract campaign data</td>
                      <td>
                        ⚡
                      </td>
                      <td>⚡</td>
                      <td>⚡</td>
                    </tr></tbody></table>
                <motion.div
                  className="gradient d-xl-block d-none"
                  initial={{ left: '0px' }}
                  animate={{ left: '100%' }}
                  transition={{
                    duration: 7,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="gradient-bottom d-xl-block d-none"
                  initial={{ top: '0px' }}
                  animate={{ top: '100%' }}
                  transition={{
                    duration: 7,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                />
              </div>
            </div>

          </div>
        </section>
       </AnimatedSection>
      <AnimatedSection>
        <section className="testimonial-sc text-center space-mr-m">
          <div className="container-fluid px-md-5 px-3 px-lg-0 overflow-hidden pb-5">
            <div className="top-title mb-3 pb-2">TESTIMONIALS</div>
            <div className="h1">Don't take take word for it. Over 1000+<br /> people trust us</div>
            <div className="desc mb-4 mt-3">
              No credit card required. 1/20 Cost cheap enough?
            </div>
            <AnimatedSection>
              <div className="testimonial-slider pt-5">
                <Slider {...settings}>
                  <div className="testimonial-block text-start">
                    <div className="logo-t mb-4">
                      ⚡
                    </div>
                    <div className="title mb-4">
                      “This incredible AI web app has transformed the way I manage data and streamline processes.”
                    </div>
                    <div className="content mb-4">
                      Their creativity, attention to detail, and prompt communication set them apart. Our website looks stunning, and our online campaigns are driving great results.
                    </div>
                    <div className="profile-sc d-flex align-items-center">
                      <div className="img-sc">
                        <img src="images/pf.jpg" alt="" />
                      </div>
                      <div className="pf-cnt ms-3">
                        <p className="m-0 text-white">Sarah Johnson</p>
                        <p className="m-0 text-white">Sarah Johnson</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-block text-start">
                    <div className="logo-t mb-4">
                      ⚡
                    </div>
                    <div className="title mb-4">
                      “This incredible AI web app has transformed the way I manage data and streamline processes.”
                    </div>
                    <div className="content mb-4">
                      Their creativity, attention to detail, and prompt communication set them apart. Our website looks stunning, and our online campaigns are driving great results.
                    </div>
                    <div className="profile-sc d-flex align-items-center">
                      <div className="img-sc">
                        <img src="images/pf.jpg" alt="" />
                      </div>
                      <div className="pf-cnt ms-3">
                        <p className="m-0">Sarah Johnson</p>
                        <p className="m-0">Sarah Johnson</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-block text-start">
                    <div className="logo-t mb-4">
                      ⚡
                    </div>
                    <div className="title mb-4">
                      “This incredible AI web app has transformed the way I manage data and streamline processes.”
                    </div>
                    <div className="content mb-4">
                      Their creativity, attention to detail, and prompt communication set them apart. Our website looks stunning, and our online campaigns are driving great results.
                    </div>
                    <div className="profile-sc d-flex align-items-center">
                      <div className="img-sc">
                        <img src="images/pf.jpg" alt="" />
                      </div>
                      <div className="pf-cnt ms-3">
                        <p className="m-0">Sarah Johnson</p>
                        <p className="m-0">Sarah Johnson</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-block text-start">
                    <div className="logo-t mb-4">
                      ⚡
                    </div>
                    <div className="title mb-4">
                      “This incredible AI web app has transformed the way I manage data and streamline processes.”
                    </div>
                    <div className="content mb-4">
                      Their creativity, attention to detail, and prompt communication set them apart. Our website looks stunning, and our online campaigns are driving great results.
                    </div>
                    <div className="profile-sc d-flex align-items-center">
                      <div className="img-sc">
                        <img src="images/pf.jpg" alt="" />
                      </div>
                      <div className="pf-cnt ms-3">
                        <p className="m-0">Sarah Johnson</p>
                        <p className="m-0">Sarah Johnson</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
             </AnimatedSection>
          </div>
        </section>
       </AnimatedSection>
      <AnimatedSection>
        <section className="faq-sc text-center space-mr-m mb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="h1">Frequently asked questions</div>
                <AnimatedSection>
                <p>Everything you need to know about the product and billing.</p>
                 </AnimatedSection>
                 <AnimatedSection>
                <div class="accordion accordion-flush text-start mt-5" id="accordionFlushExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                  </div>
                </div>
                 </AnimatedSection>
              </div>
            </div>

          </div>
        </section>
       </AnimatedSection>
      <AnimatedSection>
        <section className="question-sc text-center">
          <div className="container">
            <div className="inner-sc">
              <div className="img-flex d-flex justify-content-center">
                <div className="img-sc lft mb-4">
                  <img src="images/pf.jpg" alt="" />
                </div><div className="img-sc mdl">
                  <img src="images/pf.jpg" alt="" />
                </div><div className="img-sc rgt">
                  <img src="images/pf.jpg" alt="" />
                </div>
              </div>
              <h5>Still have questions?</h5>
              <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
              <a class="btn btn-sq mx-auto mt-4" href="">Get Template</a>

            </div>
          </div>
        </section>
       </AnimatedSection>

    </div >
  )
};

export default Pricing;