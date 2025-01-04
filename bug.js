```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This will cause an error because the response is already sent
  res.status(200).json({ text: 'Hello' });
  res.status(500).json({ error: 'Something went wrong' });
}
```