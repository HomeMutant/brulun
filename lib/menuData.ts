export type Variation = { label: string; tone?: "green" | "navy" | "ochre" | "earth" };

export type MenuItem = {
  code: string;
  name: string;
  price: number; // MYR
  description?: string;
  image?: string;
  variations?: Variation[];
};

export type MenuCategory = {
  id: string;
  title: string;
  section: "asian" | "western" | "drinks" | "addons";
  subtitle?: string;
  items: MenuItem[];
};

// Placeholder food imagery (Unsplash — free to use).
const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=70`;

export const menuData: MenuCategory[] = [
  {
    id: "rice-chefs-special",
    title: "Rice — Chef's Special",
    section: "asian",
    subtitle: "Signature flavors",
    items: [
      { code: "N01", name: "Nasi Ayam Brulun", price: 18.0, image: img("photo-1512058564366-18510be2db19") },
      { code: "N02", name: "Brulun Delights", price: 18.0, image: img("photo-1512058564366-18510be2db19") },
      { code: "N03", name: "Ayam Penyet Berasap (w/ Rice)", price: 18.0, image: img("photo-1512058564366-18510be2db19") },
      { code: "N04", name: "Ayam Halia (w/ Rice)", price: 15.9, image: img("photo-1512058564366-18510be2db19") },
      { code: "N05", name: "Daging Halia (w/ Rice)", price: 15.9, image: img("photo-1512058564366-18510be2db19") },
      { code: "N06", name: "Butter Basah Ayam/ Udang (w/ Rice)", price: 19.5, image: img("photo-1512058564366-18510be2db19") },
      { code: "N07", name: "Butter Kering Ayam/ Udang (w/ Rice)", price: 21.9, image: img("photo-1512058564366-18510be2db19") },
      { code: "N08", name: "Butter Basah Ayam/ Udang (w/ Fried Rice)", price: 21.9, image: img("photo-1512058564366-18510be2db19") },
      { code: "N09", name: "Butter Kering Ayam/ Udang (w/ Fried Rice)", price: 22.9, image: img("photo-1512058564366-18510be2db19") },
    ],
  },
  {
    id: "rice-fried",
    title: "Rice — Fried Rice",
    section: "asian",
    items: [
      { code: "N10", name: "Nasi Goreng Ayam Penyet Berasap", price: 21.6, image: img("photo-1603133872878-684f208fb84b") },
      { code: "N11", name: "Nasi Goreng (Ayam/Daging/Seafood)", price: 14.5, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
      { code: "N12", name: "Nasi Goreng Pattaya (Ayam/Daging/Seafood)", price: 16.9, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
      { code: "N13", name: "Nasi Goreng Tom Yam (Ayam/Daging/Seafood)", price: 14.5, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
      { code: "N14", name: "Nasi Goreng USA", price: 18.0 },
      { code: "N15", name: "Nasi Goreng Kampung", price: 12.0 },
      { code: "N16", name: "Nasi Goreng Ikan Masin", price: 12.0 },
      { code: "N17", name: "Nasi Goreng Paprik (Ayam/Daging/Seafood)", price: 16.0, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
    ],
  },
  {
    id: "noodle",
    title: "Noodle",
    section: "asian",
    subtitle: "House pulls",
    items: [
      { code: "M01", name: "Mee Goreng", price: 12.0, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
      { code: "M02", name: "Bihun Goreng", price: 12.0, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
      { code: "M03", name: "Kuey Teow Goreng", price: 12.0, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
      { code: "M04", name: "Bihun Goreng Singapore", price: 15.9, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
      { code: "M05", name: "Mee Basah", price: 14.5, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
      { code: "M06", name: "Wantan Ho", price: 15.9, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
    ],
  },
  {
    id: "soup-soto-tomyam",
    title: "Soup & Specials",
    section: "asian",
    subtitle: "Broths & bowls",
    items: [
      { code: "S01", name: "Sup Tulang Brulun", price: 24.0 },
      { code: "S02", name: "Sup Ayam Penyet Brulun", price: 18.0 },
      { code: "S03", name: "Sup Soto", price: 12.0, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Prawn" }] },
      { code: "S04", name: "Sup Bakso", price: 12.0, variations: [{ label: "Chicken" }, { label: "Beef" }] },
      { code: "S05", name: "Soto Mee Hoon", price: 12.0, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Prawn" }] },
      { code: "S06", name: "Tom Yam", price: 14.5, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
      { code: "S07", name: "Tom Yam With Noodles", price: 18.0, variations: [{ label: "Chicken" }, { label: "Beef" }, { label: "Seafood" }] },
    ],
  },
  {
    id: "western-best",
    title: "Western — Best Seller",
    section: "western",
    subtitle: "Fan favorites",
    items: [
      { code: "W01", name: "Lamb Chop", price: 48.0 },
      { code: "W02", name: "Sirloin Steak", price: 78.0 },
      { code: "W03", name: "Grilled Salmon", price: 54.0 },
      { code: "W04", name: "Mixed Grill", price: 48.0 },
      { code: "W05", name: "Chicken Chop", price: 42.0 },
      { code: "W06", name: "Grilled Chicken", price: 42.0 },
      { code: "W07", name: "Fish & Chips", price: 33.9 },
      { code: "W08", name: "French Fries", price: 12.0 },
    ],
  },
  {
    id: "ikan-bawal",
    title: "Ikan Bawal",
    section: "asian",
    subtitle: "Seasonal Dish Features",
    items: [
      { code: "B01", name: "Ikan Bawal Sweet & Sour", price: 18.8 },
      { code: "B02", name: "Ikan Bawal Soy Sauce", price: 18.8 },
      { code: "B03", name: "Ikan Bawal Penyet", price: 16.8 },
    ],
  },
  {
    id: "curry",
    title: "Brulun's Homemade Curry",
    section: "asian",
    subtitle: "Crafted with love by the boss owner",
    items: [
      { code: "C01", name: "Brulun Lamb Curry Rice", price: 15.9 },
      { code: "C02", name: "Brulun Chicken Curry Rice", price: 15.9 },
    ],
  },
  {
    id: "drinks-tea",
    title: "Tea",
    section: "drinks",
    items: [
      { code: "D01", name: "Teh", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D02", name: "Teh C", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D03", name: "Teh Halia", price: 4.5 },
      { code: "D04", name: "Teh Tarik", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D05", name: "Teh Madras", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D06", name: "Teh Lemon", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D07", name: "Teh Limau", price: 5.5 },
      { code: "D08", name: "Teh C Special", price: 6.5 },
      { code: "D09", name: "Chinese Teh", price: 1.0 },
    ],
  },
  {
    id: "drinks-coffee",
    title: "Coffee",
    section: "drinks",
    items: [
      { code: "D10", name: "Kopi", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D11", name: "Kopi C", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D12", name: "Kopi Madras", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D13", name: "CEO Coffee", price: 3.6, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D14", name: "Nescafe", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D15", name: "Nescafe Madras", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
    ],
  },
  {
    id: "drinks-classics",
    title: "Classics",
    section: "drinks",
    items: [
      { code: "D16", name: "Milo", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D17", name: "Neslo", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D18", name: "Nestum", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D19", name: "Susu", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D20", name: "Kitchai", price: 5.5 },
      { code: "D21", name: "Laici", price: 5.5 },
      { code: "D22", name: "Laici Lemon", price: 5.5 },
      { code: "D23", name: "Laici Bandung", price: 5.5 },
      { code: "D24", name: "Honey Lemon", price: 4.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D25", name: "Sour Plum", price: 6.0, variations: [{ label: "Hot" }, { label: "Cold" }] },
      { code: "D26", name: "Cincau Susu", price: 6.0 },
      { code: "D27", name: "Cincau Bandung", price: 7.0 },
      { code: "D28a", name: "Soft Drinks", price: 3.5 },
      { code: "D28b", name: "Mineral Water (s)", price: 1.5 },
      { code: "D29", name: "Plain Water", price: 0.5, variations: [{ label: "Hot" }, { label: "Cold" }] },
    ],
  },
  {
    id: "drinks-syrup",
    title: "Syrup",
    section: "drinks",
    items: [
      { code: "D30", name: "Sirap Limau", price: 4.0 },
      { code: "D31", name: "Sirap Bandung", price: 5.0 },
      { code: "D32", name: "Sirap Laici", price: 5.5 },
      { code: "D33", name: "Sirap", price: 7.0 },
    ],
  },
  {
    id: "drinks-juice",
    title: "Juice",
    section: "drinks",
    items: [
      { code: "D34", name: "Apple", price: 9.0 },
      { code: "D35", name: "Orange", price: 9.0 },
      { code: "D36", name: "Carrot", price: 9.0 },
      { code: "D37", name: "Watermelon", price: 9.0 },
    ],
  },
  {
    id: "drinks-dessert",
    title: "Dessert",
    section: "drinks",
    items: [
      { code: "D38", name: "ABC", price: 9.0 },
      { code: "D39", name: "Cendol", price: 9.0 },
    ],
  },
  {
    id: "addons",
    title: "Add Ons",
    section: "addons",
    subtitle: "The little extras",
    items: [
      { code: "A01", name: "Extra Chicken", price: 4.0 },
      { code: "A02", name: "Extra Beef", price: 4.0 },
      { code: "A03", name: "Extra Seafood", price: 4.0 },
      { code: "A04", name: "Rice", price: 3.9 },
      { code: "A05", name: "Sambal Ayam Penyet", price: 2.5 },
      { code: "A06", name: "Mayonaise", price: 2.5 },
      { code: "A07", name: "Coleslaw", price: 6.0 },
      { code: "A08", name: "Ayam Goreng Brulun", price: 14.5 },
      { code: "A09", name: "Cocktail", price: 7.5 },
      { code: "A10", name: "Boiled Egg", price: 3.0 },
      { code: "A11", name: "Fried Egg", price: 3.0 },
      { code: "A12", name: "Omelette", price: 3.5 },
      { code: "A13", name: "Half Cook Egg", price: 5.0 },
      { code: "A14", name: "Crispy Egg", price: 6.0 },
    ],
  },
];

export const operatingHours: { day: string; hours: string }[] = [
  { day: "Monday", hours: "11:00 — 22:00" },
  { day: "Tuesday", hours: "11:00 — 22:00" },
  { day: "Wednesday", hours: "11:00 — 22:00" },
  { day: "Thursday", hours: "11:00 — 22:00" },
  { day: "Friday", hours: "11:00 — 23:00" },
  { day: "Saturday", hours: "10:00 — 23:00" },
  { day: "Sunday", hours: "10:00 — 22:00" },
];
