// Shared display helpers — kept in sync with the extension's popup.js.

const BRAND_LABELS = {
  'lululemon':    'Lululemon',
  'alo-yoga':     'Alo Yoga',
  'asos':         'ASOS',
  'zara':         'Zara',
  'hm':           'H&M',
  'nordstrom':    'Nordstrom',
  'revolve':      'Revolve',
  'net-a-porter': 'Net-a-Porter',
  'shopbop':      'Shopbop',
  'uniqlo':       'Uniqlo',
};

export function brandLabel(retailer) {
  if (!retailer) return '';
  return BRAND_LABELS[retailer] || retailer;
}

export function formatPrice(value) {
  if (value == null) return '';
  return `$${Number(value).toFixed(0)}`;
}
