import Button from './Button';
import Image from './Image';

export default function CauseCard() {
  return (
    <div className='rounded-md border border-[#C7589D] pb-7'>
      <div className='relative'>
        <Image
          sm={{
            src: '/causepic.png',
            width: 350,
            height: 185,
          }}
          imageClassName='w-full'
        />
        <p className='bg-white absolute bottom-0 right-0 rounded-tl-2xl font-medium text-sm px-6 py-3'>
          Education
        </p>
      </div>
      <div className='p-3'>
        <h3 className='text-[#222222] text-base font-medium mb-2'>
          Donate to poor children to return to school
        </h3>
        <p className='text-sm text-[#424141]'>
          Help them go back to school and gain brighter future
        </p>
        <progress
          value='32'
          max='100'
          className='rounded-md w-full h-2 mt-4 mb-6 overflow-hidden progress-bar'
        />
        <div className='flex justify-center gap-0 -mx-5'>
          <div className='pr-4'>
            <h4 className='text-[#424141] font-medium text-xs mb-3'>Goals</h4>
            <span className='text-[#222222] font-semibold font-sm'>
              N 1,000,000
            </span>
          </div>
          <div className='px-4 text-center border-x-2 border-[#C7589DA1]'>
            <h4 className='text-[#424141] font-medium text-xs mb-3'>Raised</h4>
            <span className='text-[#222222] font-semibold font-sm'>
              N 400,000
            </span>
          </div>
          <div className='pl-4'>
            <h4 className='text-[#424141] font-medium text-xs mb-3'>
              Remaining
            </h4>
            <span className='text-[#222222] font-normal font-sm'>
              N 600,000
            </span>
          </div>
        </div>
        <Button className='mt-6 w-full'>Donate now</Button>
      </div>
    </div>
  );
}
