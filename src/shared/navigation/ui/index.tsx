import { FC } from "react";
import { navigationLinks } from "../constants";
import { Link } from "react-router-dom";
import { useScrollTracker } from "@/shared/hooks";
export const Navigation: FC = () => {
  const [scrollPosition] = useScrollTracker();
  return (
    <nav>
      <ul className='flex flex-row gap-8 my-5 justify-end'>
        {navigationLinks.map((nav) => {
          return (
            <li
              key={nav.path}
              className={`font-medium transition-all bg-transparent ${
                scrollPosition
                  ? " hover:text-black text-black/75"
                  : "hover:text-black/75  text-white"
              }`}
            >
              <Link to={nav.path}>{nav.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
