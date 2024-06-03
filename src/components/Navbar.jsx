import { useEffect, useRef, useState } from "react";

function Navbar() {
  const headerRef = useRef();

  const [links] = useState(["Features", "Team", "Signin"]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);
  return (
    <>
      <header
        ref={headerRef}
        className="py-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-300"
      >
        <div className="container mx-auto md:flex md:px-9 md:justify-between md:items-center flex-col sm:flex-row">
          <a href="#">
            <img
              src="src/assets/imgesProject/images/logo.svg"
              className="object-contain"
              alt="logo"
            />
          </a>
          <nav>
            <ul className="flex gap-10 xs:pt-7 md:pt-0">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-white opacity-90 hover:opacity-100 
                                hover:border-b-2 hover:border-[#8cdae4]  
                                pb-[5px] hover:translate-x-4 transition-opacity 
                                duration-200"
                    href={`/${link.toLocaleLowerCase()}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
