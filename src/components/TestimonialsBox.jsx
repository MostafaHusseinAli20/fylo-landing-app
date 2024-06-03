function TestimonialsBox({ desc, image, name, postion }) {
  return (
    <>
      <section className="text-white
      xs:translate-x-[-17%] md:translate-x-[0%] sm:translate-x-[30%] bg-[#21293c] 
      rounded-md p-8 shadow-[8px_8px_1px_8px_#1c202c]">
        <div>
          <p
            className="font-normal text-gray-100 text-sm 
                    md:w-full tracking-[0.8px] mb-8"
          >
            {desc}
          </p>
        </div>
        <div className="flex items-center gap-4 xs:w-[120%]">
          <div>
            <img
              src={image}
              alt="Profile one img"
              className="w-[50px] h-[50px] rounded-full object-contain"
            />
          </div>
          <div>
            <strong className="block mb-1">{name}</strong>
            <p className="text-gray-300">{postion}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialsBox;
