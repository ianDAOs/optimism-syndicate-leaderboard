export default function Button({ title }) {
    return (
        <button className="rounded py-3 px-6 bg-red-500 hover:bg-red-700 text-sm text-white font-medium">
            {title}
        </button>
    );
}