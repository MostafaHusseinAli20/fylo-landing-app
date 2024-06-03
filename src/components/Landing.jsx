import illustrationBg from '/src/assets/imgesProject/images/illustration-intro.png'
function Landing() {
  return (
    <>
      <section className="bg-[#1c2230]">
        <div className="container element-center pt-[180px]">
          <div className="w-[750px] max-w-full">
            <img
              src={illustrationBg}
              alt="Illustration Img"
              className="w-full h-fit"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[20px] md:text-[40px] font-bold">
              All your files in one secure location,
              <br />
              accessible anywhere.
            </h1>
            <p className="font-normal text-lg my-3
            text-gray-300 px-[15px] xs:w-[420px] md:w-[500px] md:max-w-full md:mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus quibusdam nam magnam dolore soluta, magni obcaecati
              officia, reprehenderit!
            </p>
          </div>
          <a
            href="#"
            className="text-white font-bold rounded-[20px] xs:px-10 md:px-16 py-3 btn mt-1 mb-4"
          >
            Get Started
          </a>
        </div>
        {/* Wave Background */}
        <div className="w-full h-[200px]">
          <img
            src="/src/assets/imgesProject/images/bg-curvy-desktop.svg"
            alt="Wave Background"
            className="w-full h-full"
          />
        </div>
      </section>
    </>
  );
}

export default Landing;
