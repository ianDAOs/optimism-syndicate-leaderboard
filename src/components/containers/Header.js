import OptimismLogo from "../icons/OptimismLogo";
import Navigation from "../ui/navigation/Navigation";
import WalletButton from "../ui/walletbutton/WalletButton";

export default function Header() {
    return (
        <header className="fixed flex justify-between">
            <OptimismLogo />
            <Navigation />
            <WalletButton />
        </header>
    );
}