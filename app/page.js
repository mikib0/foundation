'use client';
import {
  Header,
  Image,
  Button,
  SectionHeader,
  Paragraph,
  CauseCard,
} from '@/components';
import ServiceCard from '@/components/ServiceCard';
import { navigations, stats } from './constants';
import { useRef, useState } from 'react';
import { Scrollspy } from '@makotot/ghostui';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const whatWeDoRef = useRef();
  const servicesRef = useRef();
  const causesRef = useRef();
  const ourTeamRef = useRef();
  const testimonialsRef = useRef();

  return (
    <div className='px-5 pt-6 md:px-0'>
      <header className='md:pt-14'>
        <div className='hidden md:flex justify-between'>
          <span>LOGO</span>

          <nav>
            <ul className='disc-none flex gap-10'>
              <Scrollspy
                sectionRefs={[
                  whatWeDoRef,
                  servicesRef,
                  causesRef,
                  ourTeamRef,
                  testimonialsRef,
                ]}>
                {(currentElementIndexInViewport) =>
                  navigations.map((item, i) => (
                    <li
                      className={`transition-all mb-14 text-[#726F6F] hover:text-[#C7589D] ${
                        currentElementIndexInViewport == i
                          ? 'text-[#C7589D]'
                          : ''
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
          className='md:hidden mb-5'
          // imageClassName='pr-2'
          onClick={() => setShowMenu(true)}
        />
        <Header className='text-2xl md:text-5xl md:leading-[80px] px-4'>
          Building a brighter future for women & children
        </Header>
      </header>
      <div className='my-6 md:mb-14 md:mx-auto flex justify-center gap-3'>
        <Button>Donate now</Button>
        <Button outlined>Contact us</Button>
      </div>
      <div className='grid grid-cols-2 grid-rows-[minmax(0,_1fr)_auto] md:grid-cols-[minmax(0,_1fr)_auto] md:grid-rows-2 gap-1'>
        <Image
          src='/pic1.png'
          width={805}
          height={518}
          className='col-span-2 md:row-span-2 md:col-span-1'
          imageClassName='h-full'
        />
        <Image
          src='/pic2.png'
          width={427}
          height={256}
          className='rounded-md'
        />
        <Image
          src='/pic3.png'
          width={427}
          height={256}
          className='rounded-md'
        />
      </div>

      <section id='what-we-do' className='mt-8 md' ref={whatWeDoRef}>
        <SectionHeader>About us</SectionHeader>
        <Header className='text-xl'>Making a brighter future</Header>
        <div className='md:grid md:grid-cols-2 md:grid-rows-2 items-start'>
          <p className='leading-7 mt-2 md:mt-8 md:leading-10'>
            Lorem ipsum dolor sit amet consectetur. Placerat integer eget tempor
            elementum viverra malesuada ac. Auctor enim diam sit semper eget in.
            Lobortis aliquam nunc arcu phasellus urna vel duis adipiscing non.
            Lectus condimentum in risus a. Nisl magna elementum nibh commodo
            euismod pellentesque turpis nunc pellentesq
          </p>
          {/* TODO use query: mobile size is 237.19 x 277.31 */}
          <Image
            sm={{
              width: 553,
              height: 473,
              src: '/aboutus_pic.png',
            }}
            className='md:row-span-2 md:col-start-1 md:row-start-1 md:mr-24'
          />
          <Button className='mt-5 md:mt-0 justify-self-start'>
            Donate now
          </Button>
        </div>
      </section>

      <section className='mt-20 md:mt-16 flex flex-col md:flex-row md:justify-between gap-20 md:gap-36 bg-blue-200 py-14 md:pt-24 md:pb-16 md:px-52 -mx-5'>
        {stats.map(({ title, value }) => (
          <div className='text-center'>
            <h2 className='mb-5 text-white font-bold text-4xl'>{value}</h2>
            <small className='text-white font-bold text-base'>{title}</small>
          </div>
        ))}
      </section>

      <section id='services' className='mt-5' ref={servicesRef}>
        <SectionHeader>Services</SectionHeader>
        <Header className='text-xl mb-5'>
          Empowering women and nurturing children
        </Header>
        <div className='md:grid md:auto-rows-3 md:grid-cols-3'>
          {[
            {
              text: 'Education and empowerment',
              sm: {
                src: '/servicepic1.png',
                width: 400,
                height: 258,
              },
            },
            {
              text: 'Shelter and housing',
              className: 'md:row-span-2',
              sm: {
                src: '/servicepic2md.png',
                width: 400,
                height: 497,
              },
            },
            {
              text: 'Safe shelter and support',
              sm: {
                src: '/servicepic3md.png',
                width: 400,
                height: 258,
              },
            },
            {
              text: 'Women right',
              className: 'md:row-span-2',
              sm: {
                src: '/servicepic4md.png',
                width: 400,
                height: 497,
              },
            },
            {
              text: 'Nutrition and food security',
              className: 'md:row-start-3 md:col-start-2',
              sm: {
                src: '/servicepic5md.png',
                width: 400,
                height: 258,
              },
            },
            {
              text: 'Healthcare and maternal health',
              className: 'md:row-span-2 md:col-start-3',
              sm: {
                src: '/servicepic6md.png',
                width: 400,
                height: 497,
              },
            },
          ].map(({ text, sm, className }) => (
            <ServiceCard
              key={text}
              text={text}
              sm={sm}
              className={className + ' mb-2 md:mb-0'}
            />
          ))}
        </div>
      </section>

      <section id='causes' ref={causesRef}>
        <SectionHeader>Causes</SectionHeader>
        <Header className='text-xl leading-6 mb-3'>
          Donate to our ongoing causes
        </Header>
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-5'>
          <CauseCard />
          <CauseCard />
          <CauseCard />
        </div>
        <p className='text-right'>
          <button className='font-semibold text-xl text-[#004AAD] underline mt-6'>
            View more
          </button>
        </p>
      </section>

      <section id='our-team' className='mt-5' ref={ourTeamRef}>
        <SectionHeader>Our team</SectionHeader>
        <Header className='text-xl leading-8'>
          Meet the minds behind this
        </Header>

        <div className='mt-12 flex flex-wrap gap-8 md:gap-48 justify-between'>
          {[
            {
              pic: '/founder1.png',
              name: 'Uche Patrick',
              role: 'Founder',
            },
            {
              pic: '/founder1.png',
              name: 'Uche Patrick',
              role: 'Founder',
            },
            {
              pic: '/founder1.png',
              name: 'Uche Patrick',
              role: 'Founder',
            },
          ].map(({ pic, name, role }) => (
            <div className='text-center'>
              <Image
                sm={{
                  src: pic,
                  width: 159,
                  height: 159,
                }}
              />
              <h4 className='font-semibold leading-4 text-sm mb-2 mt-4'>
                {name}
              </h4>
              <span className='font-normal text-xs'>{role}</span>
            </div>
          ))}
        </div>
      </section>

      <section id='testimonials' className='mt-5' ref={testimonialsRef}>
        <SectionHeader>Testimonials</SectionHeader>
        <Header className='leading-8 text-xl font-semibold'>
          What people say
        </Header>
        <div>
          <div className='md:flex md:gap-11'>
            <div className='md:max-w-xl md:flex md:flex-col md:justify-center'>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur. Placerat integer eget
                tempor elementum viverra malesuada ac. Auctor enim diam sit
                semper eget in. Lobortis aliquam nunc arcu phasellus urna vel
                duis adipiscing non. Lectus condimentum in risus a. Nisl magna
                elementum nibh commodo euismod pellentesque turpis nunc
                pellentesque. Ultrices facilisis erat ae
              </Paragraph>
              <strong className='font-semibold text-xl leading-10 my-3'>
                Deborah Joseph
              </strong>
            </div>
            <Image
              sm={{
                src: '/testimonial.png',
                width: 256,
                height: 272,
              }}
              md={{
                src: '/testimonial_md.png',
                width: 626,
                height: 417,
              }}
            />
          </div>
        </div>
      </section>

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
    </div>
  );
}
