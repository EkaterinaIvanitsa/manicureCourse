import { FC } from "react";
import { motion } from "framer-motion";
import { Card } from "@/shared";

import { courseProgram } from "../constants";

export const CoursePrograms: FC = () => {
  return (
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
      className='flex flex-col py-16 bg-[#ffe5d9] justify-center items-center'
    >
      <h2 className='pb-16 text-center font-semibold text-3xl text-black/60'>
        Тарифы
      </h2>
      <div className='flex flex-row h-3/4 gap-6 max-md:h-auto max-md:items-center max-md:flex-col'>
        {courseProgram.map((program, index) => {
          return !index ? (
            <Card {...program} key={`${index}${program.id}`} />
          ) : (
            <Card
              {...program}
              key={`${program.title}${program.id}`}
              differences={courseProgram[index - 1].programs.length}
            />
          );
        })}
      </div>
      <h2 className='pt-8 text-left font-medium text-lg max-md:text-center'>
        *Доступна оплата через{" "}
        <a
          className='text-sky-500'
          href='https://www.agroprombank.com/'
          target='_blank'
        >
          рассрочку Агропромбанка
        </a>
      </h2>
    </motion.section>
  );
};
