import Desktop from "../desktop/Desktop";
import Toolbar from "../toolbar/Toolbar";

const Layout = ({ children }) => {
  return (
    <main className="relative w-full h-screen bg-slate-100 flex flex-col">
      <Desktop>{children}</Desktop>
      <Toolbar />
    </main>
  );
};

export default Layout;
