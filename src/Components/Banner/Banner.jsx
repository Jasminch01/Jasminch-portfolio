const Banner = () => {
  return (
    <div className=" bg-bg-secendary">
      <div
        data-aos="zoom-in-down"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
        className="flex justify-center items-center flex-col md:h-screen py-10 md:py-0 px-5 md:px-0 text-start space-y-5"
      >
        <p className="md:text-7xl text-3xl font-bold uppercase text-my-text">
          hi, i'm jasmin
        </p>
        <p className="md:text-2xl uppercase">Junior Fontend Developer</p>
        <p className="md:w-[30%] md:text-center text-justify">
          As a seasoned fontend developer with over 1 years of hands-on
          experience, I specialize in crafting impactful solutions that add
          significant value for my clients. My journey encompasses a dynamic
          blend of freelance and professional roles, allowing me to bring a
          wealth of diverse expertise to every project. I am committed to
          delivering top-notch results, taking pride in my ability to grasp and
          translate my client's unique needs into innovative and effective
          solutions. Let's turn your ideas into remarkable and successful
          products together.
        </p>
      </div>
    </div>
  );
};

export default Banner;
