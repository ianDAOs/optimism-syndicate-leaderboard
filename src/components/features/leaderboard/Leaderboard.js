import Subtitle from "@/components/ui/main/Subtitle";
import RankOptions from "./RankOptions";
import Table from "./Table";
import TableNav from "./TableNav";

export default function Leaderboard() {
    return (
        <section className="py-4 px-5 border-gray-300">
            <Subtitle title="Leaderboard" />
            <RankOptions />
            <Table />
            <TableNav />
        </section>
    );
}