```javascript
// pages/api/hello.js
export default function handler(req, res) {
  try {
    // Simulate some operation that might fail
    // const result = someOperation();
    const result = { text: 'Hello' };
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
```