import Link from 'next/link';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/gaise/enacopheildkacacmanngpokciajndha';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-col footer-brand">
          <Link href="/" className="brand">Gaise</Link>
          <p>Save items from any retailer into one closet. Compare side by side. Get alerts when prices drop.</p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href={CHROME_STORE_URL}>Chrome extension</a></li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#how">How it works</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/disclosure">Affiliate disclosure</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a className="btn btn-secondary" href="mailto:madison.prjcts@gmail.com">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-legal">© {new Date().getFullYear()} Gaise. All rights reserved.</div>
    </footer>
  );
}
