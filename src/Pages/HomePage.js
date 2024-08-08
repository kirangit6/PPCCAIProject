import axios from "axios";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useState } from "react";
import AnimatedSection from "../Components/AnimatedSection";
// import { Modal, Button } from 'react-bootstrap';


function Homepage() {
 const Mocksite =[
  {site_text:"GetMunch Pricing",site_url:"https://www.getmunch.com/?everid=&oid=2&affid=45&source_id=munch-pricing&gad_source=1&gclid=CjwKCAjw5Ky1BhAgEiwA5jGujvEvl46e6lRPJumAVHq3s3IGvPwjOdtBDxZykDHpcU9tw1d7DbP84xoCu_QQAvD_BwE",sitePara:"Check Out The Pricing And Pick The Best Plan"},
  {site_text:"Login",site_url:"https://www.getmunch.com/?everid=&oid=2&affid=45&source_id=munch-pricing&gad_source=1&gclid=CjwKCAjw5Ky1BhAgEiwA5jGujvEvl46e6lRPJumAVHq3s3IGvPwjOdtBDxZykDHpcU9tw1d7DbP84xoCu_QQAvD_BwE",sitePara:"Enter the Required Details To Log In To Your Account."},
  {site_text:"Main Page",site_url:"https://www.getmunch.com/?everid=&oid=2&affid=45&source_id=munch-pricing&gad_source=1&gclid=CjwKCAjw5Ky1BhAgEiwA5jGujvEvl46e6lRPJumAVHq3s3IGvPwjOdtBDxZykDHpcU9tw1d7DbP84xoCu_QQAvD_BwE",sitePara:"Get To Know Us And Find Out More"},
  {site_text:"Become An Affiliate",site_url:"https://www.getmunch.com/?everid=&oid=2&affid=45&source_id=munch-pricing&gad_source=1&gclid=CjwKCAjw5Ky1BhAgEiwA5jGujvEvl46e6lRPJumAVHq3s3IGvPwjOdtBDxZykDHpcU9tw1d7DbP84xoCu_QQAvD_BwE",sitePara:"Fill Out the Form With Your Details To Join Our Program."},
  {site_text:"Our Blog",site_url:"https://www.getmunch.com/?everid=&oid=2&affid=45&source_id=munch-pricing&gad_source=1&gclid=CjwKCAjw5Ky1BhAgEiwA5jGujvEvl46e6lRPJumAVHq3s3IGvPwjOdtBDxZykDHpcU9tw1d7DbP84xoCu_QQAvD_BwE",sitePara:"Check Out Our Blog And Get Inspired"},

 ]
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 0.9]); 
  const [showModal, setShowModal] = useState(false);
  const [showModalNext, setShowModalNext] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [siteData, setSiteData] = useState();
  const [sheetData, setSheetData] = useState();
  const [warning, setWarning] = useState('');
  const [generateSite, setGenerateSite] = useState({
    site_description: "",
    site_url: "",
  });
  const [generateSheet, setGenerateSheet] = useState({
    sheet_url: "",
    number_of_ads: 0,
  });

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleFunc = (e) => {
    const { name, value } = e.target;
    setGenerateSite((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSheetFunc = (e) => {
    const { name, value } = e.target;
    setGenerateSheet((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (value > 10) {
      setWarning('Warning: The number of ads cannot exceed 10!');
    } else {
      setWarning('');
    }
  };

  let siteText = ["বাংলা", "Log in", "français", "dansk", "español"];
  let siteLink = [
      "https://bn.khanacademy.org",
      "https://www.khanacademy.org/login",
      "https://fr.khanacademy.org",
      "https://www.khanacademy.org/login",
      "https://es.khanacademy.org"
  ];
  
  let combined = siteText.map((text, index) => {
      return { siteText: text, siteLink: siteLink[index] };
  });
  
  console.log("combined",combined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const responseGenerate = await Promise.all([
        axios.post("https://ppcc.onrender.com/generate", generateSite)

      ]);
      console.log("responseGenerate", responseGenerate);

      setSiteData(responseGenerate[0].data);
      setShowModalNext(true);



    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };



  const ExtractFunc = async () => {
    setLoading(true);
    try {
      // Make the API request
      const response = await axios.post("https://ppcc.onrender.com/extract",
        {
        // sheet_url: "",
        sheet_url: sheetData.sheet_url,

        responseType: 'blob', // Important for handling binary data
        }
      );

      // Check if response status is 201
      if (response.status === 200) {
        // Create a Blob from the response data
        const blob = new Blob([response.data], { type: 'text/csv' });

        // Create a link element
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'data.csv'; // File name for the downloaded CSV

        // Append the link to the body and click it to start the download
        document.body.appendChild(link);
        link.click();

        // Clean up and remove the link
        document.body.removeChild(link);

        alert("Download started");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to download the file");
    } finally {
      setLoading(false);
    }
  };


  const handleSubmitSheet = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (warning == ""){
      try {
  
        const response = await Promise.all([
          axios.post("https://ppcc.onrender.com/generate_ads", 
            {
              site_url:generateSite.site_url,
            sheet_url:generateSheet.sheet_url,
            number_of_ads:generateSheet.number_of_ads}
        ),
  
        ]);
        console.log("response", response);
        setSheetData(response[0].data)
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
  };



  return (
    <div className="main">
      <div className="outer-banner position-relative">
        <section className="banner text-center">
          <AnimatedSection>
            <motion.div style={{ scale }}>
              <div className="container">
                <AnimatedSection>
                  <div className="top-title mb-md-5 pb-1 mb-2">
                    CREATE A CAMPAIGN
                  </div>
                </AnimatedSection>
                <AnimatedSection>
                  <h1 className="h1">The fastest way to launch Search Ads</h1>
                  <div className="desc mb-4">
                    Generate ads in under 10 seconds using AI by entering the
                    website url you would like to promote below.
                  </div>
                </AnimatedSection>
                <AnimatedSection>
                  <div className="banner-form-sec mt-5">
                    <form className="d-md-flex justify-content-center align-items-center">

                      <div className="form-group me-3">

                        <input
                          placeholder="www.yourwebsite.com"
                          className="form-control"
                          name="site_url"
                          value={generateSite.site_url}
                          onChange={handleFunc}
                        />
                      </div>


                      <div className="submit-btn mt-md-0 mt-3 ">
                        <button
                          type="button"
                          className="btn "
                          onClick={handleSubmit}
                        >
                          Generate ad
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            focusable="false"
                            color="rgb(255, 255, 255)"
                          >
                            <g color="rgb(255, 255, 255)" weight="bold">
                              <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                            </g>
                          </svg>
                        </button>
                      </div>

                      {/* <button onClick={ExtractFunc} disabled={loading}>
        {loading ? 'Downloading...' : 'Download CSV'}
      </button>
      <button onClick={handleSubmitSheet} disabled={loading}>
        sheet_url
      </button> */}

                    </form>
                    <div className="modal-body"></div>
                  </div>
                </AnimatedSection>


                <AnimatedSection>
                  <div className="or-sec mb-4 mt-5">OR</div>
                  <div className="signup-text mb-3">
                    Sign up free with Google or Microsoft.
                  </div>
                  <div className="btm-btn-sc d-md-flex justify-content-center">
                    <a href="" className="btn btn-border mx-1">
                      <img src="/images/google.png" alt="" />
                      Continue With Google
                    </a>
                    <a href="" className="btn btn-border mx-1">
                      <img src="/images/microsoft.png" alt="" />
                      Continue With Microsoft
                    </a>
                  </div>{" "}
                </AnimatedSection>
              </div>{" "}
            </motion.div>{" "}
          </AnimatedSection>
        </section>

        <section className="frame-image-sc bg-black space-mr">
          <AnimatedSection>
            <div className="container">
              <div class="wrapper">
                <div class="desktop_mockup">
                  <div class="google_interface">
                    <div class="header_area">
                      <div class="header_ser">
                        <div class="serach_wrapper">
                          <div class="google_logo">
                            <img src="images/Google_2015_logo.svg.png" alt="" height="40px" />
                          </div>
                          <div class="google_serach">
                            <div class="ser">
                              <input type="text" class="google_serach_input" value={generateSite.site_url}/>
                              <div class="close d-none" >
                                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                              </div>
                            </div>
                            <div class="end_area">
                              <button class=" goog_btn mic">
                                <img src="images/Google_mic.svg" alt="" />
                              </button>
                              <button class=" goog_btn lens">
                                <img src="images/7123028_lens_google_icon.svg" alt="" />
                              </button>
                              <button class=" goog_btn serch_ico">
                                <img src="images/Vector_search_icon.svg.png" alt="" />
                              </button>
                            </div>

                          </div>
                        </div>
                        <div class="right ">
                          <div class="search_labs">
                            <img src="images/serachlabs.png" alt="" width="25px" />
                          </div>
                          <div class="google_apps">
                            <img src="images/186401_grid_icon.png" alt="" width="25px" />

                          </div>
                          <div class="gmail">
                            <img src="images/gamil.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div class="tabs">
                        <div class="left_tabs">
                          <button class="tab_btn active">All</button>
                          <button class="tab_btn">Images</button>
                          <button class="tab_btn">Videos</button>
                          <button class="tab_btn">News</button>
                          <button class="tab_btn">Shopping</button>
                          <button class="tab_btn">Maps</button>
                          <button class="tab_btn">Books</button>
                          <button class="tab_btn d-none"> <span><i class='bx bx-dots-vertical-rounded'></i></span> More</button>
                        </div>
                        <div class="right_tabs d-none">
                          <button class="tab_btn ">Tool</button>
                        </div>
                      </div>
                    </div>
                    <div class="capsul_tab">
                      <button class="capsul">Free</button>
                      <button class="capsul">Reviews</button>
                      <button class="capsul">Open Now</button>
                      <button class="capsul">Clips</button>
                      <button class="capsul">Pricing</button>
                      <button class="capsul">Alternative</button>
                    </div>
                    <div class="google_serach_result">
                      <div class="serach_item">
                        <div class="brand_logo_img">
                          <img src="images/download.png" alt="" />
                        </div>
                        <div class="brand_info">
                          <div class="barnd_name">
                            <h6>{siteData?.Root_URL?.split('.')[1]? siteData?.Root_URL?.split('.')[1] :"GetMunch"}</h6>
                            <div class="link">
                              <a href="https://www.getmunch.com" target="_blank" class="website_link">
                              {siteData?.Root_URL ? siteData?.Root_URL : "https://www.getmunch.com "}
                              </a>
                              <a href="" class="modal_dot"><i class='bx bx-dots-vertical-rounded' ></i></a>
                            </div>











                          </div>
                        </div>
                      </div>
                      <div class="serach_result_main">

                        <a href="https://www.getmunch.com/?everid=&oid=2&affid=45&source_id=munch&gad_source=1&gclid=CjwKCAjw5Ky1BhAgEiwA5jGujnDj13SG5uIE0xTl617SuBP3vYSLCBm1vr0jMR6uF-aQm83rxWE5xRoCpd0QAvD_BwE" class="" target="_blank">
                          <h1>{siteData?.Heading ? siteData?.Heading:" GetMunch - AI Video Editing | Munch App - Register Now "}</h1>
                        </a>
                        {/* <span class="brand_name_highlisght">Munch</span> */}
                        <p class="info">{siteData?.Description  ? siteData?.Description :
                          "extracts the most engaging, trending and impactful clips from your long-form videosis centered around machine learning capabilities, designed to keep what's important."}</p>
                      </div>
 {siteData?.Sitetext_link?.length >= 0 ? 
                      siteData?.Sitetext_link?.map((item,index)=>
                           <div class="Ktlw8e" key={index}>
                           <div class="iCzAIb">
                             <div class="d-flx">
                               <a href={item.site_url} class="">
                                 {item.site_text}
                               </a>
                               <div class="icon d-none-icon"><i class='bx bx-chevron-right'></i></div>
                             </div>
                             {/* <p class="info d-none">{item.sitePara}</p> */}
                           </div>
                         </div>
                      ):
                      Mocksite?.map((item,index)=>
                        <div class="Ktlw8e" key={index}>
                        <div class="iCzAIb">
                          <div class="d-flx">
                            <a href={item.site_url} class="">
                              {item.site_text}
                            </a>
                            <div class="icon d-none-icon"><i class='bx bx-chevron-right'></i></div>
                          </div>
                          <p class="info d-none">{item.sitePara}</p>
                        </div>
                      </div>
                   )

 }

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
      <AnimatedSection>
        <section className="extract-sc">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7 lft">
                <h2>Extract Campaign Data</h2>
                <p className="my-3">
                  Launch your Google Ads campaign by exporting to Excel and
                  importing it into the Google Ads Editor.
                </p>


                <AnimatedSection>
                  <div className="banner-form-sec mt-4">
                    <form className='d-flex justify-content-center align-items-center'>
                      <div className="form-group me-3">

                        <input
                          placeholder="sheet url"
                          className="form-control"
                          name="sheet_url"
                          value={generateSheet.sheet_url}
                          onChange={handleSheetFunc}
                        />
                        <input
                          placeholder='number of ads'
                          className='form-control mt-3 '
                          type="text"
                          name="number_of_ads"
                          value={generateSheet.number_of_ads}
                          onChange={handleSheetFunc}
                        />
                        {warning && <p style={{ color: 'red' }}>{warning}</p>}

                        <button onClick={handleSubmitSheet} className="btn btn-sq me-3 mt-3">
                          Generate ads
                        </button>

                      </div>
                    </form>
                  </div>
                </AnimatedSection>
                <div className="btn-sc d-md-flex align-items-center">
                  <div>
                    <button onClick={ExtractFunc} className="btn btn-sq me-3">
                      Extract{" "}
                      <img src="/images/rgt-ar.svg" className="ms-2" alt="" />
                    </button>

                  </div>
                  <div className="outer-more-settings position-relative">
                    <div
                      className={`more-settings py-4 ${isActive ? "active" : ""
                        }`}
                    >
                      <div className="btn btn-t btn-sq" onClick={handleToggle}>
                        More Settings
                      </div>
                      {/* <div className="title">
                    More Settings
                  </div> */}
                      <div className="settings-inner">
                        <div
                          className="ross text-end mb-3 w-100"
                          onClick={handleToggle}
                        >
                          X
                        </div>
                        <div className="outer-label">
                          <div className="flex-lb d-flex">
                            <div className="label-sc">
                              <input type="checkbox" />
                              <label htmlFor="">All</label>
                            </div>{" "}
                            <div className="label-sc">
                              <input type="checkbox" />
                              <label htmlFor="">Headline</label>
                            </div>
                          </div>
                          <div className="flex-lb d-flex">
                            <div className="label-sc">
                              <input type="checkbox" />
                              <label htmlFor="">Descriptions</label>
                            </div>{" "}
                            <div className="label-sc">
                              <input type="checkbox" />
                              <label htmlFor="">Sitelinks</label>
                            </div>
                          </div>
                          <div className="flex-lb d-flex">
                            <div className="label-sc">
                              <input type="checkbox" />
                              <label htmlFor="">Callout</label>
                            </div>{" "}
                            <div className="label-sc">
                              <input type="checkbox" />
                              <label htmlFor="">Snippets</label>
                            </div>
                          </div>
                          <div className=" d-flex amounsc1 mt-2">
                            <div className="label-sc1 d-flex align-items-center">
                              <label htmlFor="" className="me-2">
                                Amount
                              </label>
                              <input type="number" value="0" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 rgt mt-md-0 mt-5">
                <img src="/images/extract.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <div
        className={`modal fade ${showModal ? "active" : ""}`}
        id="myModal"
        tabIndex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content p-4">
            <button
              type="button"
              className="close ms-auto"
              onClick={handleClose}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <div className="modal-body">
              {/* <p className="mb-2 text-black"><strong>Ad.</strong> example.business.com</p>
              <h3 className="mb-2 text-black"><strong>Modern Design.Co</strong></h3>
              <p className="mb-0 text-black">Ther best modal</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
