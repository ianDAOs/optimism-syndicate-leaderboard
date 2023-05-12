import TableColumn from "./TableColumn";

export default function Table() {
    return (
        <div className="flex mx-auto pt-6 gap-6 text-sm">
            <TableColumn title="Rank" />
            <TableColumn title="Wallet/ENS" />
            <TableColumn title="Total Amount" />
            <TableColumn title="Contributions" />
            <TableColumn title="Largest" />
            <TableColumn title="Contributor No." />
        </div>
    );
}