export const metadata = {
  title: 'Privacy Policy · Gaise',
  description: 'How Gaise collects, uses, and protects your data.',
};

export default function PrivacyPage() {
  return (
    <div className="content doc">
      <h1>Privacy Policy</h1>
      <p className="doc-updated">Last updated: April 2026</p>

      <p>
        Gaise (&quot;we&quot;, &quot;our&quot;) provides a Chrome extension and website that let you
        save items from online retailers into a personal closet. This policy explains what data
        we collect, why, and how you can control it.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Account data</strong> — your email address and an authentication token, so we
          can sync your closet across devices.
        </li>
        <li>
          <strong>Saved items</strong> — for each item you choose to save: the product URL, name,
          image URL, price, size, retailer, and product identifiers (GTIN / MPN / brand when
          available). Only items you explicitly save. We do not track your general browsing.
        </li>
        <li>
          <strong>Usage events</strong> — anonymous counters (e.g., &quot;an affiliate link was
          clicked&quot;) used to measure engagement. No personally identifying context.
        </li>
      </ul>

      <h2>What we don&apos;t collect</h2>
      <ul>
        <li>Your browsing history outside pages you save from.</li>
        <li>Passwords, payment information, or content from retailer accounts.</li>
        <li>Data from tabs, forms, or pages you did not choose to save.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To provide the core Gaise features: saving, syncing, price monitoring, and price
          drop notifications.</li>
        <li>To match your saved items against prices at other retailers so we can show you the
          best available deal.</li>
        <li>To improve the product — aggregate, anonymized usage patterns only.</li>
      </ul>

      <h2>Sharing your data</h2>
      <p>
        We do not sell your data. We do not share it with third parties for their independent
        marketing. Data is stored in our Supabase backend and accessed only by Gaise services on
        your behalf. Public share links you create expose only the items you explicitly added to
        that collection — nothing else.
      </p>

      <h2>Affiliate links</h2>
      <p>
        Outbound links from Gaise to retailers may be affiliate links. If you click one and make
        a purchase, we may earn a small commission at no extra cost to you. See our{' '}
        <a href="/disclosure">Affiliate disclosure</a> for details.
      </p>

      <h2>Your controls</h2>
      <ul>
        <li>Delete any saved item at any time from your closet.</li>
        <li>Delete your entire account and all associated data by emailing us.</li>
        <li>Toggle price-drop notifications per item.</li>
        <li>Unpublish shared collections at any time to revoke public access instantly.</li>
      </ul>

      <h2>Contact</h2>
      <p>Questions or requests?</p>
      <p>
        <a className="btn" href="mailto:madison.prjcts@gmail.com">Contact us</a>
      </p>
    </div>
  );
}
