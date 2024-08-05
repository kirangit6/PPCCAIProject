import Reactt, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Contact.css";
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
const logos = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};
function Contact() {
    const tabcontent = [
        {
            id: 1, title: 'Safety', conten_ttitle: 'TIME & VALUE',
            subtitle: 'We will help you keep your organization, employees and data safe.',
            description: 'Every choice we make is to ensure safety so you don’t need to worry. We will always be safer than public solutions. We only offer connections when the provider guarantees not to reuse your data for any reason and then we provide further checks so you are always safer than public solutions.',
            listItems: [
                'No reuse of query data for any purpose.',
                'All APIs are selected on the basis they guarantee data privacy.',
                'Each client has own instance of portal with no shared information.',
                'Uploads are all checked against GDPR rules and can be restricted.',
                'Restrictions granular so each industry and organization can have own upload rules.'
            ],
            buttonText: 'Get Started',
            buttonLink: '',
            image: 'images/bg.png'
        },
        {
            id: 2, title: 'Security & Certifications', conten_ttitle: 'TIME & VALUE',
            subtitle: 'We will help you keep your organization, employees and data safe.',
            description: 'Every choice we make is to ensure safety so you don’t need to worry. We will always be safer than public solutions. We only offer connections when the provider guarantees not to reuse your data for any reason and then we provide further checks so you are always safer than public solutions.',
            listItems: [
                'No reuse of query data for any purpose.',
                'All APIs are selected on the basis they guarantee data privacy.',
                'Each client has own instance of portal with no shared information.',
                'Uploads are all checked against GDPR rules and can be restricted.',
                'Restrictions granular so each industry and organization can have own upload rules.'
            ],
            buttonText: 'Get Started',
            buttonLink: '',
            image: 'images/bg2.png'
        },
        {
            id: 3, title: 'Audit', conten_ttitle: 'TIME & VALUE',
            subtitle: 'We will help you keep your organization, employees and data safe.',
            description: 'Every choice we make is to ensure safety so you don’t need to worry. We will always be safer than public solutions. We only offer connections when the provider guarantees not to reuse your data for any reason and then we provide further checks so you are always safer than public solutions.',
            listItems: [
                'No reuse of query data for any purpose.',
                'All APIs are selected on the basis they guarantee data privacy.',
                'Each client has own instance of portal with no shared information.',
                'Uploads are all checked against GDPR rules and can be restricted.',
                'Restrictions granular so each industry and organization can have own upload rules.'
            ],
            buttonText: 'Get Started',
            buttonLink: '',
            image: 'images/bg3.png'
        },
        {
            id: 4, title: 'Platform', conten_ttitle: 'TIME & VALUE',
            subtitle: 'We will help you keep your organization, employees and data safe.',
            description: 'Every choice we make is to ensure safety so you don’t need to worry. We will always be safer than public solutions. We only offer connections when the provider guarantees not to reuse your data for any reason and then we provide further checks so you are always safer than public solutions.',
            listItems: [
                'No reuse of query data for any purpose.',
                'All APIs are selected on the basis they guarantee data privacy.',
                'Each client has own instance of portal with no shared information.',
                'Uploads are all checked against GDPR rules and can be restricted.',
                'Restrictions granular so each industry and organization can have own upload rules.'
            ],
            buttonText: 'Get Started',
            buttonLink: '',
            image: 'images/bg1.webp'
        },
        {
            id: 5, title: 'Time & value', conten_ttitle: 'TIME & VALUE',
            subtitle: 'We will help you keep your organization, employees and data safe.',
            description: 'Every choice we make is to ensure safety so you don’t need to worry. We will always be safer than public solutions. We only offer connections when the provider guarantees not to reuse your data for any reason and then we provide further checks so you are always safer than public solutions.',
            listItems: [
                'No reuse of query data for any purpose.',
                'All APIs are selected on the basis they guarantee data privacy.',
                'Each client has own instance of portal with no shared information.',
                'Uploads are all checked against GDPR rules and can be restricted.',
                'Restrictions granular so each industry and organization can have own upload rules.'
            ],
            buttonText: 'Get Started',
            buttonLink: '',
            image: 'images/bg1.webp'
        },

    ];
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        // Set the first item as active only on the first render
        setActiveId(1);
    }, []);
    const handleClick = (id) => {
        setActiveId(id);
    };

    return (
        <div>
            <AnimatedSection>
                <section className="contact-sc text-center space-mr-m ">
                    <div className="container">
                        <div className="top-title mb-3 pb-2">ENTERPRISE</div>
                        <AnimatedSection>
                            <h1 className="h1 btm-shadow">Built with enterprises, for enterprises</h1>
                            <div className="desc mb-4 mt-3">
                                Your organization wants to keep itself safe, secure and well governed, we get it. We have done all the hard work to<br /> ensure your organizational, employee and data are protected.
                            </div>
                            <div class="btn-sec mt-5 d-md-flex justify-content-center">
                                <a class="btn  me-3" href="/login">Contact Sales</a>
                                <a class="btn btn-t" href="/">Try for Free</a>
                            </div>
                        </AnimatedSection>
                    </div>


                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="logo-sc   text-center space-mr-m ">
                    <div className="container ">
                        <div className="top-title1 mb-3 pb-2">SOME OF OUR TRUSTED CLIENTS</div>
                        <div className="outer-wp position-relative">
                            <div className=" mt-5">
                                <Slider {...logos}>
                                    <div className="logo-blk ">
                                        <img src="images/logo.png" alt="" />
                                    </div>
                                    <div className="logo-blk ">
                                        <img src="images/logo.png" alt="" />
                                    </div>
                                    <div className="logo-blk ">
                                        <img src="images/logo2.png" alt="" />
                                    </div>
                                    <div className="logo-blk ">
                                        <img src="images/logo3.png" alt="" />
                                    </div>
                                    <div className="logo-blk ">
                                        <img src="images/logo4.png" alt="" />
                                    </div>
                                    <div className="logo-blk ">
                                        <img src="images/logo.png" alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>


                </section>
            </AnimatedSection>

            <section className="google-sc  text-center">
                <AnimatedSection>
                    <div className="container">
                        <div className="logo-sc mb-4">
                            <img src="images/logo2.png" alt="" />
                        </div>
                        <div class="h1 btm-shadow">“This incredible AI web app has transformed the way I<br /> manage data and streamline processes.”</div>
                        <div className="img-sc mt-4 ">
                            <img src="images/pf.jpg" alt="" />
                            <p className='p-0 mb-0 mt-4'><strong>Candice Wu</strong></p>
                            <p className='p-0 mt-0 mb-0'>Product Manager, Google</p>
                        </div>
                    </div>  </AnimatedSection>
            </section>

            <AnimatedSection>
                <section className="tab-sc space-mr-m">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="row1 d-flex justify-content-between">
                                    {tabcontent.map(item => (

                                        <div className={`btn btn-t tab-blk ${item.id === activeId ? 'active-btn' : ''}`} key={item.id} onClick={() => handleClick(item.id)}>
                                            {item.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='tab-content position-relative'>
                            {tabcontent.map(item => (

                                <div className={` tab-content-inner position-relative tab-content mt-5 ${item.id === activeId ? 'active-cnt ' : ''}`}>
                                    <div className="contact-btn text-end">
                                        <a href="btn" className='btn btm-shadow'><strong>Click Here</strong></a>
                                    </div>
                                    <div className="rgt-img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="btm-wrp">
                                        <div className="top-title">
                                            {item.title}
                                        </div>
                                        <h2 className='btm-shadow mt-4'>
                                            {item.subtitle}
                                        </h2>
                                        <p>
                                            {item.description}
                                        </p>
                                        <ul className='my-4'>
                                            {item.listItems.map((listItem, index) => (
                                                <li key={index}>{listItem}</li>
                                            ))}
                                        </ul>
                                        <div className="btn-sc">
                                            <a href={item.buttonLink} className="button">
                                                {item.buttonText} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)"><g color="rgb(255, 255, 255)" weight="bold"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></g></svg>
                                            </a>
                                        </div></div>
                                </div>
                            ))}
                            <div className="btm-layer">
                                <div className="layer-wp ly-2">
                                </div><div className="layer-wp ly-3">
                                </div><div className="layer-wp ly-4">
                                </div><div className="layer-wp ly-5">
                                </div>
                            </div>
                        </div>

                    </div>
                </section>  </AnimatedSection>
            <AnimatedSection>
                <section className="testimonial-sc text-center space-mr-m">
                    <div className="container-fluid px-md-5 px-3 px-lg-0 overflow-hidden pb-5">
                        <div className="top-title mb-3 pb-2">TESTIMONIALS</div>
                        <div className="h2 text-white">Don't take take word for it. Over 1000+<br /> people trust us</div>
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
                                <div className="h2 text-white">Frequently asked questions</div>
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
        </div>
    )
}

export default Contact
