export default function NavItem({ title }) {
    return (
        <button className="hover:underline px-4 text-sm text-gray-500">
            {title}
        </button>
    );
}