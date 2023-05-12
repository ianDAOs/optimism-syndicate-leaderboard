import LeaderboardOption from "./LeaderboardOption";

export default function LeaderboardOptions() {
    return (
        <div className="flex mx-auto justify-start text-sky-500">
            <LeaderboardOption title="Total Amount" />
            <LeaderboardOption title="Contributions" />
            <LeaderboardOption title="Largest Contribution" />
            <LeaderboardOption title="Contributor Number" />
        </div>
    );
}