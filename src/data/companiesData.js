const companies = [
  {
    id: 1,
    name: "HDFC Securities Ltd.",
    yearlyRevenue: [
      { year: 2021, revenue: 1765.0 },
      { year: 2022, revenue: 1975.57 },
      { year: 2023, revenue: 1874.01 },
    ],
    debt: 1.79,
    currentRatio: 0,
    cashAndCashEquivalents: [
      { year: 2021, amount: 598.54 },
      { year: 2021, amount: 647.0 },
      { year: 2022, amount: 726.0 },
    ],
    assetsAndLiabilities: {
      currentAsset: 8010.0,
      nonCurrentAsset: 258.14,
      currentliabilities: 6329.0,
      noncurrentliabilities: 141.4,
    },
  },
  {
    id: 2,
    name: "Anhheuser-Bush Inbev India",
    yearlyRevenue: [
      { year: 2021, revenue: 2845.0 },
      { year: 2022, revenue: 3354.5 },
      { year: 2023, revenue: 4356.0 },
    ],
    debt: 1.04,
    currentRatio: 1.47,
    cashAndCashEquivalents: [
      { year: 2020, amount: 98.9 },
      { year: 2021, amount: 120.54 },
      { year: 2021, amount: 203.14 },
      { year: 2022, amount: 384.12 },
    ],
    assetsAndLiabilities: {
      currentAsset: 1137.27,
      nonCurrentAsset: 15076.0,
      currentliabilities: 1714.7,
      noncurrentliabilities: 841.7,
    },
  },
  {
    id: 3,
    name: "Kurlon Enterprise Ltd",
    yearlyRevenue: [
      { year: 2021, revenue: 758.82 },
      { year: 2022, revenue: 795.15 },
      { year: 2023, revenue: 821.0 },
    ],
    debt: 0.04,
    currentRatio: 2.36,
    cashAndCashEquivalents: [
      { year: 2020, amount: 632.0 },
      { year: 2021, amount: 434.0 },
      { year: 2022, amount: 204.0 },
      { year: 2023, amount: 284.0 },
    ],
    assetsAndLiabilities: {
      currentAsset: 385.1,
      nonCurrentAsset: 541.8,
      currentliabilities: 171.66,
      noncurrentliabilities: 135.18,
    },
  },
  {
    id: 4,
    name: "Philips India Ltd.",
    yearlyRevenue: [
      { year: 2021, revenue: 4842.7 },
      { year: 2022, revenue: 5181.4 },
      { year: 2023, revenue: 5672.3 },
    ],
    debt: 1.43,
    currentRatio: 2.05,
    cashAndCashEquivalents: [
      { year: 2020, amount: 465.0 },
      { year: 2021, amount: 231.0 },
      { year: 2022, amount: 367.0 },
      { year: 2023, amount: 240.0 },
    ],
    assetsAndLiabilities: {
      currentAsset: 3170.3,
      nonCurrentAsset: 1134.9,
      currentliabilities: 1540.2,
      noncurrentliabilities: 487.5,
    },
  },
  {
    id: 5,
    name: "Oravel Stays Ltd.",
    yearlyRevenue: [
      { year: 2021, revenue: 3948.2 },
      { year: 2022, revenue: 4781.0 },
      { year: 2023, revenue: 5463.9 },
    ],
    debt: 1.06,
    currentRatio: 1.74,
    cashAndCashEquivalents: [
      { year: 2020, amount: 127.0 },
      { year: 2021, amount: 228.0 },
      { year: 2022, amount: 143.0 },
      { year: 2023, amount: 346.0 },
    ],
    assetsAndLiabilities: {
      currentAsset: 2294.44,
      nonCurrentAsset: 5638.0,
      currentliabilities: 1919.51,
      noncurrentliabilities: 5430.35,
    },
  },
  {
    id: 6,
    name: "Hexaware Technologies Ltd.",
    yearlyRevenue: [
      { year: 2021, revenue: 6262.08 },
      { year: 2022, revenue: 7177.65 },
      { year: 2023, revenue: 7654.65 },
    ],
    debt: 1.05,
    currentRatio: 2.02,
    cashAndCashEquivalents: [
      { year: 2020, amount: 410.15 },
      { year: 2021, amount: 514.74 },
      { year: 2022, amount: 405.06 },
      { year: 2023, amount: 231.64 },
    ],
    assetsAndLiabilities: {
      currentAsset: 2947.76,
      nonCurrentAsset: 2726.15,
      currentliabilities: 1453.95,
      noncurrentliabilities: 431.85,
    },
  },
  {
    id: 7,
    name: "Hero Fincorp Ltd.",
    yearlyRevenue: [
      { year: 2021, revenue: 4352.1 },
      { year: 2022, revenue: 4738.66 },
      { year: 2023, revenue: 6401.6 },
    ],
    debt: 6.36,
    currentRatio: 1.12,
    cashAndCashEquivalents: [
      { year: 2020, amount: 432.0 },
      { year: 2021, amount: 534.0 },
      { year: 2022, amount: 601.0 },
      { year: 2023, amount: 750.01 },
    ],
    assetsAndLiabilities: {
      currentAsset: 42716.87,
      nonCurrentAsset: 734.35,
      currentliabilities: 38072.23,
      noncurrentliabilities: 131.16,
    },
  },
  {
    id: 8,
    name: "Bundl Technologies Pvt Ltd.",
    yearlyRevenue: [
      { year: 2021, revenue: 2078.0 },
      { year: 2022, revenue: 3557.1 },
      { year: 2023, revenue: 4563.0 },
    ],
    debt: 1.0,
    currentRatio: 1.5,
    cashAndCashEquivalents: [
      { year: 2020, amount: 109.0 },
      { year: 2021, amount: 245.0 },
      { year: 2022, amount: 451.0 },
    ],
    assetsAndLiabilities: {
      currentAsset: 11025.0,
      nonCurrentAsset: 3180.7,
      currentliabilities: 1322.1,
      noncurrentliabilities: 284.1,
    },
  },
  {
    id: 9,
    name: "Roppen Transportation Services Pvt. Ltd.",
    yearlyRevenue: [
      { year: 2021, revenue: 1765.0 },
      { year: 2022, revenue: 1975.57 },
      { year: 2023, revenue: 1874.01 },
    ],
    debt: 0.13,
    currentRatio: 1.24,
    cashAndCashEquivalents: [
      { year: 2020, amount: 238.0 },
      { year: 2021, amount: 376.0 },
      { year: 2022, amount: 453.0 },
      { year: 2023, amount: 565.0 },
    ],
    assetsAndLiabilities: {
      currentAsset: 152.12,
      nonCurrentAsset: 12.79,
      currentliabilities: 122.29,
      noncurrentliabilities: 9.21,
    },
  },
  {
    id: 10,
    name: "Imagine Marketing Ltd.",
    yearlyRevenue: [
      { year: 2021, revenue: 1313.83 },
      { year: 2022, revenue: 2872.91 },
      { year: 2023, revenue: 3214.76 },
    ],
    debt: 0.12,
    currentRatio: 1.23,
    cashAndCashEquivalents: [
      { year: 2020, amount: 120.0 },
      { year: 2021, amount: 132.0 },
      { year: 2022, amount: 147.0 },
      { year: 2023, amount: 158.0 },
    ],
    assetsAndLiabilities: {
      currentAsset: 1678.1,
      nonCurrentAsset: 1126.14,
      currentliabilities: 1126.14,
      noncurrentliabilities: 557.11,
    },
  },
];

export default companies;