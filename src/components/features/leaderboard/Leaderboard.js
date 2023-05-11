import LeaderboardOptions from "./LeaderboardOptions";
import LeaderboardTable from "./LeaderboardTable";
import LeaderboardNav from "./LeaderboardNav";

export default function Leaderboard() {
    return (
        <section className="px-4">
            <LeaderboardOptions />
            <LeaderboardTable />
            <LeaderboardNav />
        </section>
    );
}