import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Box from "../ui/Box";
import Paragprah from "../ui/Paragraph";
import Image from "../ui/Image";
import storePhoto from "../../assets/img/store-photo.png";
import Heading from "../ui/Heading";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Select from "../ui/Select";
import channels from "../../utils/constants/channels";
import categories from "../../utils/constants/categories";
import StyledCardDetail from "./Index.styled";
import Error from "../../pages/error";
import Header from "../Header";

export default function CardDetail() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    address: "",
    postal: "",
    category: "",
    sales_channel: "",
  });
  const headerProps = {
    title: "Toko Berhasil Dibuat!",
    description: "Berikut adalah detail data toko anda",
  };

  useEffect(() => {
    getDetailProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getDetailProduct() {
    const url = `https://6285e14df0e8f0bb7c0b0de3.mockapi.io/api/v1/store/${id}`;

    try {
      const { data } = await axios(url);
      setProduct(data);
      setFormData({
        name: data.name,
        url: data.url,
        address: data.address,
        postal: data.postal,
        category: data.category,
        sales_channel: data.sales_channel,
      });
    } catch (error) {
      setError(true);
    }
  }

  function toggleModal() {
    setModal((prevState) => !prevState);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function updateProduct(e) {
    e.preventDefault();
    const url = `https://6285e14df0e8f0bb7c0b0de3.mockapi.io/api/v1/store/${product.id}`;
    await axios.put(url, formData);
    setProduct({
      ...formData,
      id: product.id,
    });

    toggleModal();
  }

  if (error) return <Error />;

  return (
    product && (
      <>
        <Header {...headerProps} />
        <StyledCardDetail>
          <Box className="card__header" mb="1">
            <Box mr="1">
              <Image src={storePhoto} alt={product.name} />
            </Box>
            <Box>
              <Heading as="h3">{product.name}</Heading>
              <a href={product.url}>{product.url}</a>
            </Box>
          </Box>
          <Box p="1">
            <Box mb="1">
              <Paragprah size="0.7" mb="0.5">
                Detail Alamat
              </Paragprah>
              <Paragprah color="black">{product.address}</Paragprah>
            </Box>
            <Box mb="1">
              <Paragprah size="0.7" mb="0.5">
                Kode POS
              </Paragprah>
              <Paragprah color="black">{product.postal}</Paragprah>
            </Box>
            <Box mb="1">
              <Paragprah size="0.7" mb="0.5">
                Kategori Bisnis
              </Paragprah>
              <Paragprah color="black">{product.category}</Paragprah>
            </Box>
            <Box mb="1">
              <Paragprah size="0.7" mb="0.5">
                Saluran Penjualan
              </Paragprah>
              <Paragprah color="black">{product.sales_channel}</Paragprah>
            </Box>
          </Box>
        </StyledCardDetail>
        <Button onClick={toggleModal} type="outline">
          Ubah
        </Button>
        <Modal isOpen={modal} onRequestClose={toggleModal}>
          <Heading as="h2" mb="1" align="center">
            Ubah Data Toko
          </Heading>
          <Heading as="h3" mb="1">
            Data Toko
          </Heading>
          <form onSubmit={updateProduct}>
            <Box mb="1">
              <Label htmlFor="name">Nama Toko</Label>
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
              <Label htmlFor="postal">Kode Pos</Label>
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
              Informastion Bisnis
            </Heading>
            <Box mb="1">
              <Label htmlFor="category">category Bisnis</Label>
              <Select
                name="category"
                id="category"
                onChange={handleChange}
                value={formData.category}
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
              <Label htmlFor="sales_channel">Channel Penjualan</Label>
              <Select
                name="sales_channel"
                id="sales_channel"
                onChange={handleChange}
                value={formData.sales_channel}
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
        </Modal>
      </>
    )
  );
}
