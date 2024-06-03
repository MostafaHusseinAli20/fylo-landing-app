import StayProdactiveImg from "/src/assets/imgesProject/images/illustration-stay-productive.png";
import arrowIcon from '/src/assets/imgesProject/images/icon-arrow.svg'
function StayProdactive() {
  return (
    <>
      <section className="pb-[150px]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
          <div>
            <img
              src={StayProdactiveImg}
              alt="stay productive img"
            />
          </div>
          <div className="text-white">
            <h3 className=" font-medium text-[35px] leading-[50px]">
              Stay productive,
              <br />
              wherever you are
            </h3>
            <div className="my-[15px] font-normal text-sm tracking-[0.8px] text-gray-300">
              <p className="mb-[15px] xs:w-80 md:w-full">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                excepturi incidunt quo deserunt quidem accusamus iure ab earum
                reprehenderit debitis!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                excepturi incidunt quo deserunt quidem accusamus iure ab earum
                reprehenderit debitis!
              </p>
            </div>
            <a
              href=""
              className="flex items-center gap-[15px] border-b-2 pb-1 w-fit
              hover:font-bold hover:transition-all delay-75
               text-btnPrimaryColor hover:text-[#42b0d1]
             border-btnPrimaryColor transition-colors"
              
            >
              See how Fylo works
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default StayProdactive;
