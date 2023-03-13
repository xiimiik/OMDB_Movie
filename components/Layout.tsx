import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <main className="vh-100">
      <Header />
      {children}
    </main>
  );
};
