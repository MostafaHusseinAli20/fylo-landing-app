function FeatureBox({ title, icon, desc }) {
  return (
    <>
      <section>
        <div className="text-white element-center text-center">
          <img
            src={`/src/assets/imgesProject/images/${icon}`}
            alt="icon one img"
            className="w-[80px] h-[80px] object-contain"
          />
          <h4 className="text-xl font-semibold my-3">{title}</h4>
          <p className="text-sm w-96 text-gray-300">{desc}</p>
        </div>
      </section>
    </>
  );
}

export default FeatureBox;
