const OpenAccessPage = () => {
  return (
    <div className='flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Open Access and Publication Ethics</h1>

      <div className='space-y-5'>
        <div className='space-y-3 text-neutral-600 text-base'>
          <h5 className='py-2 text-lg font-bold text-neutral-700'>Open Access Statement</h5>
          <p>
            Journal of Next-Gen Science and Technology Applications (JNGSTA) follows the Open Access publishing model, ensuring that research outputs are freely available to all
            without financial, legal, or technical barriers. In this model, readers and their institutions are not charged for access. Users are permitted to read, download, copy,
            distribute, print, search, or link to the full texts of articles, or use them for any lawful non-commercial purpose, without asking prior permission from the publisher
            or the author.
          </p>
          <p>
            The publication cost is typically covered by the author's institution or research funding bodies. These Open Access charges substitute traditional subscription fees and
            ensure the journal content remains freely accessible, especially to researchers, academicians, and young scholars from underrepresented and developing regions.
          </p>
        </div>

        <div className='space-y-3 text-neutral-600 text-base'>
          <h5 className='py-2 text-lg font-bold text-neutral-700'>Publication Ethics and Malpractice Ethics</h5>
          <p>
            JNGSTA is committed to maintaining the highest standards of publication ethics and adheres to the guidelines outlined by the Committee on Publication Ethics (COPE). The
            ethical standards apply to all parties involved in publishing: authors, editors, peer reviewers, and the publisher.
          </p>
        </div>

        <div className='space-y-1.5 text-neutral-600 text-base'>
          <h5 className='py-2 text-lg font-bold text-neutral-700'>Duties of Authors</h5>
          <ul className='space-y-1.5 list-inside list-disc'>
            <li className='pl-5'>
              <span className='font-bold text-black'>Originally and Plagiarism: </span>Authors must ensure their work is original. Any use of others' work must be appropriately
              cited. Plagiarism in any form is unethical and unacceptable.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Multiple Submissions: </span>Simultaneous submission to more than one journal is prohibited.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Acknowledgment: </span>: Proper acknowledgment of others' contributions and sources is mandatory.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Authorship: </span>Authorship should reflect significant contribution. All co-authors must approve the final manuscript.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Disclosure of Conflicts: </span>Authors must disclose any financial or personal relationships that could influence their work.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Research Involving Humans or Animals: </span>Authors must comply with ethical standards and provide necessary approvals and
              consents.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Errors in Published Work: </span>Authors must promptly inform the editor if a significant error is discovered in their work.
            </li>
          </ul>
        </div>

        <div className='space-y-1.5 text-neutral-600 text-base'>
          <h5 className='py-2 text-lg font-bold text-neutral-700'>Duties of Editors</h5>
          <ul className='space-y-1.5 list-inside list-disc'>
            <li className='pl-5'>
              <span className='font-bold text-black'>Fair Evaluation: </span>Manuscripts are evaluated solely on academic merit, without bias.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Confidentiality: </span>Editors must keep all submitted manuscripts confidential.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Conflicts of Interest: </span>Editors should avoid reviewing manuscripts where a conflict of interest exists.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Publication Decisions: </span>Decisions are based on the manuscript’s academic value and integrity.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Ethical Oversight: </span>Editors must take steps when ethical concerns are raised about a submitted or published paper
            </li>
          </ul>
        </div>

        <div className='space-y-1.5 text-neutral-600 text-base'>
          <h5 className='py-2 text-lg font-bold text-neutral-700'>Duties of Reviewers</h5>
          <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
            <li className='pl-5'>
              <span className='font-bold text-black'>Confidentiality: </span>Reviewers must maintain confidentiality of manuscripts under review
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Objectivity: </span>Reviews must be objective and constructive, avoiding personal criticism.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Acknowledging Sources: </span>Reviewers should highlight relevant work not cited.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Conflicts of Interest: </span>Reviewers must disclose any potential conflicts and recuse themselves if necessary.
            </li>
            <li className='pl-5'>
              <span className='font-bold text-black'>Timeliness: </span>Reviews should be completed within the agreed timeframe.
            </li>
          </ul>
        </div>

        <div className='space-y-3 text-neutral-600 text-base'>
          <p>
            JNGSTA is dedicated to the fair, unbiased, and timely peer review and publication of all submissions. The journal ensures that commercial interests have no influence on
            editorial decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenAccessPage;
