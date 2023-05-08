import Infographics from "../features/infographics/Infographics";
import Leaderboard from "../features/leaderboard/Leaderboard";
import Button from "../ui/button/Button";

export default function Main() {
    return (
        <main>
            <Infographics />
            <Button title="Contribute" />
            <Leaderboard />
        </main>
    );
}