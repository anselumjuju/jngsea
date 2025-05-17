import Image from 'next/image';

const WritingTipsPage = () => {
  return (
    <section className='max-w-5xl mx-auto px-4 py-10 space-y-10'>
      <h1 className='text-3xl font-bold text-gray-800'>Writing Tips for Authors</h1>

      <div className='space-y-6'>
        <h2 className='text-2xl font-semibold text-gray-700'>Abstract Guidelines</h2>
        <p className='text-gray-600'>
          The abstract serves as a concise summary of your research. It should present the problem addressed, the methodology adopted, significant findings, and the contribution of
          the work—clearly and objectively. The goal is to provide readers with a quick understanding of what the paper is about, without delving into background context or
          subjective language.
        </p>
        <ul className='list-disc list-inside text-gray-600 mt-3 space-y-1'>
          <li>Define the research problem or primary focus of the study.</li>
          <li>Briefly describe the methodology, models, or approach used.</li>
          <li>Summarize the core results and the conclusions derived.</li>
          <li>Highlight novel contributions and measurable improvements over existing work.</li>
          <li>Exclude general background information and literature review.</li>
          <li>Maintain a third-person, academic tone.</li>
          <li>Restrict the abstract length to a maximum of 150 words.</li>
        </ul>
      </div>

      <div className='space-y-6'>
        <h2 className='text-2xl font-semibold text-gray-700'>Keyword Selection</h2>
        <p className='text-gray-600'>
          Keywords are critical for indexing your article in academic databases and improving discoverability. Select specific and relevant terms that best capture the core content
          and themes of your paper.
        </p>
        <ul className='list-disc list-inside text-gray-600 mt-3 space-y-1'>
          <li>Use 4 to 8 keywords representing your paper’s main topics and methods.</li>
          <li>Avoid overly broad or generic terms.</li>
          <li>Include domain-specific terminology and subtopics when applicable.</li>
          <li>Ensure keywords reflect terms researchers are likely to use in searches.</li>
        </ul>
      </div>

      <div className='space-y-6'>
        <h2 className='text-2xl font-semibold text-gray-700'>General Writing Guidelines</h2>
        <p className='text-gray-600'>
          Academic writing should be clear, objective, and logically organized. Unlike casual communication, it must independently convey ideas to readers across diverse academic
          and professional backgrounds. Clarity, coherence, and precision are key to effective scholarly communication.
        </p>
      </div>

      <div className='space-y-6'>
        <h3 className='text-xl font-semibold text-gray-700'>Quick Checklist Before Submission</h3>
        <ul className='list-disc list-inside text-gray-600 mt-3 space-y-1'>
          <li>Is your research contribution original, significant, or practically useful?</li>
          <li>Does the abstract clearly communicate your study’s main objectives?</li>
          <li>Have you provided adequate evidence and reasoning to support your conclusions?</li>
          <li>Is the paper logically structured, with a smooth flow of ideas?</li>
          <li>Have you cited relevant prior work appropriately?</li>
          <li>Is your writing concise and free from redundancy or filler language?</li>
          <li>Have you proofread the manuscript for grammar, clarity, and consistency?</li>
        </ul>
      </div>

      <div className='space-y-4'>
        <h3 className='text-xl font-semibold text-gray-700'>Writing in Sentences</h3>
        <p className='text-gray-600'>
          Each sentence must begin with a capital letter, include a subject and a verb, and end with a proper punctuation mark. Ensure your writing consists of well-formed,
          complete sentences. Avoid fragments or overly long and complex structures.
        </p>
        <p className='text-gray-600'>
          When in doubt, break long sentences into two or more shorter ones. This improves clarity and reduces grammatical errors, especially for non-native English speakers. Clear
          writing enhances understanding and strengthens your argument.
        </p>
      </div>
    </section>
  );
};

export default WritingTipsPage;
