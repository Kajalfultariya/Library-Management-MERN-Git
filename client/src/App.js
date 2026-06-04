import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from './LandingComponent/LandingPage';
import StudentLibraryManagement from './studentComponent/Main';
import Login from './LandingComponent/Login';
import CreateStudent from './LandingComponent/CreateStudent';


const route = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <CreateStudent />,
  },
  {
    path: "/home",
    element: <StudentLibraryManagement />,
  },

])

const App = () => {
  return (
    <RouterProvider router={route}>
    </RouterProvider>
  );
}

export default App;
