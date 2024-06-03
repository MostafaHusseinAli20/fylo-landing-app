function GetStarted() {
  const mainTitle = "Get early access today";
  return (
    <>
      <section className="container relative shadow-xl">
        <div className="bg-[#1c2230] text-white absolute xs:left-[0%] sm:left-[15%] md:left-[10%] lg:left-[15%] xl:left-[25%]
         xs:translate-x-[-15%] md:translate-x-[-10%] top-[-150px] rounded-md element-center gap-3 w-[865px]
         min-h-[275px] xs:max-w-96 md:max-w-full p-10 sm:max-w-full">
          <h3 className="font-semibold text-[25px] md:text-[35px]
          mb-3">{mainTitle}</h3>
          <p className="md:w-[620px] text-gray-300 max-w-full pb-6">
            It only takes a minute to sign up and our free started tier is
            extremely generous. If you have any
            
            questions, our support team would be happy to help you.
          </p>
          <form className="w-full flex items-center justify-between flex-wrap
          gap-[30px] md:px-[60px]">
                <input id='srvs' type="email" required
                name="user_email" placeholder="email@example.com"
                className="rounded-full p-2 text-black w-full md:flex-1 h-[50px] pl-[30px] outline-none font-medium" />
                <input type="button" value="Get Started For Free"
                className="cursor-pointer
                font-bold bg-[#42b0d1] hover:bg-btnPrimaryColor py-2 h-[50px] px-5 rounded-full w-full transition-all
                md:w-[200px]" />
          </form>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
