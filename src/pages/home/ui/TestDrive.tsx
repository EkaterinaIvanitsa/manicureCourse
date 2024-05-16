import { motion } from "framer-motion";
import { FC } from "react";

export const TestDrive: FC = () => {
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
        className='flex flex-col bg-[#A87676] p-16 max-sm:p-8 items-left overflow-hidden gap-16'
      >
        <h2 className='text-left font-semibold text-2xl text-[#FFF5E0] max-sm:text-center '>
          Страшно потратить деньги впустую?
        </h2>
        <p className='w-[50%] text-[#FFF5E0] text-lg max-sm:w-full'>
          Я знаю, какой это ответственный шаг освоить новую профессию! И именно
          поэтому я придумала для тебя тест-драйв, чтобы ты поняла - твое это
          или нет? Приди и попробуй новую профессию совершенно бесплатно. После
          нашей встречи, тебе будет намного легче определиться, что делать
          дальше. Пиши в{" "}
          <span
            className='text-[#C70039] hover:cursor-pointer '
            onClick={() => {
              window.open("https://www.instagram.com/katrin.ivanitsa/");
            }}
          >
            direct «Тест-драйв»
          </span>{" "}
          и я подберу для тебя удобное время!
        </p>
      </motion.section>
    </>
  );
};
