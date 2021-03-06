import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className=" bg-gray-800 text-white text-lg min-h-screen">
      <Header></Header>
      <main>{children}</main>
      <div className="footer"></div>
    </div>
  );
};
export default Layout;
