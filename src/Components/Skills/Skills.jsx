const Skills = () => {
  return (
    <div className="px-5 py-20 md:px-0 bg-bg-primary">
      <div className="">
        <p
          className="text-center font-bold text-5xl uppercase"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-out"
        >
          Tachnologies i'm using
        </p>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center">
        <img
          data-aos="zoom-out"
          data-aos-delay="400"
          src={`https://skillicons.dev/icons?i=html,css,bootstrap,tailwind,javascript,react,nextjs`}
          alt=""
          className="md:block hidden my-5"
        />
        <img
          data-aos="zoom-out"
          data-aos-delay="500"
          src={`https://skillicons.dev/icons?i=firebase,express,mongodb,ai,photoshop,figma`}
          alt=""
          className="md:block hidden"
        />
        {/* form mobile device */}
        <img
          src={`https://skillicons.dev/icons?i=html,css,bootstrap,tailwind,javascript,react,firebase`}
          alt=""
          className="block md:hidden"
        />

        <img
          src={`https://skillicons.dev/icons?i=express,mongodb,ai,photoshop,figma,nextjs,`}
          alt=""
          className="block md:hidden mt-5"
        />
      </div>
    </div>
  );
};

export default Skills;
