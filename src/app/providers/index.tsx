import { RouterProvider } from "react-router-dom";
import type { Router } from "@remix-run/router/dist/router";

type Props = {
  router: Router;
};

export const Providers = ({ router }: Props) => {
  return <RouterProvider router={router} />;
};
