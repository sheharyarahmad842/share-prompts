import { connectDB } from '@utils/db';
import Prompt from '@models/prompt';

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const prompt = await Prompt.findById(params.id).populate('creator');
    if (!prompt) return new Response('Prompt not found', { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (err) {
    return new Response('Server Error', { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    await connectDB();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) {
      return new Response('Prompt not found', { status: 404 });
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (err) {
    return new Response('Error updating your prompt', { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectDB();
    await Prompt.findByIdAndRemove(params.id);
    return new Response('Post deleted successfully', { status: 200 });
  } catch (err) {
    return new Response('Error deleting your prompt', { status: 500 });
  }
};
