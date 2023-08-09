import { BiSun } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../reducer/AppSlice";
import { RootState } from "../../store";

const Theme = () => {
  const darkMode = useSelector((state: RootState) => state.blogs.darkMode);
  const dispatch = useDispatch();

  const getTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <div
      className={`w-12 h-6 rounded-full flex items-center
      border-2 border-PURPLE cursor-pointer ${
        darkMode ? "bg-CURRENT_LINE" : " bg-FOREGROUND"
      }`}
      onClick={getTheme}
    >
      <span
        className={`shadow-inner duration-200 transition ease-in-out  w-4 h-4 flex rounded-full mx-1 cursor-pointer ${
          darkMode ? " translate-x-0" : "  translate-x-5"
        }`}
      >
        <BiSun className={`${darkMode ? "hidden" : "flex text-BACKGROUND"}`} />
        <FaRegMoon
          className={`${darkMode ? "flex text-FOREGROUND" : "hidden"}`}
        />
      </span>
    </div>
  );
};

export default Theme;
