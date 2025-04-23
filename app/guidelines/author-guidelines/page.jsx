const AuthorGuidelinesPage = () => {
  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Author Guidelines</h1>

      <p className='space-y-3 text-neutral-600 text-base'>
        Authors are invited to submit original, high-quality manuscripts that align with the scope of the Journal of Next-Gen Science and Technology Applications (JNGSTA). To
        ensure a smooth review and publication process, please adhere to the following guidelines.
      </p>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Manuscript Preparation</h5>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>Manuscripts should be written in clear, concise English and formatted according to the JNGSTA template.</li>
          <li className='pl-5'>Include title, abstract, keywords, introduction, methodology, results, discussion, conclusion, and references.</li>
          <li className='pl-5'>All figures and tables should be numbered and captioned appropriately.</li>
          <li className='pl-5'>Use SI units and standard nomenclature where applicable.</li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Submission Requirements</h5>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>Submit manuscripts via the online submission system in PDF or DOCX format.</li>
          <li className='pl-5'>Ensure all author names, affiliations, and email addresses are included.</li>
          <li className='pl-5'>Include a cover letter summarizing the contribution of the manuscript.</li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Plagiarism and Originality</h5>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>Submissions must be original and not under consideration elsewhere.</li>
          <li className='pl-5'>All manuscripts will be screened for plagiarism using dedicated software.</li>
          <li className='pl-5'>Authors must properly cite all sources and avoid self-plagiarism.</li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Author Responsibilities</h5>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>Ensure the manuscript is accurate, complete, and free of errors.</li>
          <li className='pl-5'>Disclose all conflicts of interest and sources of funding.</li>
          <li className='pl-5'>Co-authors should have contributed significantly to the research and approve the final version.</li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Peer Review Process</h5>
        <p className='space-y-3 text-neutral-600 text-base'>
          All submissions undergo a double-blind peer review process. Authors should ensure their manuscripts are anonymized (remove identifying info from the manuscript and file
          metadata).
        </p>
        <p>Review outcomes may include: Accept, Minor Revision, Major Revision, or Reject. Authors are expected to respond to reviewer comments within the specified timeframe.</p>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Post-Acceptance</h5>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>Accepted papers will be copyedited and formatted for publication.</li>
          <li className='pl-5'>Authors will receive proofs for review and must respond promptly with corrections.</li>
          <li className='pl-5'>Publication is subject to the completion of all formalities, including copyright transfer.</li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Ethical Guidelines</h5>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>Research involving humans or animals must include ethical approval statements.</li>
          <li className='pl-5'>Report any ethical concerns, including plagiarism or data manipulation, immediately.</li>
          <li className='pl-5'>The journal adheres to COPE (Committee on Publication Ethics) standards.</li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Publication Fees and Licensing</h5>
        <p className='space-y-3 text-neutral-600 text-base'>
          JNGSTA does not charge submission or processing fees. Published articles are open access under a Creative Commons license, allowing for wide dissemination and reuse with
          proper attribution.
        </p>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Support</h5>
        <p className='space-y-3 text-neutral-600 text-base'>
          For any questions regarding submission, formatting, or policies, please contact the editorial office at <span className='text-black font-medium'>editor@JNGSTA.org</span>.
        </p>
      </div>
    </div>
  );
};

export default AuthorGuidelinesPage;
