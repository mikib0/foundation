'use client';

import { CauseCard } from '@/components';

export default function Causes() {
  return (
    <>
      <div className='h-[330px] bg-[url("/donate_sign.png")] bg-no-repeat bg-center bg-cover mb-28'></div>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5'>
        {new Array(13).fill(null).map(() => (
          <CauseCard />
        ))}
      </div>
    </>
  );
}
