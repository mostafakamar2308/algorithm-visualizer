const DataStructureSection = (props) => {
  return (
    <div className="border-t-2 border-r-2 flex flex-col justify-center items-center gap-y-20">
      <div className="  flex justify-center items-center">
        <h1 className="text-4xl">[ {props.dataStructure.join(" , ")} ]</h1>
      </div>
    </div>
  );
};

export default DataStructureSection;
