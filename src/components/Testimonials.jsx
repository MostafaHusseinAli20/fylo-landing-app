import { useState } from "react";
import qoutesImg from "/src/assets/imgesProject/images/bg-quotes.png"
import TestimonialsBox from "./TestimonialsBox";
import profile1 from '/src/assets/imgesProject/images/profile-1.jpg'
import profile2 from '/src/assets/imgesProject/images/profile-2.jpg'
import profile3 from '/src/assets/imgesProject/images/profile-3.jpg'
function Testimonials() {
    const[testData] = useState([{
        id : 1,
        desc : "Fylo has imporved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collabration machine.",
        image : profile1,
        name : "Satish Patel",
        postion : "Founder & CEO, Huddle"
    },
    {
        id : 2,
        desc : "Fylo has imporved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collabration machine.",
        image : profile2,
        name : "Bruce Mckenzle",
        postion : "Founder & CEO, Huddle"
    },
    {
        id : 3,
        desc : "Fylo has imporved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collabration machine.",
        image : profile3,
        name : "Iva Boyed",
        postion : "Founder & CEO, Huddle"
    },
    ])
    return ( 
        <>
            <section className="pb-[350px]">
                <div className="container  relative">
                    <div className="absolute
                    xs:translate-x-[-40%]
                    sm:translate-x-[180%] md:translate-x-[0%] left-[0px] md:left-[20px] top-[-35px]">
                        <img src={qoutesImg} alt="Qoutes Img" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 
                    xs:w-72 md:w-full lg:grid-cols-3 gap-10 relative z-10">
                        {
                            testData.map(test => (
                                <TestimonialsBox key={test.id}
                                desc = {test.desc}
                                image={test.image}
                                name={test.name}
                                postion={test.postion}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
     );
}

export default Testimonials;