const ArrayItem = (props) => {
  return (
    <div className={`p-2 px-3 text-xl border ${props.isMid && "bg-search"}`}>
      {props.itemValue}
    </div>
  );
};
export default ArrayItem;
