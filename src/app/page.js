import Header from "@/components/containers/Header";
import Main from "@/components/containers/Main";
import Footer from "@/components/containers/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}