import CardDetail from "../../components/CardDetail";
import Header from "../../components/Header";
import Section from "../../components/ui/Section";

export default function DetailProduct() {
  const headerProps = {
    title: "Toko Berhasil Dibuat!",
    description: "Berikut adalah detail data toko anda",
  };

  return (
    <Section>
      <Header {...headerProps} />
      <CardDetail />
    </Section>
  );
}
