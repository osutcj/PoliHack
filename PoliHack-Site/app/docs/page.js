import Footer from "@/components/Footer";
import CurrentEditionSection from "@/features/current-edition/CurrentEditionSection";

export const metadata = {
  title: "Docs | PoliHack",
};

export default function Page() {
  return (
    <>
      <div className="py-4">
        <CurrentEditionSection documentsHeading="Docs" />
      </div>
      <Footer />
    </>
  );
}
