const PublicationChargePage = () => {
  return (
    <div className='flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Publication Charge</h1>

      <p className='space-y-3 text-neutral-600 text-base'>Journal of Next-Gen Science and Technology Applications (JNGSTA)</p>
      <p className='space-y-3 text-neutral-600 text-base'>
        The Journal of Next-Gen Science and Technology Applications (JNGSTA) is committed to offering quality open-access publication services to authors and readers across the
        globe.
      </p>
      <p className='space-y-3 text-neutral-600 text-base'>
        To cover the cost of editorial processing, peer review, journal production, DOI registration, digital archiving, and hosting,{' '}
        <span className='font-bold text-black'>a modest publication fee</span> is applicable <span className='font-bold text-black'>only after acceptance</span> of the manuscript.
      </p>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Article Processing Charge (APC):</h5>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>
            <span className='font-bold text-black'>Indian Authors: </span>₹ [Insert Amount] per accepted paper
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>International Authors: </span>USD [Insert Amount] per accepted paper
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>No charges </span>are applicable for initial submission and peer review.
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>Payment </span>is to be made only after final acceptance and before publication.
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>Discounts or waivers </span>may be provided for deserving authors (e.g., students, researchers from developing countries) upon
            request and approval.
          </li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>What APC </h5>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>Double-blind peer review process</li>
          <li className='pl-5'>Typesetting, formatting, and proofreading</li>
          <li className='pl-5'>Assignment of DOI for each paper</li>
          <li className='pl-5'>Permanent online access and open-access hosting</li>
          <li className='pl-5'>Inclusion in indexing databases (as applicable)</li>
        </ul>
      </div>

      <div className='space-y-3'>
        <p className='space-y-3 text-neutral-600 text-base'>For payment instructions and invoice requests, authors will be contacted by the editorial team after acceptance.</p>
        <p className='space-y-3 text-neutral-600 text-base'>For queries regarding publication charges or waiver requests, please contact:</p>
        <p className='space-y-3 text-neutral-600 text-base'>
          <span className='font-bold text-black'>Email:</span> editor.JNGSTA@rise10steps.com
        </p>
      </div>
    </div>
  );
};

export default PublicationChargePage;
