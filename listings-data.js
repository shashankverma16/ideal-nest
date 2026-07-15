/*
  listings-data.js
  -----------------
  This file stands in for Sanity right now. Each object matches the shape
  the "property" document in the Sanity schema will produce.

  TO GO LIVE WITH SANITY:
  Replace the `const listings = [...]` array below with a fetch call, e.g.

    const PROJECT_ID = "your-project-id";
    const DATASET = "production";
    const query = encodeURIComponent(`*[_type == "property"] | order(_createdAt desc)`);
    const res = await fetch(`https://${PROJECT_ID}.api.sanity.io/v1/data/query/${DATASET}?query=${query}`);
    const { result } = await res.json();
    const listings = result;

  Everything else (filtering, rendering, cards) reads from the `listings`
  array exactly as it does now, so no other code needs to change.
*/

const listings = [
  {
    slug: "3bhk-apartment-goa-1",
    title: "3 BHK Apartment",
    category: "Apartments",
    bhk: 3,
    bathrooms: 2,
    location: "Porvorim, North Goa",
    priceValue: 8500000,
    priceLabel: "₹85 L",
    status: "For Sale",
    description: "A 3 BHK apartment in a well-maintained residential complex, ready to move in. Bright, ventilated rooms, covered parking, and a location close to everyday essentials."
  },
  {
    slug: "2bhk-apartment-goa-1",
    title: "2 BHK Apartment",
    category: "Apartments",
    bhk: 2,
    bathrooms: 2,
    location: "Mapusa, North Goa",
    priceValue: 5200000,
    priceLabel: "₹52 L",
    status: "For Sale",
    description: "Compact 2 BHK apartment, ideal for a small family or as a rental-yield buy. Lift access, gated entry, and walking distance to the market."
  },
  {
    slug: "4bhk-villa-goa-1",
    title: "4 BHK Villa",
    category: "Villas",
    bhk: 4,
    bathrooms: 4,
    location: "Assagao, North Goa",
    priceValue: 24000000,
    priceLabel: "₹2.4 Cr",
    status: "For Sale",
    description: "Independent 4 BHK villa with private garden and covered parking for two cars. Quiet residential lane, five minutes from Assagao market."
  },
  {
    slug: "2bhk-rental-goa-1",
    title: "2 BHK Apartment",
    category: "Rentals",
    bhk: 2,
    bathrooms: 2,
    location: "Candolim, North Goa",
    priceValue: 35000,
    priceLabel: "₹35,000/mo",
    status: "For Rent",
    description: "Furnished 2 BHK available for long-term rent. Power backup, covered parking, walking distance to the beach road."
  },
  {
    slug: "shop-commercial-goa-1",
    title: "Ground Floor Shop",
    category: "Commercial",
    bhk: null,
    bathrooms: 1,
    location: "Mapusa Market Road, North Goa",
    priceValue: 18000000,
    priceLabel: "₹1.8 Cr",
    status: "For Sale",
    description: "High-footfall ground floor commercial space on the main market road. Suited to retail, showroom, or a clinic."
  },
  {
    slug: "plot-goa-1",
    title: "Residential Plot, 2000 sqft",
    category: "Plots",
    bhk: null,
    bathrooms: null,
    location: "Siolim, North Goa",
    priceValue: 9500000,
    priceLabel: "₹95 L",
    status: "For Sale",
    description: "Clear-title residential plot in a developing pocket of Siolim. Road access on two sides, close to the river."
  }
];
