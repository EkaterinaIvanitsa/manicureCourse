import { FC } from "react";
import { motion, useScroll } from "framer-motion";

interface ParallaxSectionProps {
  background: string;
  children: React.ReactNode;
  id?: string;
}
export const ParallaxSection: FC<ParallaxSectionProps> = ({
  background,
  children,
  id,
}) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        background: `url('${background}')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className='h-screen flex justify-center items-center text-white '
      initial={{ opacity: 0 }}
      custom={scrollYProgress}
      animate={{ backgroundPositionY: [-100, 0], opacity: 1 }}
      transition={{ duration: 0.7 }}
      id={id}
    >
      {children}
    </motion.div>
  );
};
