import Image from 'next/image';

const SubmissionPage = () => {
  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Submission Guidelines</h1>
      <div className='space-y-3 text-neutral-600 text-base'>
        <p>
          JNGSTA is dedicated to the fair, unbiased, and timely peer review and publication of all submissions. The journal ensures that commercial interests have no influence on
          editorial decisions.
        </p>
      </div>
      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Initial Paper Submission</h5>
        <p>
          Prospective authors are kindly invited to submit full-text original research papers, including results, figures, tables, and references. Submitted manuscripts must be:
        </p>
        <ul className='space-y-1.5 list-inside list-disc'>
          <li>Original and unpublished</li>
          <li>Not under consideration elsewhere</li>
          <li>Written in English and formatted using the official JNGSTA Template (available on request)</li>
        </ul>
      </div>
      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>File Types Accepted:</h5>
        <ul className='space-y-1.5 list-inside list-disc'>
          <li>Editable formats: .doc, .docx, .pdf</li>
          <li>All images, tables, graphs, and figures must be embedded in the document</li>
        </ul>
      </div>
      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>File Paper Submission:</h5>
        <p>Upon acceptance, the authors are required to submit:</p>
        <ul className='space-y-1.5 list-inside list-disc'>
          <li>Final camera-ready manuscript in .doc or .pdf format</li>
          <li>Signed Copyright Transfer Form (provided upon acceptance)</li>
        </ul>
      </div>
      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>File Paper Submission:</h5>
        <p>Upon acceptance, the authors are required to submit:</p>
        <ul className='space-y-1.5 list-inside list-disc'>
          <li>Final camera-ready manuscript in .doc or .pdf format</li>
          <li>Signed Copyright Transfer Form (provided upon acceptance)</li>
        </ul>
      </div>
      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>License Agreement</h5>
        <p>By submitting your manuscript, you certify that:</p>
        <ul className='space-y-1.5 list-inside list-disc'>
          <li>The manuscript is original and not under review elsewhere</li>
          <li>No part of the content is licensed, published, or accepted by another publisher</li>
          <li>You agree to the terms of the Creative Commons Attribution License (CC BY 4.0)</li>
          <li>You have obtained all necessary permissions for third-party content</li>
        </ul>
        <p>
          Authors are fully responsible for ensuring the manuscript does not contain any proprietary, confidential, defamatory, or copyrighted material without proper
          authorization.
        </p>
      </div>
      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Honor Code and Plagiarism Statement</h5>
        <p>Authors must uphold the highest standards of academic integrity. By submitting to JNGSTA, authors agree that:</p>
        <ul className='space-y-1.5 list-inside list-disc'>
          <li>The work is their own</li>
          <li>All references are properly cited</li>
          <li>The content does not exceed 15% similarity index</li>
        </ul>
        <p>All submissions will undergo plagiarism screening.</p>
      </div>
      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Peer Review Process</h5>
        <p>All submitted papers undergo a double-blind international peer review process:</p>
        <ul className='space-y-1.5 list-inside list-disc'>
          <li>Each manuscript is reviewed by qualified referees in the relevant field</li>
          <li>
            Review outcomes may be:
            <ul className='space-y-1.5 list-inside list-disc disc-[var(--royal-yellow)]'>
              <li>Accept</li>
              <li>Accept with minor/major revisions</li>
              <li>Revise and resubmit</li>
              <li>Reject</li>
            </ul>
          </li>
          <li>Revised submissions will be evaluated by the same reviewers to ensure compliance</li>
        </ul>
        <p>The Editor-in-Chief reserves the right to reject or recommend modifications to any manuscript at any stage.</p>
      </div>

      <div className='space-y-1.5 text-neutral-600 text-base'>
        <h5 className='py-2 text-lg font-bold text-neutral-700'>Publication Ethics and Malpractice Ethics</h5>
        <p>
          JNGSTA is committed to maintaining the highest standards of publication ethics and adheres to the guidelines outlined by the Committee on Publication Ethics (COPE). The
          ethical standards apply to all parties involved in publishing: authors, editors, peer reviewers, and the publisher.
        </p>
      </div>

      {/* --- */}
    </div>
  );
};

export default SubmissionPage;
