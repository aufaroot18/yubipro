import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import categories from "../../utils/constants/categories";
import channels from "../../utils/constants/channels";
import Box from "../ui/Box";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Select from "../ui/Select";

export default function AddFormProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    address: "",
    postal: "",
    category: "Fashion",
    sales_channel: "Marketplace",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function createProduct(e) {
    e.preventDefault();
    const url = "https://6285e14df0e8f0bb7c0b0de3.mockapi.io/api/v1/store";
    const { data: product } = await axios.post(url, formData);
    navigate(`/products/${product.id}`, { replace: true });
  }

  return (
    <>
      <Heading as="h3" mb="1">
        Data Toko
      </Heading>
      <form onSubmit={createProduct}>
        <Box mb="1">
          <Label htmlFor="name">Nama</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Box>
        <Box mb="1">
          <Label htmlFor="url">Url Toko Online</Label>
          <Input
            type="text"
            name="url"
            id="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </Box>
        <Box mb="1">
          <Label htmlFor="address">Detail Alamat</Label>
          <Input
            as="textarea"
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Box>
        <Box mb="2">
          <Label htmlFor="postal">Kode POS</Label>
          <Input
            type="number"
            name="postal"
            id="postal"
            value={formData.postal}
            onChange={handleChange}
            required
          />
        </Box>
        <Heading as="h3" mb="1">
          Informasi Bisnis
        </Heading>
        <Box mb="1">
          <Label htmlFor="category">Kategori Bisnis</Label>
          <Select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </Select>
        </Box>
        <Box mb="1">
          <Label htmlFor="sales_channel">Saluran Penjualan Utama</Label>
          <Select
            name="sales_channel"
            id="sales_channel"
            value={formData.sales_channel}
            onChange={handleChange}
          >
            {channels.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </Select>
        </Box>
        <Button>Simpan</Button>
      </form>
    </>
  );
}
