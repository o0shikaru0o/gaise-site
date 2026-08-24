import { notFound } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { brandLabel, formatPrice } from '../../../lib/formatters';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/gaise/enacopheildkacacmanngpokciajndha';

// Fetch a public collection + its items by share token. Anon key + RLS guarantees
// we can only see is_public=true collections and their referenced saved_items.
async function loadCollection(token) {
  const { data: collection, error: cErr } = await supabase
    .from('collections')
    .select('id, name, created_at')
    .eq('share_token', token)
    .eq('is_public', true)
    .maybeSingle();
  if (cErr || !collection) return null;

  const { data: rows, error: iErr } = await supabase
    .from('collection_items')
    .select('added_at, saved_items(product_name, product_url, image_url, current_price, saved_price, retailer)')
    .eq('collection_id', collection.id)
    .order('added_at', { ascending: false });
  if (iErr) return { collection, items: [] };

  const items = (rows ?? []).map((r) => r.saved_items).filter(Boolean);
  return { collection, items };
}

// Set dynamic OG tags so link previews on iMessage / Twitter / Slack show the
// actual collection name — makes shared links look like real product pages.
export async function generateMetadata({ params }) {
  const data = await loadCollection(params.token);
  if (!data) {
    return { title: 'Collection not found · Gaise' };
  }
  const { collection, items } = data;
  const count = items.length;
  const title = `${collection.name} · Gaise`;
  const description = `A collection of ${count} item${count === 1 ? '' : 's'} shared on Gaise.`;
  return {
    title,
    description,
    openGraph: { title, description, type: 'website' },
    twitter: { card: 'summary', title, description },
  };
}

export default async function ShareCollectionPage({ params }) {
  const data = await loadCollection(params.token);
  if (!data) notFound();

  const { collection, items } = data;

  return (
    <div className="wrap">
      <div className="share-header">
        <h1>{collection.name}</h1>
        <p className="share-sub">
          {items.length} item{items.length === 1 ? '' : 's'} · shared via Gaise
        </p>
      </div>

      {items.length === 0 ? (
        <div className="share-empty">
          <h1>This collection is empty</h1>
          <p>The owner hasn&apos;t added any items yet.</p>
        </div>
      ) : (
        <div className="share-grid">
          {items.map((item, i) => (
            <ItemCard key={i} item={item} />
          ))}
        </div>
      )}

      <div className="share-cta">
        <p>Want to build your own closet like this?</p>
        <a className="btn" href={CHROME_STORE_URL}>Get Gaise for Chrome — it&apos;s free</a>
      </div>
    </div>
  );
}

function ItemCard({ item }) {
  const currentPrice = item.current_price ?? item.saved_price;
  const drop = item.current_price != null && item.saved_price != null && item.current_price < item.saved_price;

  return (
    <a
      className="share-card"
      href={item.product_url}
      target="_blank"
      rel="nofollow sponsored noopener"
    >
      {item.image_url ? (
        <img className="share-card-img" src={item.image_url} alt="" loading="lazy" />
      ) : (
        <div className="share-card-img" />
      )}
      <div className="share-card-body">
        <div className="share-card-brand">{brandLabel(item.retailer)}</div>
        <div className="share-card-name">{item.product_name}</div>
        <div className="share-card-price">
          {drop && <del>{formatPrice(item.saved_price)}</del>}
          {formatPrice(currentPrice)}
        </div>
      </div>
    </a>
  );
}
