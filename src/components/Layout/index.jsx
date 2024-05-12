import { Outlet } from "react-router-dom";

// Layout component, wrapping Header, Footer, Outlet
const Layout = () => {
  return (
    <>
      <header>This is a header</header>
      <main>
        <Outlet />
      </main>
      <footer>This is a footer</footer>
    </>
  );
};

export default Layout;
