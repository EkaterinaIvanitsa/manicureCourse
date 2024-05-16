import { FC } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { ImageSlider } from "@/shared/imageSlider";
import { imagesStudentsWorks } from "../constants";
import { StyledButton } from "@/shared";
export const StudentsWorks: FC = () => {
  return (
    <>
      <motion.section
        initial={{
          opacity: 0.3,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className='flex flex-col h-screen bg-[#f4c3c2] py-16 items-center overflow-hidden'
      >
        <h2 className='pb-16 text-center font-semibold text-3xl text-black/60'>
          Работы студентов
        </h2>
        <div className='h-full w-1/2 max-md:w-[90%] overflow-hidden rounded shadow-lg hover:shadow-xl hover:scale-105 transition-all ease-linear'>
          <ImageSlider images={imagesStudentsWorks} />
        </div>
        <div className='py-16'>
          <StyledButton
            handleClick={() => {
              window.open("https://www.instagram.com/katrin.ivanitsa/");
            }}
            label='Отзывы студентов о курсе'
            additionalButtonClasses='from-red-400 to-blue-600 text-sm'
          >
            <FaInstagram />
          </StyledButton>
        </div>
      </motion.section>
    </>
  );
};
