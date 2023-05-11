import Title from "../ui/main/Title";
import LastUpdated from "../ui/main/LastUpdated";
import Infographics from "../features/infographics/Infographics";
import Leaderboard from "../features/leaderboard/Leaderboard";
import Button from "../ui/button/Button";

export default function Main() {
    return (
        <main className="container mx-auto pt-20 px-4 break-all">
            <div className="flex grid grid-rows-2 justify-center text-center">
                <Title />
                <LastUpdated />
            </div>
            <div className="grid grid-cols-2 pt-8">
                <Infographics />
                <Leaderboard />
            </div>
            <div>
                <Button title="Contribute" />
            </div>
        </main>
    );
}