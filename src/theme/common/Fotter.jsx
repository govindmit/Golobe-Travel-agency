import React, { useState } from "react";
import logo from "../../assets/images/Group.svg";
import { BiLogoInstagramAlt } from "react-icons/bi";
import vector from "../../assets/images/emojione.svg";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import Wrapper from "../../assets/wrapper/FotterWraper";

const url =
  "https://gmail.us21.list-manage.com/subscribe/post?u=f2d36a7be4fb05be81b08eaf1&id=7f4859b62c";

const SimpleForm = () => <MailchimpSubscribe url={url} />;

const ContactsList = ["Our Story", "Work with us"];
const AboutUsList = ["Our Story", "Work with us"];
const TravelList = [
  "Bali Travel Guide",
  "Sri Lanks Travel Guide",
  "Peru Travel Guide",
  "Bali Travel Guide",
];
const ActivityList = [
  "Northern Lights",
  "Cruising & sailing",
  "Multi-activities",
  "Kayaing",
];
const DestinationList = ["Canada", "Alaksa", "France", "Iceland"];

const socialIcons = [
  { icon: <BsFacebook color="black" /> },
  { icon: <BsTwitter color="black" /> },
  { icon: <BsYoutube color="black" /> },
  { icon: <BiLogoInstagramAlt color="black" /> },
];

const Fotter = () => {
  return (
    <Wrapper>
      <div className="foter-secondmain">
        <div className="foter-subssection">
          <div className="foter-sub-newsletter">Subscribe Newsletter</div>
          <div className="foter-travel-sec">
            <div className="foter-main-travel">
              <div className="travel-text">The Travel</div>
              <div className="get-insp-text">
                Get inspired! Receive travel discounts, tips and behind the
                scenes stories.
              </div>
            </div>
            <div className="form-em-div">
              <div className="input-field-email">
                <div className="emaill">
                  <div className="inner-email-div">
                    <div className="more-inner">
                      <MailchimpSubscribe
                        url={url}
                        render={({ subscribe, status, message }) => (
                          <div className="Newsletter">
                            <SimpleForm
                              onSubmitted={(formData) => subscribe(formData)}
                            />
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-div-same">
          <img className="full-image-control" src={vector} alt="" />
        </div>
      </div>
      <div className="divforasection">
        {/*------------------------Iconss-------------------------------------- */}
        <div className="Iconsdivsection">
          <div className="inner-icons">
            <div className="logo-image-div">
              <img className="main-logo-img" src={logo} alt="logo" />
            </div>
          </div>
          <div className="social-icons-maindiv">
            {socialIcons.map((item) => {
              return <div className="social-icons">{item.icon}</div>;
            })}
          </div>
        </div>
        {/*------------------------Below Section's are Wrapped in this Div-------------------------------------- */}
        <div className="section-dive">
          {/*------------------------Our Destinatons Section-------------------------------------- */}
          <div className="Desi-div">
            <div className="our-des">Our Destinations</div>
            <div className="DesLis">
              {DestinationList.map((item) => {
                return <div className="deslismap">{...item}</div>;
              })}
            </div>
          </div>
          {/*------------------------Our Activities Section-------------------------------------- */}
          <div className="our-activ-div">
            <div className="our-acti">Our Activities</div>
            <div className="ActivList">
              {ActivityList.map((item) => {
                return <div className="ActivLisMapitem">{...item}</div>;
              })}
            </div>
          </div>
          {/*------------------------Travel Blogs Section-------------------------------------- */}
          <div className="Trave-Blog-div">
            <div className="TravelBlog">Travel Blogs</div>
            <div className="TravelListBl">
              {TravelList.map((item) => {
                return <div className="MapTheTravel">{...item}</div>;
              })}
            </div>
          </div>
          {/*------------------------About Us Section-------------------------------------- */}
          <div className="About-Us-div">
            <div className="About">About Us</div>
            <div className="ListofAbout">
              {AboutUsList.map((item) => {
                return <div className="MapTheAbout">{...item}</div>;
              })}
            </div>
          </div>
          {/*------------------------Contact Us Section-------------------------------------- */}
          <div className="Contact-us-div">
            <div className="Contact">Contact Us</div>
            <div className="ListofCont">
              {ContactsList.map((item) => {
                return <div className="MapTheContList">{...item}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Fotter;
