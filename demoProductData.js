// =========================================================================
// 📦 आपका प्रोडक्ट डेटाबेस (नया माल दुकान में चढ़ाने के लिए)
// =========================================================================
const PRODUCTS_DATA = [
  // 📝 उदाहरण 1: Woofer Speaker के अंदर 12 inch का प्रोडक्ट
  {
    id: "Woofer_6p_72",
    mainCategory: "Woofer Speaker", // होम पेज के बॉक्स का नाम बिल्कुल सेम होना चाहिए
    name: "6 inch 72mm Paper Woofer",
    price: 400,
    images: ["Imgs/1.JPG", "Imgs/2.jpg", "Imgs/3.jpg", "Imgs/4.jpg"],
    watt: "20w",
    ohm: "4 Ohm",
    coneType: "Paper",
    magnet: "72mm",
    description: "Best For Home Audio, Tower Speakers (Mid-range), Car Audio.",
  },

  {
    id: "Woofer_6c_72", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "6 inch 72mm cloth Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 450, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "20w",
    ohm: "4 ohm",
    coneType: "Cloth",
    magnet: "72mm",
    description: "Best For Home Audio, Tower Speakers (Mid-range), Car Audio.",
  }, // 👈 आख़िरी ऑब्जेक्ट के बाद कोमा नहीं लगाएंगे तो भी चलेगा

  {
    id: "Woofer_6p_90", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "6 inch 90mm paper Woofe", // 👈 नए प्रोडक्ट का नाम
    price: 500, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "30W",
    ohm: "4 ohm",
    coneType: "Paper",
    magnet: "99mm",
    description: "Best For Home Audio, Tower Speakers (Mid-range), Car Audio.",
  },

  {
    id: "Woofer_6c_90", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "6 inch 90mm cloth Woofe", // 👈 नए प्रोडक्ट का नाम
    price: 550, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "30W",
    ohm: "4 ohm",
    coneType: "Paper",
    magnet: "99mm",
    description: "Best For Home Audio, Tower Speakers (Mid-range), Car Audio.",
  },

  {
    id: "Woofer_8j_90", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "8 inch 90mm jupiter  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 800, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "50W",
    ohm: "4 ohm",
    coneType: "Jupiter",
    magnet: "90mm",
    description: "Active Monitors, 2.1 Studio Systems, DIY Boomboxes.",
  },

  {
    id: "Woofer_8i_90", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "8 inch 90mm imported Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 850, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "50W ",
    ohm: "4 ohm",
    coneType: "Imported",
    magnet: "90mm",
    description: "Active Monitors, 2.1 Studio Systems, DIY Boomboxes.",
  },
  {
    id: "Woofer_8s_90", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "8 inch 90mm shiva  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 900, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "50W ",
    ohm: "4 ohm",
    coneType: "Shiva",
    magnet: "90mm",
    description: "Active Monitors, 2.1 Studio Systems, DIY Boomboxes.",
  },
  {
    id: "Woofer_8j_120", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "8 inch 120mm Jupiter  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 1000, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "80W",
    ohm: "4 ohm",
    coneType: "Jupiter",
    magnet: "120mm",
    description: "Active Monitors, 2.1 Studio Systems, DIY Boomboxes.",
  },
  {
    id: "Woofer_8i_120", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "8 inch 120mm imported  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 1100, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "80W ",
    ohm: "4 ohm",
    coneType: "Imported",
    magnet: "120mm",
    description: "Active Monitors, 2.1 Studio Systems, DIY Boomboxes.",
  },
  {
    id: "Woofer_8s_120", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "8 inch 120mm Shiva  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 2600, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "150W RMS",
    ohm: "4 ohm",
    coneType: "Foam Edge Cone",
    magnet: "100mm",
    description: "Active Monitors, 2.1 Studio Systems, DIY Boomboxes.",
  },

  //Woofer_10j_120
  {
    id: "Woofer_10j_120", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "10 inch 120mm jupiter  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 1300, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "100W",
    ohm: "4 ohm",
    coneType: "Jupiter",
    magnet: "120mm",
    description: "Party Speakers, Car Subwoofers, Medium DJ Monitors.",
  },
  {
    id: "Woofer_10i_120", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "10 inch 120mm imported  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 1400, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "100W ",
    ohm: "4 ohm",
    coneType: "Imported",
    magnet: "120mm",
    description: "Party Speakers, Car Subwoofers, Medium DJ Monitors.",
  },
  {
    id: "Woofer_10s_120", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "10 inch 120mm shiva  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 1500, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "100W ",
    ohm: "4 ohm",
    coneType: "Shiva",
    magnet: "120mm",
    description: "Party Speakers, Car Subwoofers, Medium DJ Monitors.",
  },
  {
    id: "Woofer_10j_134", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "10 inch 134mm Jupiter  woffer", // 👈 नए प्रोडक्ट का नाम
    price: 1600, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "140W",
    ohm: "4 ohm",
    coneType: "Jupiter",
    magnet: "134mm",
    description: "Party Speakers, Car Subwoofers, Medium DJ Monitors.",
  },
  {
    id: "Woofer_10i_134", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "10 inch 134mm Imported  woffer", // 👈 नए प्रोडक्ट का नाम
    price: 1700, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "140W",
    ohm: "4 ohm",
    coneType: "Imported",
    magnet: "134mm",
    description: "Party Speakers, Car Subwoofers, Medium DJ Monitors.",
  },
  {
    id: "Woofer_10s_134", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "10 inch 134mm Shiva  woffer", // 👈 नए प्रोडक्ट का नाम
    price: 1800, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "140W",
    ohm: "4 ohm",
    coneType: "Shiva",
    magnet: "134mm",
    description: "Party Speakers, Car Subwoofers, Medium DJ Monitors.",
  },
  {
    id: "Woofer_10mb_190", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "10 inch 190mm Mid Bass  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 7500, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "250W",
    ohm: "4 ohm",
    coneType: "Mid Bass",
    magnet: "190mm",
    description: "Party Speakers, Car Subwoofers, Medium DJ Monitors.",
  },

  //Woofer_12j_120
  {
    id: "Woofer_12j_120", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "12 inch 120mm jupiter  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 1850, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "120W ",
    ohm: "4 ohm",
    coneType: "Jupiter",
    magnet: "120mm",
    description: "DJ Top Cabinets, Stage Monitors, High-End Home Audio.",
  },
  {
    id: "Woofer_12s_120", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "12 inch 120mm shiva  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 1900, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "120W",
    ohm: "4 ohm",
    coneType: "Shiva",
    magnet: "120mm",
    description: "DJ Top Cabinets, Stage Monitors, High-End Home Audio.",
  },
  {
    id: "Woofer_12j_134", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "12 inch 134mm jupiter  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 2000, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "160W",
    ohm: "4 ohm",
    coneType: "Jupiter",
    magnet: "134mm",
    description: "DJ Top Cabinets, Stage Monitors, High-End Home Audio.",
  },
  {
    id: "Woofer_12s_134", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "12 inch 134mm shiva  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 2100, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "160W",
    ohm: "4 ohm",
    coneType: "Shiva",
    magnet: "134mm",
    description: "DJ Top Cabinets, Stage Monitors, High-End Home Audio.",
  },
  {
    id: "Woofer_12j_155", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "12 inch 155mm jupiter  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 2200, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "200W",
    ohm: "4 ohm",
    coneType: "Jupiter",
    magnet: "155mm",
    description: "DJ Top Cabinets, Stage Monitors, High-End Home Audio.",
  },
  {
    id: "Woofer_12s_155", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "12 inch 155mm shiva  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 2300, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "220W",
    ohm: "4 ohm",
    coneType: "Shiva",
    magnet: "155mm",
    description: "DJ Top Cabinets, Stage Monitors, High-End Home Audio.",
  },
  {
    id: "Woofer_12mb_185", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "12 inch 155mm mid bass  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 2500, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "250W",
    ohm: "4 ohm",
    coneType: "Mid Bass",
    magnet: "185mm",
    description: "DJ Top Cabinets, Stage Monitors, High-End Home Audio.",
  },

  //Woofer_15mb_185
  {
    id: "Woofer_15mb_185", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "15 inch 185mm mid bass  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 4500, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "300W",
    ohm: "4 ohm",
    coneType: "Mid Bass",
    magnet: "185mm",
    description: "Outdoor DJ Events, Large Venues, Professional PA Systems.",
  },
  {
    id: "Woofer_15mb_190", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "15 inch 190mm mid bass  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 5600, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "350W",
    ohm: "4 ohm",
    coneType: "Mid Bass",
    magnet: "190mm",
    description: "Outdoor DJ Events, Large Venues, Professional PA Systems.",
  },
  {
    id: "Woofer_15mb_220", // 👈 हर प्रोडक्ट की ID अलग होनी चाहिए (जैसे 1002)
    mainCategory: "Woofer Speaker", // 👈 यह बिल्कुल सेम रहेगा ताकि इसी कैटेगरी में दिखे
    name: "15 inch 220mm mid bass  Woofer", // 👈 नए प्रोडक्ट का नाम
    price: 6000, // 👈 नए प्रोडक्ट की कीमत
    images: ["Music system imgs/speakers/woofer_10.jpg"], // 👈 नई फोटो का पाथ
    watt: "400W",
    ohm: "4 Ohm",
    coneType: "Mid Bass",
    magnet: "220mm",
    description: "Outdoor DJ Events, Large Venues, Professional PA Systems.",
  },

  // First End**********************************************************************

  //*************************************************************
  // 📝 उदाहरण 2: Sub-Woofer Speaker के अंदर 15 inch का प्रोडक्ट
  //*************************************************************
  {
    id: "spk_sub_1501",
    mainCategory: "Sub-Woofer Speaker",
    name: "6 Inch Sub-Woofer",
    price: 3500,
    images: ["Music system imgs/speakers/sub_15.jpg"],
    watt: "500W RMS",
    ohm: "4",
    coneType: "Foam Edge Heavy Cone",
    magnet: "180mm Double",
    description: "Commercial grade sub-woofer for car or DJ bass setups.",
  },

  {
    id: "spk_sub_01",
    mainCategory: "Sub-Woofer Speaker",
    name: "8 Inch Sub-Woofer",
    price: 3500,
    images: ["Music system imgs/speakers/sub_15.jpg"],
    watt: "500W RMS",
    ohm: "4",
    coneType: "Foam Edge Heavy Cone",
    magnet: "180mm Double",
    description: "Commercial grade sub-woofer for car or DJ bass setups.",
  },

  {
    id: "spk_sub_1502",
    mainCategory: "Sub-Woofer Speaker",
    name: "10 Inch Sub-Woofer",
    price: 3500,
    images: ["Music system imgs/speakers/sub_15.jpg"],
    watt: "500W RMS",
    ohm: "4",
    coneType: "Foam Edge Heavy Cone",
    magnet: "180mm Double",
    description: "Commercial grade sub-woofer for car or DJ bass setups.",
  },
  // ➕ नया प्रोडक्ट जोड़ने के लिए बस ऊपर वाले ब्लॉक को नीचे कॉपी करें, कोमा (,) लगाएं और डिटेल्स बदल दें!
  {
    id: "spk_sub_1502",
    mainCategory: "Sub-Woofer Speaker",
    name: "12 Inch Sub-Woofer",
    price: 3500,
    images: ["Music system imgs/speakers/sub_15.jpg"],
    watt: "500W RMS",
    ohm: "4",
    coneType: "Foam Edge Heavy Cone",
    magnet: "180mm Double",
    description: "Commercial grade sub-woofer for car or DJ bass setups.",
  },
  {
    id: "spk_sub_1502",
    mainCategory: "Sub-Woofer Speaker",
    name: "15 Inch Sub-Woofer",
    price: 3500,
    images: ["Music system imgs/speakers/sub_15.jpg"],
    watt: "500W RMS",
    ohm: "4",
    coneType: "Foam Edge Heavy Cone",
    magnet: "180mm Double",
    description: "Commercial grade sub-woofer for car or DJ bass setups.",
  },

  //*************************************************************
  // 📝 उदाहरण 3: Mid Speaker के अंदर 15 inch का प्रोडक्ट
  //*************************************************************
  {
    id: "spk_sub_1502",
    mainCategory: "Mid Speaker",
    name: "3 Inch Speaker",
    price: 3500,
    images: ["Music system imgs/speakers/sub_15.jpg"],
    watt: "500W RMS",
    ohm: "4",
    coneType: "Foam Edge Heavy Cone",
    magnet: "180mm Double",
    description: "Commercial grade sub-woofer for car or DJ bass setups.",
  },
  {
    id: "spk_sub_1502",
    mainCategory: "Mid Speaker",
    name: "4 Inch Speaker 72mm Speaker",
    price: 3500,
    images: ["Music system imgs/speakers/sub_15.jpg"],
    watt: "500W RMS",
    ohm: "4",
    coneType: "Foam Edge Heavy Cone",
    magnet: "180mm Double",
    description: "Commercial grade sub-woofer for car or DJ bass setups.",
  },
  {
    id: "spk_sub_1502",
    mainCategory: "Mid Speaker",
    name: "6 Inch Speaker 72mm Speaker",
    price: 3500,
    images: ["Music system imgs/speakers/sub_15.jpg"],
    watt: "500W RMS",
    ohm: "4",
    coneType: "Foam Edge Heavy Cone",
    magnet: "180mm Double",
    description: "Commercial grade sub-woofer for car or DJ bass setups.",
  },
  {
    id: "spk_sub_1502",
    mainCategory: "Mid Speaker",
    name: "6 Inch Speaker 90mm Speaker",
    price: 3500,
    images: ["Music system imgs/speakers/sub_15.jpg"],
    watt: "500W RMS",
    ohm: "4",
    coneType: "Foam Edge Heavy Cone",
    magnet: "180mm Double",
    description: "Commercial grade sub-woofer for car or DJ bass setups.",
  },
  {
    id: "spk_sub_1502",
    mainCategory: "Mid Speaker",
    name: "8 Inch Speaker 90mm Speaker",
    price: 3500,
    images: ["Music system imgs/speakers/sub_15.jpg"],
    watt: "500W RMS",
    ohm: "4",
    coneType: "Foam Edge Heavy Cone",
    magnet: "180mm Double",
    description: "Commercial grade sub-woofer for car or DJ bass setups.",
  },
];
