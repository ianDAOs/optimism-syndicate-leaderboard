import OptimismLogo from "../icons/OptimismLogo";
import Title from "../ui/header/Title";
import Navigation from "../ui/navigation/Navigation";
import WalletButton from "../ui/walletbutton/WalletButton";

export default function Header() {
    return (
        <header>
            <OptimismLogo />
            <Title />
            <Navigation />
            <WalletButton />
        </header>
    );
}