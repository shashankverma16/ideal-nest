// schemas/property.js
// This defines the "Property" document type that will appear in Sanity Studio.
// Once deployed, the client adds/edits listings here — no code changes needed.

export default {
  name: 'property',
  title: 'Property Listing',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "3 BHK Apartment" or "Residential Plot, 2000 sqft"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Apartments', value: 'Apartments' },
          { title: 'Villas', value: 'Villas' },
          { title: 'Rentals', value: 'Rentals' },
          { title: 'Commercial', value: 'Commercial' },
          { title: 'Plots', value: 'Plots' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['For Sale', 'For Rent', 'Sold', 'Rented'],
      },
      initialValue: 'For Sale',
    },
    {
      name: 'bhk',
      title: 'Bedrooms (BHK)',
      type: 'number',
      description: 'Leave blank for plots / commercial with no bedrooms',
    },
    {
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "Assagao, North Goa"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'priceValue',
      title: 'Price (numeric, for filtering)',
      type: 'number',
      description: 'Plain number in rupees, e.g. 8500000. For rentals, enter the monthly rent.',
    },
    {
      name: 'priceLabel',
      title: 'Price (display label)',
      type: 'string',
      description: 'How the price shows on the site, e.g. "₹85 L" or "₹35,000/mo". Use "On enquiry" if you don\'t want to show a figure.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'images',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'featured',
      title: 'Show in homepage listings preview',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'images.0',
    },
  },
};
