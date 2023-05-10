import Title from "../ui/main/Title";
import LastUpdated from "../ui/main/LastUpdated";
import Infographics from "../features/infographics/Infographics";
import Leaderboard from "../features/leaderboard/Leaderboard";
import Button from "../ui/button/Button";

export default function Main() {
    return (
        <main className="pt-20">
            <div>
                <Title />
                <LastUpdated />
            </div>
            <div className="grid grid-cols-2">
                <Infographics />
                <Leaderboard />
            </div>
            <div>
                <Button title="Contribute" />
            </div>
        </main>
    );
}