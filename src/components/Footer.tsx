import Image from 'next/image';
import React from 'react'

function Footer() {
  return ( 
    <div className="bg-walterWhite flex flex-col p-5 justify-center items-center">
      <Image src="/logo.png" width={133} height={23} alt='Full Stack week'/>
      <p className="text-sm font-medium mt-1 text-primaryDarker">Todos os direitos reservados.</p>
    </div>
   );
}

export default Footer;