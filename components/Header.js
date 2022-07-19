import Image from "next/dist/client/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className=" bg-slate-700 text-white flex justify-between p-3 items-center">
      <h1 className="logo text-3xl font-bold">
        <Link href={"/"}>
          <a>Easy Algorithms</a>
        </Link>
      </h1>
      <div className="call-to-action flex gap-x-2">
        <button className="fork-btn outline-none flex flex-row text-lg border border-white-500 justify-center items-center rounded-md p-2 hover:bg-indigo-500 transition-all duration-300">
          <Image src="/assets/fork.png" width={"30"} height={"25"} alt="fork" />
          <div>Fork</div>
        </button>
        <button className="border border-white-500 justify-center items-center rounded-md p-2 hover:bg-indigo-500 transition-all duration-300">
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </button>
        <button className="text-lg border border-white-500 rounded-md p-2 bg-red-400 hover:bg-sky-500 transition-all duration-300">
          Download Creator&apos;s Cv
        </button>
      </div>
    </header>
  );
};
export default Header;
