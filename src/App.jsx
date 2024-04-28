import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route  index element={<Home/>} />
      <Route path="/about"element={<About/>}/>
      <Route path="/ourteam"element={<OurTeam/>}/>
    </Route>
  )
);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
