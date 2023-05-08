import Infographics from "../features/infographics/Infographics";
import Leaderboard from "../features/leaderboard/Leaderboard";
import Button from "../ui/button/Button";

export default function Main() {
    return (
        <main>
            <div className="pt-20 grid grid-cols-2">
                <Leaderboard />
                <Infographics />
            </div>
            <div>
                <Button title="Contribute" />
            </div>
        </main>
    );
}