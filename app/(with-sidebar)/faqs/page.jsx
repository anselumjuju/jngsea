const FAQPage = () => {
  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>FAQs</h1>

      <div className='space-y-6 text-base text-neutral-700'>
        <div>
          <h5 className='font-semibold text-lg'>What is the scope of the Journal of Next-Gen Science and Engineering Applications (JNGSEA)?</h5>
          <p className='pl-5'>
            JNGSEA publishes high-quality, peer-reviewed research across interdisciplinary areas in science and engineering with a focus on innovation, emerging technologies, and
            practical applications.
          </p>
        </div>

        <div>
          <h5 className='font-semibold text-lg'>How can I submit a manuscript to JNGSEA?</h5>
          <p className='pl-5'>
            Manuscripts can be submitted through our online submission portal. Please ensure your manuscript adheres to the <span className='font-bold'>Author Guidelines</span>{' '}
            before submitting.
          </p>
        </div>

        <div>
          <h5 className='font-semibold text-lg'>Is there a submission fee?</h5>
          <p className='pl-5'>No, there is no fee for submitting a manuscript. However, if accepted, a publication fee may apply to cover processing and hosting costs.</p>
        </div>

        <div>
          <h5 className='font-semibold text-lg'>How long does the peer-review process take?</h5>
          <p className='pl-5'>On average, the peer-review process takes 4–6 weeks. We strive to provide timely and constructive feedback to authors.</p>
        </div>

        <div>
          <h5 className='font-semibold text-lg'>Can I suggest reviewers for my manuscript?</h5>
          <p className='pl-5'>Yes, authors may suggest potential reviewers during the submission process. However, the final decision rests with the editorial board.</p>
        </div>

        <div>
          <h5 className='font-semibold text-lg'>Is open access available?</h5>
          <p className='pl-5'>Yes, JNGSEA is an open-access journal. All published articles are freely accessible to readers worldwide.</p>
        </div>

        <div>
          <h5 className='font-semibold text-lg'>What if I discover an error after publication?</h5>
          <p className='pl-5'>
            Contact the editorial office immediately. If the error affects the scientific integrity of the work, we will publish a correction or retraction as needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
