import OptimismLogo from "../icons/OptimismLogo";
import Navigation from "../ui/navigation/Navigation";
import WalletButton from "../ui/walletbutton/WalletButton";

export default function Header() {
    return (
        <header className="flex justify-between">
            <div className="flex items-center">
                <OptimismLogo />
                <Navigation />
            </div>
            <div>
                <WalletButton />
            </div>
        </header>
    );
}