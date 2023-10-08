'use client';

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard key={post._id} post={post} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/prompt');
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className='feed'>
      <form className='w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          className='search_input peer'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>

      <PromptCardList data={posts} />
    </div>
  );
};

export default Feed;
