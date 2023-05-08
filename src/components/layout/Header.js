import Navigation from "../ui/Navigation/Navigation";
import WalletButton from "../ui/WalletButton/WalletButton";

export default function Header() {
    return (
        <div>
            <p>Logo: Optimism</p>
            <p>Title: Co-grants Leaderboard</p>
            <Navigation />
            <WalletButton />
        </div>
    );
}