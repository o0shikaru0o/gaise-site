const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/gaise/enacopheildkacacmanngpokciajndha';

export default function HomePage() {
  return (
    <>
      {/* --- Hero --- */}
      <section className="hero">
        <div className="wrap">
          <h1>One closet for everything you&apos;re shopping for.</h1>
          <p className="tagline">
            Save items from any retailer, compare them side by side, and get alerts the moment a
            price drops — so you never miss the right moment to buy.
          </p>
          <div className="hero-ctas">
            <a className="btn" href={CHROME_STORE_URL}>Add Gaise to Chrome →</a>
            <a className="btn btn-secondary" href="#how">See how it works</a>
          </div>
        </div>
      </section>

      {/* --- Features --- */}
      <section className="slice" id="features">
        <div className="wrap">
          <span className="section-eyebrow">What Gaise does</span>
          <h2 className="section-title">Every item you love, in one place — with a price watchdog built in.</h2>
          <p className="section-lead">
            Stop bouncing between tabs and losing track of what you were considering. Gaise lives
            in your browser, so saving is one click on any store.
          </p>
          <div className="features">
            <Feature icon="🛍️" title="Save from anywhere">
              One click on Lululemon, Zara, ASOS, Nordstrom, or any online retailer drops the item
              into your closet.
            </Feature>
            <Feature icon="⚖️" title="Compare side by side">
              Line up your favorites, see prices and sizes together, and make a confident decision
              before you buy.
            </Feature>
            <Feature icon="🔔" title="Price drop alerts">
              Gaise watches your saved items. The moment a price drops or a sale starts, you get a
              notification.
            </Feature>
            <Feature icon="🏷️" title="Auto category tags">
              Items are auto-organized into Leggings, Dresses, Shoes and more — override anytime or
              make your own tags.
            </Feature>
            <Feature icon="📚" title="Collections">
              Group items by occasion — &quot;Wedding outfit&quot;, &quot;Spring capsule&quot;, &quot;Gifts for mom&quot;.
              Share a public link with anyone.
            </Feature>
            <Feature icon="💸" title="Better prices">
              Gaise scans other retailers for the same item — if it&apos;s cheaper somewhere else,
              you&apos;ll see it on your closet card.
            </Feature>
          </div>
        </div>
      </section>

      {/* --- How it works --- */}
      <section className="slice" id="how" style={{ background: '#fff' }}>
        <div className="wrap">
          <span className="section-eyebrow">How it works</span>
          <h2 className="section-title">Install once. Save everywhere. Buy at the right moment.</h2>
          <div className="steps">
            <Step num="01" title="Install Gaise">
              Add the free Chrome extension. Sign in with email to sync across devices.
            </Step>
            <Step num="02" title="Save as you shop">
              A &quot;Save to Closet&quot; button appears on product pages across every major retailer.
              One click.
            </Step>
            <Step num="03" title="Compare & buy">
              Open your closet, compare items side by side, and act the second a price drops.
            </Step>
          </div>
        </div>
      </section>

      {/* --- CTA band --- */}
      <section className="cta-band">
        <div className="wrap">
          <h2>Ready to unify your shopping?</h2>
          <a className="btn" href={CHROME_STORE_URL}>Add Gaise to Chrome — it&apos;s free</a>
        </div>
      </section>
    </>
  );
}

function Feature({ icon, title, children }) {
  return (
    <div className="feature">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Step({ num, title, children }) {
  return (
    <div className="step">
      <div className="step-num">{num}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
