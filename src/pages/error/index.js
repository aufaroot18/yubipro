import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Error() {
  const headerProp = {
    title: "Halaman tidak ditemukan",
    description: <Link to="/">Return to Home</Link>,
  };

  return <Header {...headerProp} />;
}
