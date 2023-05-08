import Header from "@/components/containers/Header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <p>NavItem: Leaderboard</p>
      <p>NavItem: My Profile</p>
      <p>Integration: Connect Wallet</p>
      <p>Infographics</p>
      <p>Leaderboard</p>
      <p>Footer</p>
    </main>
  )
}