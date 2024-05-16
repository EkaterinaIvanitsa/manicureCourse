import { FC } from "react";
import { motion } from "framer-motion";
import teacher from "../assets/teacher.jpg";
export const Teacher: FC = () => {
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
        className='flex bg-[#F0EBE3] py-16'
      >
        <div className='flex flex-row max-md:flex-col max-md:items-center max-md:gap-3'>
          <div className='flex w-1/3 max-md:w-full'>
            <img src={teacher} alt='Ekaterina Ivanitsa' />
          </div>
          <div className='flex flex-col max-md:w-full w-2/3 items-start max-md:items-center justify-center gap-3 '>
            <h3 className='text-font-allura text-[#704264] text-7xl max-md:text-6xl px-14 pb-3 max-md:p-0'>
              Your Teacher
            </h3>
            <div className='flex flex-col justify-center bg-[#fff] w-full p-14 gap-3 max-md:h-auto'>
              <span className='text-xl font-semibold pink-gradient_text drop-shadow'>
                Екатерина Иваница
              </span>
              <p className='text-lg font-medium text-black/75'>
                Действующий мастер и инструктор с стабильным заработком от 800$
                в месяц.
              </p>
              <p className='text-lg font-medium text-black/75'>
                В бьюти индустрии более 7-ми лет
              </p>
              <div className='flex flex-row justify-evenly p-3 max-md:flex-col max-md:p-0'>
                <div>
                  <h3 className='font-semibold text-center max-md:text-left text-lg text-black/80'>
                    Точка А
                  </h3>
                  <ul className='my-5 font-medium list-disc ml-5 space-y-2 text-base text-black/75'>
                    <li>10 Клиентов в месяц</li>
                    <li>Заработок 20-30$</li>
                  </ul>
                </div>
                <div>
                  <h3 className='font-semibold text-center max-md:text-left text-lg text-black/80'>
                    Точка Б
                  </h3>
                  <ul className='my-5 font-medium list-disc ml-5 space-y-2 text-base text-black/75'>
                    <li>90 Клиентов в месяц</li>
                    <li>Заработок от 800$</li>
                    <li>Любимая работа</li>
                    <li>Время на семью</li>
                    <li>Своя студия</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
