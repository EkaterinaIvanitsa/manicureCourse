import { Logo, TextWithIcon } from "@/shared";
import { FC } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <footer>
      <div className='flex flex-col w-full bg-white/90 p-10 max-sm:pt-8 max-sm:px-8'>
        <div className='container flex flex-col justify-center max-md:justify-center items-center gap-4'>
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
          <div className='flex flex-col gap-1 max-sm:hidden items-center'>
            <span className='text-neutral-800'>
              <TextWithIcon text={["+37360942566"]}>
                <FiPhone color='red' />
              </TextWithIcon>
            </span>

            <span
              className='hover:cursor-pointer text-neutral-800'
              onClick={() => {
                window.open("https://www.instagram.com/katrin.ivanitsa/");
              }}
            >
              <TextWithIcon text={["katrin.ivanitsa"]}>
                <FaInstagram color='red' />
              </TextWithIcon>
            </span>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center h-8 max-sm:pt-8 border'>
        <span className='text-lg'>&copy; Ekaterina Ivanitsa. 2024</span>
      </div>
    </footer>
  );
};
