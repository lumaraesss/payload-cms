import React from 'react'
import classNames from 'classnames';

interface RequestIdentificationTitleProps {
 maintitle?: string
 subtitle?: string
 className?: string
}
const RequestIdentificationTitle: React.FC<RequestIdentificationTitleProps> = ({ maintitle, subtitle }) => {

 const titleClasses = 'text-xl md:text-[2rem] leading-[1.5rem] md:leading-[3rem] font-bold text-[var(--color-primary-900)] px-4 md:px-0'

 return (
  <div className="hero-section flex flex-col gap-2 md:gap-[8px]">
   <h1 className={`text-center md:text-left ${titleClasses}`}>
    {maintitle}
   </h1>
   <h3 className='px-4 md:px-0 text-center md:text-left'>
    {subtitle}
   </h3>
  </div>
 )
}
export default RequestIdentificationTitle