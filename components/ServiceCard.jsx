import Image from './Image';

export default function ServiceCard({ sm, md, text, className }) {
  return (
    <div className={'md:relative w-fit ' + className}>
      <Image md={md} sm={sm} />
      <p className='text-sm text-[#C7589D] py-3 text-center bg-[#FFF6FC] font-medium md:absolute md:w-full md:bottom-3'>
        {text}
      </p>
    </div>
  );
}
