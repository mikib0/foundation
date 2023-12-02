export default function Button({ children, className, outlined }) {
  return (
    <button
      className={`${className} ${
        outlined
          ? 'text-[#C7589D] border border-[#C7589D]'
          : 'bg-[#004AAD] text-white'
      } px-5 py-2 rounded-md`}>
      {children}
    </button>
  );
}
