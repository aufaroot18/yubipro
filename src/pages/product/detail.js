import CardDetail from "../../components/CardDetail";
import Header from "../../components/Header";

export default function DetailProduct() {
  const headerProps = {
    title: "Toko Berhasil Dibuat!",
    description: "Berikut adalah detail data toko anda",
  };

  return (
    <>
      <Header {...headerProps} />
      <CardDetail />
    </>
  );
}
