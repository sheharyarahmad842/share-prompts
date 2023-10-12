'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from '@components/Form';

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: '', tag: '' });

  useEffect(() => {
    const getPromptDetails = async () => {
      try {
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json();
        console.log('Data: ', data);
        setPost({ prompt: data.prompt, tag: data.tag });
      } catch (err) {
        console.log(err);
      }
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePost = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!promptId) alert('Missing Prompt Id');
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (response.ok) router.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type='Edit'
      submitting={submitting}
      post={post}
      setPost={setPost}
      handleSubmit={updatePost}
    />
  );
};

export default UpdatePrompt;
