import { FC } from "react";
import { monthDeclensions } from "../utils/monthDeclensions";
import { StyledButton } from "@/shared/styledButton";

interface CardProps {
  id: number;
  imgUrl: string;
  title: string;
  programs: Array<string>;
  feedback: number;
  price: number;
  discount?: number;
  differences?: number;
}

export const Card: FC<CardProps> = ({
  id,
  imgUrl,
  title,
  programs,
  feedback,
  price,
  discount,
  differences,
}) => {
  return (
    <>
      <div className='flex flex-col transition-all ease-in-out max-md:w-[90%] overflow-hidden w-96 rounded-md bg-white hover:shadow-md hover:scale-105'>
        <img
          className='w-auto object-cover h-64'
          src={imgUrl}
          alt='Course Image'
        />
        <div className='flex flex-col justify-between h-full py-8 px-5 bg-[#ced4da]/25 text-font-rubik text-[#343a40]'>
          <div>
            <h2 className='blue-gradient_text font-semibold drop-shadow text-center text-2xl underline '>
              {title.toUpperCase()}
            </h2>
            <h5 className='text-center text-sm my-2'>
              Обратная связь{" "}
              <span className='font-medium drop-shadow'>
                {monthDeclensions(feedback)}
              </span>
            </h5>
            {programs.map((program: string, index: number) => {
              return (
                <li
                  key={id}
                  className={` text-base leading-tight my-5 list-disc space-y-2 ${
                    differences &&
                    index + 1 > differences &&
                    "font-medium drop-shadow"
                  }`}
                >
                  {program}
                </li>
              );
            })}
          </div>
          <div className='flex flex-col justify-center h-20 gap-4 max-md:mt-3'>
            <span className='flex flex-row justify-center items-center gap-2 text-lg font-semibold'>
              <h3 className='text-4xl blue-gradient_text font-medium drop-shadow'>
                {price}$
              </h3>
              <h5 className='text-right text-sm my-2'>
                При оплате в течении 3-х дней цена курса{" "}
                <span className='blue-gradient_text font-medium drop-shadow'>
                  {discount ? price - discount : price}$
                </span>
              </h5>
            </span>
            <StyledButton
              handleClick={() => {
                window.open(
                  "https://www.instagram.com/direct/t/104020037736455"
                );
              }}
              label='Приобрести курс'
            />
          </div>
        </div>
      </div>
    </>
  );
};
