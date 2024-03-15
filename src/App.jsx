import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Container_Layout from "./Layout/Container_Layout";
import Home from "./components/Home";
import About from "./components/About";
import Context from "./components/Context";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Container_Layout />,
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "project",
          element: <Project />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  );
};

export default App;
