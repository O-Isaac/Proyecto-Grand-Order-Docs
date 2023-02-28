export default function Button({ children }) {
  return (
    <button className="bg-blue-300 rounded-lg px-2 py-1 text-white transition-all hover:bg-blue-500 active:scale-95">
      {children}
    </button>
  );
}
