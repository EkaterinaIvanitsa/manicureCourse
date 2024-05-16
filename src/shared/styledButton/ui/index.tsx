import { FC, ReactNode } from "react";

interface StyledButtonProps {
  handleClick: () => void;
  label: string;
  children?: ReactNode;
  additionalButtonClasses?: string;
}

export const StyledButton: FC<StyledButtonProps> = ({
  handleClick,
  label,
  children,
  additionalButtonClasses,
}) => {
  return (
    <>
      <button
        className={`text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all ease-linear ${additionalButtonClasses}`}
        onClick={handleClick}
      >
        <div className='flex flex-row gap-1 justify-center items-center'>
          {children} {label}
        </div>
      </button>
    </>
  );
};
