import { FC, useState } from "react";
import { ParallaxSection } from "@/shared";
import heroBackground from "../assets/heroBackground.jpg";
import heroBackgroundMobile from "../assets/heroBackgroundMobile.jpg";

export const HeroSection: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <ParallaxSection
      background={width > 768 ? heroBackground : heroBackgroundMobile}
      id='hero'
    >
      <div className='bg-black/10 h-full w-full flex items-center '>
        <div className='flex flex-row justify-between container'>
          <div className='flex flex-col gap-3 max-sm:gap-6'>
            <h3 className='text-lg text-left max-sm:text-center'>
              Идеальное покрытие без опила
            </h3>
            <h1 className='text-5xl font-medium text-left  max-sm:text-center max-sm:leading-snug'>
              COMBI MANIKURE
            </h1>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};
