import { FC } from "react";
import { Header } from "@/widgets";
import { HeroSection } from "./HeroSection";
import { ProgramSteps } from "./ProgramSteps";
import { CoursePrograms } from "./CoursePrograms";
import { StudentsWorks } from "./StudentsWorks";
import { Teacher } from "./Teacher";
import { TestDrive } from "./TestDrive";
import { Footer } from "@/widgets/footer";

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Teacher />
      <ProgramSteps />
      <StudentsWorks />
      <CoursePrograms />
      <TestDrive />
      <Footer />
    </>
  );
};
