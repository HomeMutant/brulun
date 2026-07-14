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
    id: "addons",
    title: "Add Ons",
    section: "addons",
    subtitle: "The little extras",
    items: [
      { code: "A01", name: "Steamed Rice", price: 3.0, image: img("photo-1516684732162-798a0062be99") },
      { code: "A02", name: "Fried Egg", price: 3.5, image: img("photo-1482049016688-2d3e1b311543") },
      { code: "A03", name: "Sambal Belacan", price: 2.5, image: img("photo-1604908176997-125f25cc6f3d") },
      { code: "A04", name: "Keropok Ikan", price: 4.0, image: img("photo-1541544181051-e46607bc22a4") },
    ],
  },
  {
    id: "drinks-tea",
    title: "Tea",
    section: "drinks",
    subtitle: "Drinks · Leaf & bloom",
    items: [
      { code: "T01", name: "Teh O Ais Limau", price: 6.0, image: img("photo-1556679343-c7306c1976bc") },
      { code: "T02", name: "Teh Tarik", price: 5.5, image: img("photo-1517701550927-30cf4ba1dba5"), variations: [{ label: "Hot", tone: "earth" }, { label: "Ice", tone: "navy" }] },
      { code: "T03", name: "Chrysanthemum", price: 7.0, image: img("photo-1594631252845-29fc4cc8cde9") },
    ],
  },
  {
    id: "drinks-coffee",
    title: "Coffee",
    section: "drinks",
    items: [
      { code: "C01", name: "Kopi O", price: 4.5, image: img("photo-1509042239860-f550ce710b93"), variations: [{ label: "Hot" }, { label: "Ice" }] },
      { code: "C02", name: "Latte", price: 10.0, image: img("photo-1517701550927-30cf4ba1dba5") },
      { code: "C03", name: "Espresso", price: 8.0, image: img("photo-1510707577719-ae7c14805e3a") },
    ],
  },
  {
    id: "drinks-classics",
    title: "Classics",
    section: "drinks",
    items: [
      { code: "CL01", name: "Milo Dinosaur", price: 9.0, image: img("photo-1541696490-8744a5dc0228") },
      { code: "CL02", name: "Bandung", price: 6.0, image: img("photo-1544145945-f90425340c7e") },
    ],
  },
  {
    id: "drinks-syrup",
    title: "Syrup",
    section: "drinks",
    items: [
      { code: "S01", name: "Rose Lychee", price: 8.0, image: img("photo-1437418747212-8d9709afab22") },
      { code: "S02", name: "Blue Pea Lemon", price: 8.5, image: img("photo-1544145945-f90425340c7e") },
    ],
  },
  {
    id: "drinks-juice",
    title: "Juice",
    section: "drinks",
    items: [
      { code: "J01", name: "Fresh Watermelon", price: 9.0, image: img("photo-1546173159-315724a31696") },
      { code: "J02", name: "Mango Lassi", price: 10.0, image: img("photo-1553530666-ba11a7da3888") },
    ],
  },
  {
    id: "drinks-dessert",
    title: "Dessert",
    section: "drinks",
    items: [
      { code: "D01", name: "Cendol Brulun", price: 9.5, image: img("photo-1488900128323-21503983a07e") },
      { code: "D02", name: "Sago Gula Melaka", price: 8.5, image: img("photo-1488477181946-6428a0291777") },
    ],
  },
  {
    id: "noodle",
    title: "Noodle",
    section: "asian",
    subtitle: "House pulls",
    items: [
      { code: "N01", name: "Mee Goreng Mamak", price: 12.0, image: img("photo-1552611052-33e04de081de"), variations: [{ label: "Chicken", tone: "earth" }, { label: "Seafood", tone: "navy" }] },
      { code: "N02", name: "Kolo Mee", price: 13.0, image: img("photo-1585032226651-759b368d7246") },
      { code: "N03", name: "Laksa Sarawak", price: 15.0, image: img("photo-1569718212165-3a8278d5f624"), variations: [{ label: "Hot", tone: "ochre" }] },
    ],
  },
  {
    id: "rice-special",
    title: "Rice — Chef's Special",
    section: "asian",
    subtitle: "Rice",
    items: [
      { code: "R01", name: "Nasi Ayam Brulun", price: 16.0, image: img("photo-1512058564366-18510be2db19"), variations: [{ label: "Roast", tone: "earth" }, { label: "Steamed", tone: "green" }] },
      { code: "R02", name: "Nasi Lemak Rendang", price: 18.0, image: img("photo-1512058564366-18510be2db19"), variations: [{ label: "Beef", tone: "earth" }, { label: "Chicken", tone: "ochre" }] },
    ],
  },
  {
    id: "rice-fried",
    title: "Rice — Fried Rice",
    section: "asian",
    items: [
      { code: "F01", name: "Nasi Goreng Kampung", price: 13.0, image: img("photo-1603133872878-684f208fb84b") },
      { code: "F02", name: "Nasi Goreng Paprik", price: 15.0, image: img("photo-1603133872878-684f208fb84b"), variations: [{ label: "Hot", tone: "ochre" }] },
    ],
  },
  {
    id: "ikan-bawal",
    title: "Ikan Bawal",
    section: "asian",
    subtitle: "Pomfret, our way",
    items: [
      { code: "IB01", name: "Ikan Bawal Bakar", price: 32.0, image: img("photo-1467003909585-2f8a72700288") },
      { code: "IB02", name: "Ikan Bawal Masak Asam", price: 34.0, image: img("photo-1519708227418-c8fd9a32b7a2") },
    ],
  },
  {
    id: "curry",
    title: "Brulun's Homemade Curry",
    section: "asian",
    items: [
      { code: "CU01", name: "Kari Kepala Ikan", price: 38.0, image: img("photo-1455619452474-d2be8b1e70cd") },
      { code: "CU02", name: "Kari Ayam Kampung", price: 22.0, image: img("photo-1604908176997-125f25cc6f3d"), variations: [{ label: "Chicken" }] },
    ],
  },
  {
    id: "soup-soup",
    title: "Soup",
    section: "asian",
    subtitle: "Broths & bowls",
    items: [
      { code: "SO01", name: "Sup Tulang", price: 18.0, image: img("photo-1547592180-85f173990554") },
    ],
  },
  {
    id: "soup-soto",
    title: "Soto",
    section: "asian",
    items: [
      { code: "SO02", name: "Soto Ayam", price: 14.0, image: img("photo-1547592166-23ac45744acd") },
    ],
  },
  {
    id: "soup-tomyam",
    title: "Tom Yam",
    section: "asian",
    items: [
      { code: "SO03", name: "Tom Yam Campur", price: 20.0, image: img("photo-1569058242253-92a9c755a0ec"), variations: [{ label: "Seafood", tone: "navy" }, { label: "Chicken" }, { label: "Hot", tone: "ochre" }] },
    ],
  },
  {
    id: "western-best",
    title: "Western — Best Seller",
    section: "western",
    subtitle: "Western",
    items: [
      { code: "W01", name: "Chicken Chop Brulun", price: 24.0, image: img("photo-1567620905732-2d1ec7ab7445"), variations: [{ label: "Black Pepper" }, { label: "Mushroom" }] },
      { code: "W02", name: "Grilled Lamb", price: 42.0, image: img("photo-1544025162-d76694265947") },
    ],
  },
  {
    id: "western-western",
    title: "Western",
    section: "western",
    items: [
      { code: "W03", name: "Ribeye Steak", price: 58.0, image: img("photo-1546833999-b9f581a1996d"), variations: [{ label: "Medium" }, { label: "Well Done" }] },
      { code: "W04", name: "Fish & Chips", price: 22.0, image: img("photo-1580217593608-61931cefc821") },
      { code: "W05", name: "Aglio Olio", price: 18.0, image: img("photo-1473093226795-af9932fe5856"), variations: [{ label: "Chicken" }, { label: "Prawn", tone: "navy" }] },
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
