import { FC, ReactNode } from "react";

interface IconTextProps {
  children: ReactNode;
  text: Array<string>;
  classesForText?: string;
}
export const TextWithIcon: FC<IconTextProps> = ({
  children,
  text,
  classesForText,
}) => {
  return (
    <div className={`flex flex-row w-full gap-1 justify-start items-center`}>
      <span>{children}</span>
      <span className={`leading-none text-right ${classesForText}`}>
        {text.map((text) => {
          return (
            <span key={text}>
              {text}
              <br />
            </span>
          );
        })}
      </span>
    </div>
  );
};
