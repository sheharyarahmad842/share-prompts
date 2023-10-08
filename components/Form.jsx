import Link from 'next/link';

const Form = ({ type, post, submitting, setPost, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc'>
        {type} and share amazing prompts with the world and let your imagination
        run wild with any AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-gray-700 text-base'>
            Your AI Prompt
          </span>
          <textarea
            className='form_textarea'
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Enter prompt...'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-gray-700 text-base'>
            Tag{' '}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input
            className='form_input'
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#Tag'
          />
        </label>
        <div className='flex-end gap-4 mx-3 mb-5'>
          <Link href='/' className='text-gray-600 font-semibold'>
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 bg-orange-600 rounded-full text-white font-semibold'
          >
            {submitting ? 'Creating...' : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
