import Link from 'next/link';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/gaise/enacopheildkacacmanngpokciajndha';

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">Gaise</Link>
        <nav className="site-nav">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <Link href="/privacy">Privacy</Link>
          <a className="btn" href={CHROME_STORE_URL}>Add to Chrome</a>
        </nav>
      </div>
    </header>
  );
}
