import AnimatedCursor from "react-animated-cursor";

const Coursor = ({ colour }) => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color={`${colour}`}
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={2}
      />
    </div>
  );
};

export default Coursor;
