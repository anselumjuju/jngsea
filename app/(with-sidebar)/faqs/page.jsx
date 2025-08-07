const FAQPage = () => {
  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>FAQs</h1>

      <ol className='pl-4 space-y-6 text-base text-neutral-700 list-decimal'>
        <li>
          <h5 className='font-semibold text-lg'>What is the scope of the Journal of Next-Gen Science and Technology Applications (JNGSTA)?</h5>
          <p className='pl-5'>
            JNGSTA publishes high-quality, peer-reviewed research across interdisciplinary areas in science and engineering with a focus on innovation, emerging technologies, and
            practical applications.
          </p>
        </li>

        <li>
          <h5 className='font-semibold text-lg'>How can I submit a manuscript to JNGSTA?</h5>
          <p className='pl-5'>
            Manuscripts can be submitted through our online submission portal. Please ensure your manuscript adheres to the <span className='font-bold'>Author Guidelines</span>{' '}
            before submitting.
          </p>
        </li>

        <li>
          <h5 className='font-semibold text-lg'>Is there a submission fee?</h5>
          <p className='pl-5'>No, there is no submitting and processing fee.</p>
        </li>

        <li>
          <h5 className='font-semibold text-lg'>How long does the peer-review process take?</h5>
          <p className='pl-5'>On average, the peer-review process takes 4-m9i6 weeks. We strive to provide timely and constructive feedback to authors.</p>
        </li>

        <li>
          <h5 className='font-semibold text-lg'>Can I suggest reviewers for my manuscript?</h5>
          <p className='pl-5'>Yes, authors may suggest potential reviewers during the submission process. However, the final decision rests with the editorial board.</p>
        </li>

        <li>
          <h5 className='font-semibold text-lg'>Is open access available?</h5>
          <p className='pl-5'>Yes, JNGSTA is an open-access journal. All published articles are freely accessible to readers worldwide.</p>
        </li>

        <li>
          <h5 className='font-semibold text-lg'>What if I discover an error after publication?</h5>
          <p className='pl-5'>
            Contact the editorial office immediately. If the error affects the scientific integrity of the work, we will publish a correction or retraction as needed.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default FAQPage;
