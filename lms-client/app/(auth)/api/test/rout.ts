export default function handler({req, res}:{req:any, res:any}) {
    res.status(200).json({ text: 'Hello' });
}
  