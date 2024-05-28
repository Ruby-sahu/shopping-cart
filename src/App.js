import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";

export default function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Products />}>

        </Route>
        <Route path="/cart" element={<Cart />}>

        </Route>
      </Routes>
    </>
  )
}