import { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { steps } from "../constants";

export const ProgramSteps: FC = () => {
  return (
    <section className='bg-[#efd3d7] py-16'>
      <h2 className='pb-16 text-center font-semibold text-3xl text-black/60'>
        Основные шаги обучения
      </h2>
      <div className='flex background_texture '>
        <VerticalTimeline>
          {steps.map((step, index) => {
            return (
              <VerticalTimelineElement
                key={`${step.id}${index}`}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <p className='text-gray-600 font-semibold'>{step.date}</p>
                  </div>
                }
                iconStyle={{ background: step.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: step.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-xl max-md:text-lg blue-gradient_text font-medium drop-shadow'>
                    {step.title}
                  </h3>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {step.points.map((point: string, index: number) => {
                    return (
                      <li
                        key={`experience-point-${index}`}
                        className='text-black/80 font-normal pl-1 text-base max-md:text-sm'
                      >
                        {point}
                      </li>
                    );
                  })}
                </ul>
                <hr />
                <div>
                  <h3 className='text-xl max-md:text-lg blue-gradient_text font-medium drop-shadow my-2'>
                    Вы будете уметь и понимать
                  </h3>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {step.benefits.map((point: string, index: number) => {
                    return (
                      <li
                        key={`experience-point-${index}`}
                        className='text-black/80 font-normal pl-1 text-sm'
                      >
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};
