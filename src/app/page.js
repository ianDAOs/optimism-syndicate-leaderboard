import Header from "@/components/containers/Header";
import Footer from "@/components/containers/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <p>Infographics</p>
      <p>Leaderboard</p>
      <Footer />
    </div>
  )
}