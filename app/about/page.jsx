const AboutPage = () => {
  return (
    <div className='flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>About the Journal</h1>

      <div className='space-y-5 text-neutral-600 text-base'>
        <p>
          The <span className='font-semibold text-black'>Journal of Next-Gen Science and Technology Applications (JNGSTA)</span> is a peer-reviewed, open access publication that
          fosters the dissemination of original research in emerging scientific and engineering domains. We aim to bridge the gap between academic innovation and industry
          application by providing a dynamic platform for cutting-edge ideas and technologies.
        </p>

        <p>
          Established with a mission to support young scholars, researchers, and practitioners, JNGSTA encourages submissions from diverse disciplines such as Artificial
          Intelligence, Machine Learning, Data Science, Renewable Energy Systems, IoT, Robotics, and Advanced Computing.
        </p>

        <p>
          Our editorial team comprises experienced academics and industry experts who ensure the journal upholds the highest standards of review and publication ethics, following
          the guidelines set by COPE (Committee on Publication Ethics).
        </p>

        <p>
          We believe in accessibility, transparency, and global collaboration. All accepted articles are published under an open access license, allowing unrestricted use,
          distribution, and reproduction in any medium, provided the original work is properly cited.
        </p>

        <p>
          At JNGSTA, we are dedicated to nurturing future-forward research that can drive progress and innovation in science and engineering. Join us in shaping the next generation
          of knowledge.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
