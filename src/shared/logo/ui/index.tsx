import { FC } from "react";
import styles from "./logo.module.css";
import { useScrollTracker } from "@/shared/hooks";

export const Logo: FC = () => {
  const [scrollPosition] = useScrollTracker();
  return (
    <div className='flex flex-col text-center gap-0'>
      <p
        className={`${
          styles.title
        } text-4xl leading-none transition-all ease-in-out ${
          scrollPosition ? " text-neutral-800" : " text-white"
        }`}
      >
        Ekaterina Ivanitsa
      </p>
      <p
        className={`${styles.subTitle} leading-none text-lg ${
          scrollPosition ? " text-neutral-700" : " text-white"
        }`}
      >
        Manicure courses
      </p>
    </div>
  );
};
