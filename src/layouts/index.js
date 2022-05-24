import Container from "../components/ui/Container";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
