import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo, TextWithIcon } from "@/shared";
import { useScrollTracker } from "@/shared/hooks";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export const Header: FC = () => {
  const [scrollPosition] = useScrollTracker();
  const location = useLocation();
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.7 }}
      className={`fixed top-0 w-full transition-all z-50 rounded ${
        scrollPosition
          ? "bg-white/90 py-2 shadow-md"
          : "bg-transparent py-4 -translate-y-1 "
      }`}
    >
      <div className='container flex justify-between max-md:justify-center items-center'>
        <div className='flex justify-center'>
          {location.pathname === "/" ? (
            <a href='#hero'>
              <Logo />
            </a>
          ) : (
            <Link to='/'>
              <Logo />
            </Link>
          )}
        </div>
        <div className='flex flex-col gap-1 max-sm:hidden'>
          <span
            className={`${
              scrollPosition ? " text-neutral-800" : " text-white"
            }`}
          >
            <TextWithIcon text={["+37360942566"]}>
              <FiPhone />
            </TextWithIcon>
          </span>

          <span
            className={`hover:cursor-pointer ${
              scrollPosition ? " text-neutral-800" : " text-white"
            }`}
            onClick={() => {
              window.open("https://www.instagram.com/katrin.ivanitsa/");
            }}
          >
            <TextWithIcon text={["Instagram: katrin.ivanitsa"]}>
              <FaInstagram />
            </TextWithIcon>
          </span>
        </div>
      </div>
    </motion.header>
  );
};
