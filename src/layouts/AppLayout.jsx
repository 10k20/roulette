import Header from "../components/common/Header";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AppLayout;