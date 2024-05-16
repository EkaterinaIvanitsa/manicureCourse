import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { Courses } from "@/pages/courses";
import { About } from "@/pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "courses",
    element: <Courses />,
  },
  {
    path: "about",
    element: <About />,
  },
]);
