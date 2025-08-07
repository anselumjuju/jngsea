import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-12'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Contact</h1>
      <div className='w-full pl-5 flex flex-col items-start gap-y-7'>
        <Image src={'/images/uniOfEdenberg.webp'} alt='logo' width={100} height={100} className='w-1/2' unoptimized />
        <div className='space-y-1 text-neutral-700'>
          <p>research@ue.ac.zm</p>
          <p>University of Edenberg,</p>
          <p>Ariyapatta Campus,</p>
          <p>Stand No 7, Enock Kavu Road,</p>
          <p>P. O. Box: 37209, Lusaka, Zambia</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
