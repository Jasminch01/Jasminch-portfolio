const Skills = () => {
  return (
    <div className="px-5 py-20 md:px-0 bg-bg-primary">
      <div className="">
        <p
          className="text-center font-bold md:text-5xl text-2xl uppercase text-my-text"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          Tachnologies i'm using
        </p>
      </div>
      <div className="mt-5 flex items-center justify-center flex-col">
        <img
          data-aos="fade-up"
          data-aos-duratain="1000"
          src={`https://skillicons.dev/icons?i=bootstrap,tailwind,javascript,typescript,react,nextjs,redux`}
          alt=""
          className="md:block hidden my-5"
        />
        <img
          data-aos="fade-up"
          data-aos-duratain="1000"
          src={`https://skillicons.dev/icons?i=nodejs,firebase,express,mongodb,ai,photoshop,figma`}
          alt=""
          className="md:block hidden"
        />
        {/* form mobile device */}
        <img
          data-aos="fade-up"
          data-aos-duratain="1000"
          src={`https://skillicons.dev/icons?i=bootstrap,tailwind,javascript,typescript,react,nextjs,redux`}
          alt=""
          className="block md:hidden"
        />

        <img
          data-aos="fade-up"
          data-aos-duratain="1000"
          src={`https://skillicons.dev/icons?i=nodejs,firebase,express,mongodb,ai,photoshop,figma`}
          alt=""
          className="block md:hidden mt-5"
        />
      </div>
    </div>
  );
};

export default Skills;
