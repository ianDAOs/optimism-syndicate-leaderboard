import Subtitle from "@/components/ui/main/Subtitle";
import RankOptions from "./RankOptions";
import Table from "./Table";
import TableNav from "./TableNav";

export default function Leaderboard() {
    return (
        <section className="px-4 pt-16 lg:pt-0">
            <Subtitle title="Leaderboard" />
            <RankOptions />
            <Table />
            <TableNav />
        </section>
    );
}