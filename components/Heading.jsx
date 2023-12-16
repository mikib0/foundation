export default function Heading(props) {
  return (
    <h1
      className={`${props.className} leading-8 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#004AAD] via-[#6651A5] to-[#C7589D]`}>
      {props.children}
    </h1>
  );
}
