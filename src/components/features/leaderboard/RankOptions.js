import RankOption from "./RankOption";

export default function RankOptions() {
    return (
        <div className="flex mx-auto justify-start text-sky-500">
            <RankOption title="Total Amount" />
            <RankOption title="Contributions" />
            <RankOption title="Largest Contribution" />
            <RankOption title="Contributor Number" />
        </div>
    );
}