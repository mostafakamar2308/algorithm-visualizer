import Image from "next/dist/client/image";
const Header = () => {
  return (
    <header className="bg-indigo-700 text-white flex justify-between p-3 items-center">
      <h1 className="logo text-xl select-none">Easy Algorithms</h1>
      <div className="call-to-action">
        <button className="fork-btn outline-none flex flex-row text-lg border border-white-500 justify-center items-center rounded-md p-1">
          <Image src="/assets/fork.png" width={"30"} height={"25"} alt="fork" />
          <div>Fork</div>
        </button>
      </div>
    </header>
  );
};
export default Header;
