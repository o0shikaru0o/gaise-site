export const metadata = {
  title: 'Affiliate Disclosure · Gaise',
  description: 'How Gaise earns from affiliate links.',
};

export default function DisclosurePage() {
  return (
    <div className="content doc">
      <h1>Affiliate Disclosure</h1>
      <p className="doc-updated">Last updated: April 2026</p>

      <p>
        In accordance with the U.S. Federal Trade Commission&apos;s{' '}
        <a
          href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking"
          target="_blank"
          rel="noopener noreferrer"
        >
          Endorsement Guides
        </a>
        , we want to be transparent about how Gaise makes money.
      </p>

      <h2>How affiliate links work on Gaise</h2>
      <p>
        Some outbound links from Gaise to retailers are affiliate links. If you click one and go
        on to make a purchase at the retailer, we may earn a small commission from that retailer.
        <strong> The price you pay is the same</strong> — the commission comes out of the
        retailer&apos;s marketing budget, not your pocket.
      </p>

      <h2>Where you&apos;ll see them</h2>
      <ul>
        <li>The &quot;Shop →&quot; button on any item in your closet.</li>
        <li>The &quot;Save $X at [retailer]&quot; suggestion when we find a cheaper price
          elsewhere.</li>
        <li>Retailer links inside collections that you share publicly.</li>
      </ul>

      <h2>How it influences our recommendations</h2>
      <p>
        Our price-matching engine ranks alternatives strictly by price and availability — never
        by commission rate. When we surface a cheaper competitor, we&apos;re surfacing it because
        it&apos;s cheaper, not because it pays us more.
      </p>

      <h2>Why we do this</h2>
      <p>
        Affiliate commissions keep Gaise free for shoppers. Without them, we&apos;d have to
        charge for the extension or run intrusive ads. We think this is the fairest trade — you
        pay nothing, retailers pay a small marketing fee, and we get to keep building.
      </p>

      <h2>Contact</h2>
      <p>Questions or feedback?</p>
      <p>
        <a className="btn" href="mailto:madison.prjcts@gmail.com">Contact us</a>
      </p>
    </div>
  );
}
