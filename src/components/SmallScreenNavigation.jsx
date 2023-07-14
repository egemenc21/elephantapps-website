import { AiOutlineClose } from "react-icons/ai";
import NavbarList from "./NavbarList";
import { LangButton } from "../routers/Navigation";
import { nanoid } from "nanoid";
import { navbarNames } from "../routers/Navigation";
import TRLogo from "../assets/originalAssets/lang/tr.svg";
import ENLogo from "../assets/originalAssets/lang/en.svg";
import { AnimatePresence ,motion} from "framer-motion";


export const SmallScreenNavigation = ({ nav, handleNav, handleLang, lang }) => (
  <AnimatePresence>
  {nav && (
    <motion.div
      key="modal"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.7,ease:"easeOut" }}
      className="fixed left-0 top-0 w-[100%] h-[100vh] bg-white"
    >
      <ul className="text-xl flex flex-col items-center justify-center my-[25%]">
        <li onClick={handleNav}>
          <AiOutlineClose size={30} />
        </li>
        {navbarNames.map((name) => (
          <NavbarList name={name} key={nanoid()} />
        ))}
        <li
          className="px-4 py-2 mx-4 bg-[#fafafa] text-[#ff5354] flex justify-between gap-1"
          onClick={handleLang}
        >
          {" "}
          {lang ? (
            <LangButton logo={ENLogo} lang={"EN"} />
          ) : (
            <LangButton logo={TRLogo} lang={"TR"} />
          )}{" "}
        </li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>
  );