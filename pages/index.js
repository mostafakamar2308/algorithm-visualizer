import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import AlgorithmCard from "../components/AlgorithmCard";
import SearchBar from "../components/Searchbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const algorithms = ["Binary Search", "Simple Search"];
  const [visibleAlgorithms, setVisibleAlgorithms] = useState(algorithms);

  const handleInput = () => {
    let nes = algorithms.filter((ele) => {
      console.log(document.querySelector("#searchbar").value.toUpperCase());
      console.log(ele.toUpperCase());
      if (
        ele
          .toUpperCase()
          .includes(document.querySelector("#searchbar").value.toUpperCase())
      )
        return ele;
    });
    console.log(nes);
    setVisibleAlgorithms(nes);
  };
  return (
    <section>
      <Head>
        <title>Easy Algorithm Visualizer</title>
      </Head>
      <div className="w-full p-10">
        <SearchBar data={algorithms} whenInput={handleInput} />
      </div>
      <div className="flex flex-wrap w-10/12 mx-auto">
        {visibleAlgorithms.map((ele) => {
          return <AlgorithmCard AlgorithmName={ele} key={ele} />;
        })}
      </div>
    </section>
  );
}
