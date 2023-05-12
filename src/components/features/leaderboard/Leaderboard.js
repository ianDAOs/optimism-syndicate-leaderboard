import Subtitle from "@/components/ui/main/Subtitle";
import LeaderboardOptions from "./LeaderboardOptions";
import LeaderboardTable from "./LeaderboardTable";
import LeaderboardNav from "./LeaderboardNav";

export default function Leaderboard() {
    return (
        <section className="px-4 pt-16 lg:pt-0">
            <Subtitle title="Leaderboard" />
            <LeaderboardOptions />
            <LeaderboardTable />
            <LeaderboardNav />
        </section>
    );
}