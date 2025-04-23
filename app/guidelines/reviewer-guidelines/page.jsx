const ReviewerGuidelinesPage = () => {
  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Reviewer Guidelines</h1>

      <p className='space-y-3 text-neutral-600 text-base'>
        Peer review is a vital process in maintaining the quality and integrity of research published in the Journal of Next-Gen Science and Technology Applications (JNGSTA).
        Reviewers play a critical role in helping the editorial board assess the novelty, technical quality, and scientific merit of submitted manuscripts. We are grateful for your
        expertise, time, and commitment.
      </p>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Role of the Reviewer</h5>
        <p className='space-y-3 text-neutral-600 text-base'>Reviewers are expected to:</p>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>Provide a critical and constructive assessment of the manuscript.</li>
          <li className='pl-5'>Evaluate the originality, technical soundness, relevance, clarity, and significance of the work.</li>
          <li className='pl-5'>Offer recommendations for improving the manuscript.</li>
          <li className='pl-5'>Help the editor make an informed publication decision.</li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Confidentiality</h5>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>Manuscripts under review must be treated as confidential documents.</li>
          <li className='pl-5'>Do not share or discuss the manuscript with others without explicit permission from the editorial office.</li>
          <li className='pl-5'>Review materials must not be used for personal advantage.</li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Conflicts of Interest</h5>
        <p className='space-y-3 text-neutral-600 text-base'>Reviewers should immediately notify the editor if they:</p>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>Have a personal, academic, or financial conflict of interest with any of the authors or institutions.</li>
          <li className='pl-5'>Feel unqualified to review the manuscript or cannot complete the review within the given timeline.</li>
        </ul>
        <p className='space-y-3 text-neutral-600 text-base'>If a conflict exists, the reviewer should decline the invitation.</p>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Criteria for Evaluation</h5>
        <p className='space-y-3 text-neutral-600 text-base'>Reviewers are encouraged to evaluate the manuscript based on the following criteria:</p>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>
            <span className='font-bold text-black'>Originality and Innovation:</span>
            Is the work novel? Does it contribute new knowledge or perspectives?
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>Technical Quality:</span>
            Is the methodology sound and appropriately applied?
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>Relevance to Scope:</span>
            Is the paper within the aims and scope of JNGSTA?
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>Clarity and Structure:</span>
            Is the paper well-organized and clearly written?
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>Literature Review:</span>
            Is the work grounded in relevant and current research?
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>Data and Results:</span>
            Are the data valid and appropriately interpreted?
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>Conclusion and Impact:</span>
            Are the conclusions supported by the findings? Is the impact significant?
          </li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Review Format</h5>
        <p className='space-y-3 text-neutral-600 text-base'>Reviews should provide:</p>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>
            <span className='font-bold text-black'>Confidential Comments to the Editor</span>
            (optional): Any concerns or recommendations for editorial consideration only.
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>Comments to the Author:</span>
            Clear, constructive, and respectful feedback.
          </li>
          <li className='pl-5'>
            <span className='font-bold text-black'>Recommendation:</span>
            Choose one of the following:
            <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
              <li className='pl-5'>Accept</li>
              <li className='pl-5'>Minor Revision</li>
              <li className='pl-5'>Major Revision</li>
              <li className='pl-5'>Reject</li>
            </ul>
          </li>
        </ul>
        <p>Please provide a justification for your recommendation.</p>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Timeliness</h5>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>
            Reviews should be completed within <span className='font-bold text-black'>2 to 3 weeks</span> of accepting the invitation.
          </li>
          <li className='pl-5'>If more time is needed, please notify the editor immediately.</li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Ethical Considerations </h5>
        <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
          <li className='pl-5'>Report any suspected plagiarism, data fabrication, ethical violations, or duplicate publication to the editor</li>
          <li className='pl-5'>Ensure that your review process upholds the highest ethical standards as guided by COPE.</li>
        </ul>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Recognition</h5>
        <p className='space-y-3 text-neutral-600 text-base'>
          JNGSTA values the time and effort reviewers contribute to the journal. Reviewers will receive formal acknowledgment and may be considered for Editorial Board positions
          based on their performance and commitment.
        </p>
      </div>
    </div>
  );
};

export default ReviewerGuidelinesPage;
