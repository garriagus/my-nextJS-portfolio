import { get } from 'http';
import data from './data.json';

export function getPosts() {
  return data;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getPosts();
    res.status(200).json(products);
  }
}