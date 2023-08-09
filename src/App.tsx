import { Outlet } from "react-router-dom";
import MainMenu from "./components/menu/MainMenu";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const darkMode = useSelector((state: RootState) => state.blogs.darkMode);
  return (
    <div
      className={`min-h-screen shadow-xl ${
        darkMode
          ? "bg-BACKGROUND text-FOREGROUND"
          : "bg-FOREGROUND text-BACKGROUND"
      }`}
    >
      <header
        className={`${
          darkMode
            ? "bg-FOREGROUND text-BACKGROUND"
            : "bg-BACKGROUND text-FOREGROUND"
        }`}
      >
        <MainMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
