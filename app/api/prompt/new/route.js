import Prompt from '@models/prompt';
import { connectDB } from '@utils/db';

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectDB();
    const newPrompt = await Prompt.create({ creator: userId, prompt, tag });
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (err) {
    return new Response('Failed to created a new prompt', { status: 500 });
  }
};
