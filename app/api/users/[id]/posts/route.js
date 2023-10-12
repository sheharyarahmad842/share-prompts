import { connectDB } from '@utils/db';
import Prompt from '@models/prompt';

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      'creator'
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch user prompts', { status: 500 });
  }
};
