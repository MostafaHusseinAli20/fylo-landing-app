import fyloImg from "/src/assets/imgesProject/images/logo.svg";
import iconLocation from "/src/assets/imgesProject/images/icon-location.svg";
import iconPhone from '/src/assets/imgesProject/images/icon-phone.svg'
import iconEmail from '/src/assets/imgesProject/images/icon-email.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
function Footer() {
    const [contact] = useState([
        {icon: iconPhone , text : "+1-543-123-4567"},
        {icon: iconEmail , text : "example@fylo.com"},
    ]);
    const[links] = useState([
        "About Us",
        "Contact Us",
        "Jobs",
        "Terms",
        "Press",
        "Privacy",
        "Blog"
    ]);
    const [socialMediaLinks] = useState([
        "facebook",
        "twitter",
        "instagram"
    ])
  return (
    <>
      <section
        className="bg-[#0C1524] pt-[320px] md:pt-[200px]
            pb-[100px] text-white"
      >
        <div className="container
        xs:translate-x-[-21%] sm:translate-x-[0%]">
          <a href="/">
            <img
              src={fyloImg}
              alt="Logo Img"
              className="object-contain w-[175px] h-[66px]"
            />
          </a>
            
          <div className=" flex flex-wrap justify-between flex-col md:flex-row">
          <div className="flex gap-4 w-80 pt-6">
            <img
              src={iconLocation}
              alt="Location Icon"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]
            xs:w-[90%] text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident amet libero unde recusandae quaerat debitis vitae,
              excepturi fugiat ducimus.
            </p>
          </div>
          {/* Contact */}
          <div className="mt-6 text-gray-300">
            {
                contact.map((contact , index) => (
                    <div key={index} className="flex items-center gap-3
                    mb-[15px] last-of-type:mb-0">
                        <img src={contact.icon}
                         alt="Phone Icon" 
                         className="h-[18px] object-contain"/>
                         <p>{contact.text}</p>
                    </div>
                ))
            }
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-[10px]
          text-gray-300">
            {
                links.map(link => (
                    <a href={`${link.toLocaleLowerCase()}`}
                    className="hover:translate-x-1 duration-200 delay-75" key={link}>
                        {link}
                    </a>
                ))
            }
          </div>
          <ul className="flex w-full gap-6 justify-center mt-7 md:w-auto">
            {
                socialMediaLinks.map(social => (
                    <li key={social}>
                        <a href="#" className="group">
                            <div className="border rounded-full h-[40px] w-[40px] element-center">
                                  {social === "facebook" ? (
                                    <FaFacebookF className="
                                group-hover:text-btnPrimaryColor"/>
                                ) : 
                                    social === "twitter" ? (
                                    <FaTwitter className="group-hover:text-btnPrimaryColor" /> 
                                ) : (
                                    <FaInstagram className="group-hover:text-btnPrimaryColor" />         
                                )}
                            </div>
                        </a>
                    </li>
                ))}
          </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
