import { useState } from "react";
import FeatureBox from "./FeatureBox";
import accessIcon from '/src/assets/imgesProject/images/icon-access-anywhere.svg'
import iconSecurity from '/src/assets/imgesProject/images/icon-security.svg'
import iconCollaboration from '/src/assets/imgesProject/images/icon-collaboration.svg'
import iconAnyFile from '/src/assets/imgesProject/images/icon-any-file.svg'
function Feature() {
  const [item] = useState([
    {
      icon: accessIcon,
      title: "Access your files, anywhere",
      desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      icon: iconSecurity,
      title: "Security you can trust",
      desc: "Factor authentication and user-controlled encryption are just a couple of the security feature we allow to help secure your files.",
    },
    {
      icon: iconCollaboration,
      title: "Realtime collaboration",
      desc: "Securely share files and folders with friends, family and colleagues for live collabration. No email attachments required.",
    },
    {
      icon: iconAnyFile,
      title: "Store any type of file",
      desc: "Wather you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ]);
  return (
    <>
      <section className="container pb-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-28 w-[862px] mx-auto max-w-full">
          {item.map((item, index) => (
            <FeatureBox
              key={index}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Feature;
