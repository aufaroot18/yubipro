import { Route, Routes } from "react-router-dom";
import AddProduct from "../pages/product/add";
import DetailProduct from "../pages/product/detail";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<AddProduct />} />
      <Route path="/products/create" element={<AddProduct />} />
      <Route path="/products/:id" element={<DetailProduct />} />
    </Routes>
  );
}
