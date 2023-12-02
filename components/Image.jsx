'use client';
import { default as NextImage } from 'next/image';
import { useMediaQuery } from 'react-responsive';

export default function Image(props) {
  const isMd = useMediaQuery({ query: '(min-width: 768px)' });

  const { sm, md, className, imageClassName, onClick, ...rest } = props;
  return (
    <div className={`overflow-hidden ${className}`} {...rest}>
      <NextImage
        {...(isMd && md ? md : sm)}
        className={imageClassName}
        onClick={onClick}
      />
    </div>
  );
}
