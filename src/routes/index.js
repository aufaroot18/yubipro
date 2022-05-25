import { Route, Routes } from "react-router-dom";
import Error from "../pages/error";
import AddProduct from "../pages/product/add";
import DetailProduct from "../pages/product/detail";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<AddProduct />} />
      <Route path="/products/create" element={<AddProduct />} />
      <Route path="/products/:id" element={<DetailProduct />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
