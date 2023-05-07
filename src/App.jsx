import "./App.css";
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([{ path: "/", element: <Home /> },{path: "/pokemon/:id", element: <Pokemon/>}]);
  return <RouterProvider router={route} />;
}

export default App;
