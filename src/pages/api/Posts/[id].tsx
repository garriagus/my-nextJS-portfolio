import data from './data.json';

export function getPostsById(id) {
  const posts = data.filter((post) => post.id === id);
  return posts;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getPostsById(req.query.category);
    res.status(200).json(products);
  }
}