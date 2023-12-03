import './globals.css';
import { Montserrat } from 'next/font/google';
import { Button, Header, Image } from '@/components';
import { footerNavs } from './constants';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Foundation',
  description: 'Foundation website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} `}>
        <main className='md:w-full md:max-w-7xl md:mx-auto md:px-12'>
          {children}
        </main>
        <footer className='bg-[#004AAD] text-white pb-16 pr-3 mt-16'>
          <div className='flex flex-col flex-wrap md:flex-row gap-9 md:gap-32 pl-7 md:pl-0 pt-5 md:w-full md:max-w-7xl md:mx-auto'>
            <div>
              <p className='mb-8'>LOGO</p>
              <div className='flex flex-col gap-4'>
                {[
                  {
                    pic: '/location.png',
                    text: '11 pipeline road, Abuja',
                  },
                  {
                    pic: '/phone.png',
                    text: '08179083010',
                  },
                  {
                    pic: '/email.png',
                    text: 'info@aamtn.org',
                  },
                ].map(({ pic, text }) => (
                  <p className='flex items-center gap-3'>
                    <Image
                      sm={{
                        src: pic,
                        width: 21,
                        height: 21,
                      }}
                    />
                    <p className='text-base leading-5'>{text}</p>
                  </p>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              {footerNavs.map((item) => (
                <Link
                  href={'#' + item.replace(' ', '-')}
                  className='text-white font-medium'>
                  {item}
                </Link>
              ))}
            </div>
            <div>
              <h2 className='font-semibold text-xl leading-6'>
                Subscribe to news letter
              </h2>
              <p className='mt-4 mb-5'>
                Subscribe to our news letter to stay in touch with us
              </p>
              <div className='flex items-center justify-between py-1 px-2 bg-white rounded-md gap-2'>
                <input
                  type='text'
                  placeholder='Enter mail here'
                  className='w-full outline-none text-black'
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
