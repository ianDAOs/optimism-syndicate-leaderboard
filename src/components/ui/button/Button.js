export default function Button({ title }) {
    return (
        <button className="rounded py-3 px-6 bg-[#ff0420] hover:bg-red-600 text-sm text-white font-medium">
            {title}
        </button>
    );
}