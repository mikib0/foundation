'use client';
import { donationPrices } from '@/constants';
import { useState } from 'react';
import Button from './Button';
import { default as NextImage } from 'next/image';
import Image from './Image';

function Radio({ value, name, children, isDefault }) {
  return (
    <div>
      <input
        type='radio'
        name={name}
        className='peer hidden'
        id={value}
        defaultChecked={isDefault}
      />
      <label
        htmlFor={value}
        className='bg-lightGrayWithYellowishTint h-14 rounded flex items-center justify-center text-cblack peer-checked:bg-[#C7589D] peer-checked:text-white cursor-pointer transition-all duration-200'>
        {children}
      </label>
    </div>
  );
}

export default function DonationModal({ close }) {
  const [data, setData] = useState({
    amount: null,
    paymentMethod: null,
  });

  const [step, setStep] = useState(0);

  const trasitionStyles = {
    prev: 'hidden',
    curr: 'min-w-full translate-x-0',
    next: 'translate-x-full',
  };

  const getTransitionStyleForStep = (v) => {
    return (
      'transition duration-500 ' +
      (step == v
        ? trasitionStyles.curr
        : step > v
        ? trasitionStyles.prev
        : trasitionStyles.next)
    );
  };

  const nextStep = () => setStep((step) => ++step);
  const prevStep = () => setStep((step) => --step);

  console.log(getTransitionStyleForStep(0));

  return (
    <div className='fixed duration top-0 left-0 right-0 bottom-0 z-10 bg-white flex max-w-full pt-8 px-5'>
      <Image
        sm={{
          src: '/close.png',
          width: 14,
          height: 14,
        }}
        className='hover:cursor-pointer absolute top-10 right-5 z-20'
        onClick={close}
      />
      <div className={getTransitionStyleForStep(0)}>
        <div className='max-w-xl mx-auto'>
          <h1 className='text-center font-medium text-2xl mb-6'>Donate now</h1>
          <div className='flex flex-col gap-4'>
            {donationPrices.map((price, i) => (
              <Radio value={price} isDefault={i == 0} name='donation-price'>
                <span>{price}</span>
              </Radio>
            ))}
          </div>
          <div className='my-6'>
            <h2 className='text-cblack font-semibold text-xl'>Other amount</h2>
            <div className='bg-lightGrayWithYellowishTint flex gap-4 px-5 py-4'>
              <span className='text-cblack font-semibold text-base'>N</span>
              <input
                type='text'
                placeholder='Add any amount'
                className='placeholder:text-cblack placeholder:text-opacity-50 text-cblack text-opacity-50 outline-none bg-transparent'
              />
            </div>
          </div>
          <Button className='w-full' onClick={nextStep}>
            Select payment method
          </Button>
        </div>
      </div>

      <div className={getTransitionStyleForStep(1)}>
        <div className='max-w-xl mx-auto'>
          <NextImage
            src='/ep_back.png'
            width={24}
            height={24}
            className='cursor-pointer'
            onClick={prevStep}
          />
          <h1 className='font-medium text-2xl text-center mb-8 mt-20'>
            How will you like to pay?
          </h1>
          <div className='flex flex-col gap-4 mb-6'>
            {[
              {
                icon: '/ph_bank-fill.png',
                method: 'bank',
              },
              {
                icon: '/ph_bank-fill.png',
                method: 'USSD',
              },
              {
                icon: '/ph_bank-fill.png',
                method: 'card',
              },
            ].map((item) => (
              <Radio
                value={item.method}
                isDefault={item.method == 'USSD'}
                name='payment-method'>
                <div className='flex items-center gap-6 bg-transparent w-3/5 h-full'>
                  <NextImage src={item.icon} width={20} height={20} />
                  <span>Pay with {item.method}</span>
                </div>
              </Radio>
            ))}
          </div>
          <Button className='w-full' onClick={nextStep}>
            Select payment method
          </Button>
        </div>
      </div>

      <div className={getTransitionStyleForStep(2)}>
        <div className='flex flex-col items-center justify-center gap-6 mt-40'>
          <NextImage src='/payment-success.png' width={92} height={92} />
          <p className='text-center text-xl'>
            Your payment has been successfully received.
          </p>
        </div>
      </div>
    </div>
  );
}
