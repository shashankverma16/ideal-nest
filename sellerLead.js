// schemas/sellerLead.js
// Optional: stores submissions from the "Sell with us" form as documents
// in Sanity, so the client can see new seller leads in Studio alongside
// listings, instead of only getting them by email.

export default {
  name: 'sellerLead',
  title: 'Seller Lead',
  type: 'document',
  fields: [
    { name: 'ownerName', title: 'Name', type: 'string' },
    { name: 'ownerPhone', title: 'Phone', type: 'string' },
    { name: 'dealType', title: 'Sell or Rent', type: 'string' },
    { name: 'propertyType', title: 'Property Type', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'expectedPrice', title: 'Expected Price', type: 'string' },
    { name: 'details', title: 'Details', type: 'text' },
    {
      name: 'status',
      title: 'Follow-up Status',
      type: 'string',
      options: { list: ['New', 'Contacted', 'Site Visit Scheduled', 'Listed', 'Closed'] },
      initialValue: 'New',
    },
    { name: 'submittedAt', title: 'Submitted At', type: 'datetime', initialValue: () => new Date().toISOString() },
  ],
  preview: {
    select: { title: 'ownerName', subtitle: 'location' },
  },
};
