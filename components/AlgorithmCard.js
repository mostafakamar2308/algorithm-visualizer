import Link from "next/link";

const AlgorithmCard = (props) => {
  function cclick(ele) {
    console.log(ele);
    ele.children[0].click();
  }
  return (
    <div
      id={props.AlgorithmName.split(" ").join("-")}
      onClick={() =>
        cclick(
          document.querySelector(`#${props.AlgorithmName.split(" ").join("-")}`)
        )
      }
      className="w-3/12 border border-white p-2 rounded-md m-2 hover:bg-white hover:text-black transition-all duration-200"
    >
      <Link href={"/" + props.AlgorithmName.split(" ").join("-")}>
        <a className=" font-semibold">{props.AlgorithmName}</a>
      </Link>
    </div>
  );
};

export default AlgorithmCard;
