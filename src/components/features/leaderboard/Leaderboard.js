import Subtitle from "@/components/ui/main/Subtitle";
import RankOptions from "./RankOptions";
import LeaderboardTable from "./LeaderboardTable";
import LeaderboardNav from "./LeaderboardNav";

export default function Leaderboard() {
    return (
        <section className="px-4 pt-16 lg:pt-0">
            <Subtitle title="Leaderboard" />
            <RankOptions />
            <LeaderboardTable />
            <LeaderboardNav />
        </section>
    );
}