import { PortableText } from '@portabletext/react';
const components = {
  block: {
    normal: ({ children }) => <p className='text-base text-neutral-600 leading-6'>{children}</p>,
    h1: ({ children }) => <h1 className='text-2xl font-bold my-4'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-xl font-semibold my-3'>{children}</h2>,
    blockquote: ({ children }) => <blockquote className='border-l-4 border-gray-300 pl-4 italic my-4'>{children}</blockquote>,
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#';
      return (
        <a href={href} target='_blank' rel='noopener noreferrer' className='text-[var(--royal-blue)] font-bold underline'>
          {children}
        </a>
      );
    },
  },

  list: {
    bullet: ({ children }) => <ul className='list-disc ml-6'>{children}</ul>,
    number: ({ children }) => <ol className='list-decimal ml-6'>{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => <li className='mb-1'>{children}</li>,
  },
};

const AbstractText = ({ abstract }) => {
  return <PortableText value={abstract} components={components} />;
};

export default AbstractText;
