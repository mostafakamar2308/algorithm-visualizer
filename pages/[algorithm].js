import Head from "next/head";

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

const algorithm = ({ algorithm }) => {
  const algorithmName = algorithm.split("-").join(" ");
  return (
    <section className="grid grid-cols-2 grid-rows-2 max-h-screen min-h-screen">
      <Head>
        <title>{algorithmName}</title>
      </Head>
      <div id="visual">Visual Representation</div>
      <div id="logger">Logger</div>
      <div id="data-structure">Data structure</div>
      <div id="code-highlight">Code HighLight</div>
    </section>
  );
};

export default algorithm;
