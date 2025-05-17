import Image from 'next/image';

const AimsScopePage = () => {
  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Aims & Scope</h1>

      <p className='text-neutral-600 text-base'>
        The <span className='font-semibold text-black'>Journal of Next-Gen Science and Technology Applications (JNGSTA)</span> is a peer-reviewed, interdisciplinary journal that
        serves as a platform for the dissemination of original and innovative research in the fields of Computer Science, Communication Engineering, and their real-world
        applications.
      </p>
      <p className='text-neutral-600 text-base'>
        The journal encourages contributions that demonstrate the integration of theory, practice, and innovation to address contemporary challenges across academic, industrial,
        and societal domains.
      </p>

      <h5 className='py-2 text-lg font-bold text-neutral-700'>Areas of Interest include (but are not limited to):</h5>

      <div className='space-y-4 text-neutral-600 text-base'>
        <div>
          <p className='font-semibold text-black'>Computer Engineering & Applications</p>
          <ul className='list-disc list-inside pl-5'>
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Data Mining and Big Data Analytics</li>
            <li>Cloud and Edge Computing</li>
            <li>Internet of Things (IoT)</li>
            <li>Embedded Systems and Hardware Architectures</li>
            <li>Software Engineering and Programming Paradigms</li>
          </ul>
        </div>

        <div>
          <p className='font-semibold text-black'>Communication Engineering & Technologies</p>
          <ul className='list-disc list-inside pl-5'>
            <li>Mobile and Wireless Communications</li>
            <li>5G/6G and Next-Generation Network Infrastructure</li>
            <li>Optical and Satellite Communication</li>
            <li>Coding and Information Theory</li>
            <li>Signal Processing and Transmission Systems</li>
          </ul>
        </div>

        <div>
          <p className='font-semibold text-black'>Multimedia and Intelligent Systems</p>
          <ul className='list-disc list-inside pl-5'>
            <li>Image and Video Processing</li>
            <li>Computer Vision and Pattern Recognition</li>
            <li>Multimedia Retrieval and Management</li>
            <li>Natural Language Processing and Speech Technologies</li>
            <li>Human-Computer Interaction</li>
          </ul>
        </div>

        <div>
          <p className='font-semibold text-black'>Cybersecurity and Information Systems</p>
          <ul className='list-disc list-inside pl-5'>
            <li>Network Security and Cryptography</li>
            <li>Blockchain and Secure Computing</li>
            <li>Information Retrieval and Digital Forensics</li>
          </ul>
        </div>

        <div>
          <p className='font-semibold text-black'>Interdisciplinary Applications</p>
          <ul className='list-disc list-inside pl-5'>
            <li>Smart Cities and Urban Computing</li>
            <li>Health Informatics and Biomedical Applications</li>
            <li>Automation and Robotics</li>
            <li>Engineering Solutions for Business and Industry</li>
            <li>Educational Technologies and E-learning Platforms</li>
          </ul>
        </div>
      </div>

      <p className='text-neutral-600 text-base'>
        JNGSTA welcomes both theoretical advancements and practical innovations, particularly those that bridge the gap between research and industry.
      </p>
      <p className='text-neutral-600 text-base'>
        The journal aims to foster a collaborative academic environment by publishing high-quality, impactful research that advances the frontier of next-generation science and
        engineering.
      </p>
    </div>
  );
};

export default AimsScopePage;
