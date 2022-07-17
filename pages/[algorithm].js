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
  return <div>{algorithm}</div>;
};

export default algorithm;
