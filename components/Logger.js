const Logger = (props) => {
  return (
    <div id="logger" className=" overflow-y-scroll p-2">
      <h1>We will search for: {props.ele}</h1>
    </div>
  );
};
export default Logger;
