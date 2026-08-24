import Link from 'next/link';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/gaise/enacopheildkacacmanngpokciajndha';

export default function NotFound() {
  return (
    <div className="wrap">
      <div className="share-empty" style={{ padding: '120px 0' }}>
        <h1>Collection not found</h1>
        <p>
          This link is either invalid, expired, or the owner made it private again.
        </p>
        <p style={{ marginTop: 24 }}>
          <Link className="btn" href="/">Back to Gaise</Link>
        </p>
        <p style={{ marginTop: 24 }}>
          Or <a href={CHROME_STORE_URL}>install Gaise</a> to build your own closet.
        </p>
      </div>
    </div>
  );
}
