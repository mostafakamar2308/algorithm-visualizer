import Head from "next/head";
import Script from "next/script";
import DataStructureSection from "../components/DataStructureSection";
import VisualRepresentationSection from "../components/VisualRepresentationSection";

export const getStaticPaths = () => {
  const algorithms = ["Binary Search", "Simple Search"];
  const paths = algorithms.map((alg) => {
    const algWord = alg.split(" ").join("-").toString();
    console.log(algWord);
    return {
      params: { algorithm: algWord },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const algorithm = context.params.algorithm;
  return {
    props: {
      algorithm,
    },
  };
};

import dataStructure from "../algorithmsCode/Binary Search Data";
import React, { useEffect, useState } from "react";
import Describe from "../components/DescripeAlgorithm";
import binarySearch from "../algorithmsCode/Binary Search";
import Logger from "../components/Logger";
const Algorithm = ({ algorithm }) => {
  const algorithmName = algorithm.split("-").join(" ");
  const [ele, setEle] = React.useState();
  useEffect(() => {
    setEle(dataStructure[Math.floor(Math.random() * dataStructure.length)]);
  }, []);

  //logging to the logger component
  useEffect(() => {
    let log = document.querySelector("#logger");

    ["log", "warn", "error"].forEach(function (verb) {
      console[verb] = (function (method, verb, log) {
        return function (text) {
          method(text);
          var msg = document.createElement("p");
          msg.classList.add(verb);
          msg.textContent = text;
          log.appendChild(msg);
        };
      })(console[verb].bind(console), verb, log);
    });
  }, []);
  const [searching, setSearching] = useState(false);
  return (
    <section className="grid grid-cols-2 grid-rows-2 max-h-screen min-h-screen">
      <Head>
        <title>{algorithmName}</title>
      </Head>
      <VisualRepresentationSection dataStructure={dataStructure} />
      <Logger ele={ele} />
      <DataStructureSection dataStructure={dataStructure} element={ele} />
      <Describe />
      <button
        onClick={() => {
          binarySearch(dataStructure, ele);
        }}
        className="fixed right-8 bottom-2  h-20  w-20 font-bold bg-blue-500 rounded-full hover:bg-blue-600 "
      >
        Start
      </button>
    </section>
  );
};

export default Algorithm;
