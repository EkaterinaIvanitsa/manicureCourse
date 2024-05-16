import { AnimatePresence, motion, wrap } from "framer-motion";
import { FC, useState } from "react";
import { swipeConfidenceThreshold, swipePower, variants } from "../utils";
import styles from "./styles.module.css";
interface ImageSliderProps {
  images: Array<string>;
}

export const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const { next, prev } = styles;
  return (
    <>
      <div className='h-full w-full relative flex justify-center items-center'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className='absolute top-0 left-0 w-full h-full object-contain'
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className={next} onClick={() => paginate(1)}>
          {"‣"}
        </div>
        <div className={prev} onClick={() => paginate(-1)}>
          {"‣"}
        </div>
      </div>
    </>
  );
};
