'use client';
import { navigations } from '@/constants';
import { Scrollspy } from '@makotot/ghostui';
import { useRef, useState } from 'react';
import Heading from './Heading';
import Image from './Image';

export default function Header({ className }) {
  const [showMenu, setShowMenu] = useState(false);

  const whatWeDoRef = useRef();
  const servicesRef = useRef();
  const causesRef = useRef();
  const ourTeamRef = useRef();
  const testimonialsRef = useRef();

  return (
    <header className={`md:pt-14 ${className}`}>
      <div className='hidden md:flex justify-between'>
        <span>LOGO</span>

        <nav>
          <ul className='disc-none flex gap-10'>
            <Scrollspy
              sectionRefs={
                [
                  // whatWeDoRef,
                  // servicesRef,
                  // causesRef,
                  // ourTeamRef,
                  // testimonialsRef,
                ]
              }>
              {(currentElementIndexInViewport) =>
                navigations.map((item, i) => (
                  <li
                    className={`transition-all mb-14 text-[#726F6F] hover:text-[#C7589D] ${
                      currentElementIndexInViewport == i ? 'text-[#C7589D]' : ''
                    }`}>
                    <a href={'#' + item.replace(/\s/g, '-').toLowerCase()}>
                      {item}
                    </a>
                  </li>
                ))
              }
            </Scrollspy>
          </ul>
        </nav>
      </div>

      <Image
        sm={{
          src: '/hamburger.png',
          width: 18,
          height: 12,
        }}
        className='md:hidden mb-5 hover:cursor-pointer'
        // imageClassName='pr-2'
        onClick={() => setShowMenu(true)}
      />
      <Heading className='text-2xl md:text-5xl md:leading-[80px] px-4'>
        Building a brighter future for women & children
      </Heading>

      {showMenu ? (
        <nav className='fixed top-0 left-0 right-0 bottom-0 bg-white pt-7 px-7'>
          <div className='flex justify-between mb-12'>
            <p>LOGO</p>
            <Image
              sm={{
                src: '/close.png',
                width: 14,
                height: 14,
              }}
              className='hover:cursor-pointer'
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className='text-center'>
            {navigations.map((item) => (
              <li className='transition-all mb-14 text-[#726F6F]'>{item}</li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
