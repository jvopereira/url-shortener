import { useState } from 'react'

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl: url }),
      });
      
      const data = await response.json();
      setShortUrl(`${window.location.origin}/api/${data.shortUrl}`);
    } catch (error) {
      console.error('Error shortening URL:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="url-shortener">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a URL to shorten"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </form>
      
      {shortUrl && (
        <div className="result">
          <p>Your shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App
