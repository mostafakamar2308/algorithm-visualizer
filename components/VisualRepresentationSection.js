import ArrayItem from "./ArrayItem";

const VisualRepresentationSection = (props) => {
  return (
    <div className="border-r-2 flex justify-center items-center">
      <div className="flex">
        {props.dataStructure.map((ele) => (
          <ArrayItem itemValue={ele} isMid={true} key={ele.toString()} />
        ))}
      </div>
    </div>
  );
};
export default VisualRepresentationSection;
