import { useState } from 'react';
import Image from 'next/image';

const PromptCard = ({ post }) => {
  const [copied, setCopied] = useState('');

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <div className='prompt_card'>
      <div className='flex flex-col gap-4 justify-start items-start'>
        <div className='flex items-start justify-between gap-4'>
          <div className='flex justify-start items-center gap-4 cursor-pointer'>
            <Image
              src={post.creator.image}
              width={37}
              height={37}
              className='rounded-full object-contain'
            />
            <div className='flex flex-col'>
              <p className='font-satoshi font-semibold text-gray-900'>
                {post.creator.username}
              </p>
              <p className='font-inter text-gray-500 text-sm'>
                {post.creator.email}
              </p>
            </div>
          </div>
          <div className='copy_btn cursor-pointer' onClick={handleCopy}>
            <Image
              src={
                copied === post.prompt ? '/icons/tick.svg' : '/icons/copy.svg'
              }
              alt={copied === post.prompt ? 'tick_icon' : 'copy_icon'}
              width={12}
              height={12}
            />
          </div>
        </div>
        <p className='font-satoshi text-gray-700 text-sm'>{post.prompt}</p>
        <p className='blue_gradient text-sm font-inter cursor-pointer'>
          {post.tag}
        </p>
      </div>
    </div>
  );
};

export default PromptCard;
