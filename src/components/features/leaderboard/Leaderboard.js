import Subtitle from "@/components/ui/main/Subtitle";
import RankOptions from "./RankOptions";
import Table from "./Table";
import TableNav from "./TableNav";

export default function Leaderboard() {
    return (
        <section className="px-4 border-solid border-2 border-gray-300 rounded-b-lg md:rounded-r-lg">
            <Subtitle title="Leaderboard" />
            <RankOptions />
            <Table />
            <TableNav />
        </section>
    );
}