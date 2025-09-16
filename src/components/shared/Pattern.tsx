import Pattern from "../../assets/pattern/topography.svg";

export const TopographyPattern = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${Pattern}')`,
        }}
      ></div>
    </div>
  );
};
