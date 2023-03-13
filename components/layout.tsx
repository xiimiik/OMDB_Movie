import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <main className="vh-100">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
