import Navbar from "./components/Navbar";
import Company from "./routes/Company";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouteProvider,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/company" element={<Company />}></Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
