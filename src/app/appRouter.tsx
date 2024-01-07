import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/main";
import { baseLayout } from "./layouts/baseLayout";
import { Signin } from "@/pages/signin";
import { Signup } from "@/pages/signup";
import { ProjectPage } from "@/pages/project";

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/',
        element: (
          <MainPage />
        )
      },
      {
        path: '/projects',
        element: (
          <ProjectPage />
        )
      },
      {
        path: '/signin',
        element: (
          <Signin />
        )
      },
      {
        path: '/signup',
        element: (
          <Signup />
        )
      },
    ],
  },
])