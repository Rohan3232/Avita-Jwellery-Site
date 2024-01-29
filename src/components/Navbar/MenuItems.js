export const MenuItems = [
  {
    id: 0,
    title: 'Bangles',
    path: '/products/Bangles',
    types: [
      {
        "name": "Gold Bangles",
      },
      {
        "name": "Silver Bangles",
      },

    ],
    GoldBangles: [
      {
        "id": 1,
        "name": "Classic Gold Bangles",
        "design": "Traditional",
        "price": 35000.00,
        "discount": 10,
        "weight": 15.5,
        "purity": "22k Gold",
        "stones": ["Ruby", "Emerald"],
        "availability": true,
        "description": "Exquisite traditional gold bangles adorned with precious stones. Perfect for weddings and special occasions.",
        "images": "classic_gold_bangles_1.jpg"
      },
      {
        "id": 2,
        "name": "Elegant Gold Filigree Bangles",
        "design": "Filigree",
        "price": 60000.00,
        "discount": 12,
        "weight": 18.8,
        "purity": "24k Gold",
        "stones": null,
        "availability": true,
        "description": "Intricately designed gold filigree bangles for an elegant and timeless look.",
        "images": "elegant_gold_filigree_bangles_1.jpg"
      },
      {
        "id": 3,
        "name": "Diamond Encrusted Gold Bangles",
        "design": "Modern",
        "price": 90000.00,
        "discount": 15,
        "weight": 25.0,
        "purity": "18k Gold",
        "stones": ["Diamonds"],
        "availability": true,
        "description": "Modern and luxurious gold bangles encrusted with dazzling diamonds. A statement piece for special occasions.",
        "images": "diamond_encrusted_gold_bangles_1.jpg"
      },
      {
        "id": 4,
        "name": "Rose Gold Floral Bangles",
        "design": "Floral",
        "price": 48000.00,
        "discount": 10,
        "weight": 20.5,
        "purity": "18k Rose Gold",
        "stones": ["Pearls"],
        "availability": true,
        "description": "Graceful rose gold bangles with intricate floral patterns and lustrous pearls.",
        "images": "rose_gold_floral_bangles_1.jpg"
      },
      {
        "id": 5,
        "name": "Antique Gold Temple Bangles",
        "design": "Antique",
        "price": 55000.00,
        "discount": 8,
        "weight": 22.0,
        "purity": "22k Gold",
        "stones": ["Ruby", "Emerald"],
        "availability": true,
        "description": "Antique gold temple bangles with vibrant gemstones. Inspired by traditional temple jewelry.",
        "images": "antique_gold_temple_bangles_1.jpg"
      }
    ],
    SilverBangles: [
      {
        "id": 1,
        "name": "Bohemian Silver Cuff",
        "design": "Bohemian",
        "price": 120.00,
        "discount": 8,
        "weight": 14.7,
        "purity": "Sterling Silver",
        "stones": ["Turquoise"],
        "availability": true,
        "description": "Handcrafted silver cuff with bohemian design and turquoise accents. Unique and eye-catching.",
        "images": "bohemian_silver_cuff_1.jpg"
      },
      {
        "id": 2,
        "name": "Minimalist Silver Bangles Set",
        "design": "Minimalist",
        "price": 8000.00,
        "discount": 5,
        "weight": 10.0,
        "purity": "Sterling Silver",
        "stones": null,
        "availability": true,
        "description": "Simple and elegant set of minimalist silver bangles. Versatile for everyday wear.",
        "images": "minimalist_silver_bangles_1.jpg"
      },
      {
        "id": 3,
        "name": "Turquoise Inlay Silver Bangles",
        "design": "Inlay",
        "price": 15000.00,
        "discount": 10,
        "weight": 12.5,
        "purity": "925 Silver",
        "stones": ["Turquoise"],
        "availability": true,
        "description": "Silver bangles with intricate turquoise inlay design. Perfect for a boho-chic look.",
        "images": "turquoise_inlay_silver_bangles_1.jpg"
      },
      {
        "id": 4,
        "name": "Oxidized Silver Floral Bangles",
        "design": "Floral",
        "price": 6000.00,
        "discount": 5,
        "weight": 8.8,
        "purity": "Oxidized Silver",
        "stones": null,
        "availability": true,
        "description": "Delicate floral-patterned oxidized silver bangles for a vintage-inspired look.",
        "images": "oxidized_silver_floral_bangles_1.jpg"
      },
      {
        "id": 5,
        "name": "Braided Silver Bangle",
        "design": "Braided",
        "price": 4500.00,
        "discount": 0,
        "weight": 7.2,
        "purity": "Sterling Silver",
        "stones": null,
        "availability": true,
        "description": "Chic braided silver bangle for a modern and stylish appearance.",
        "images": "braided_silver_bangle_1.jpg"
      }
    ]
  },
  {
    id: 1,
    title: 'Rings',
    types: [{
      "name": "Platinum Rings"
      
    },{
      "name": "Gold Rings"
    }],
    PlatinumRings: [
      {
        "id": 1,
        "name": "Classic Platinum Ring",
        "style": "Classic",
        "metal": "Platinum",
        "gemstone": "None",
        "price": 1500.00,
        "description": "A timeless platinum ring with a simple and classic design.",
        "sizes": ["5", "6", "7", "8", "9"],
        "stock": 50,
        "discount": 10,
        "customer_reviews": [
          {
            "user": "happy_customer123",
            "rating": 5,
            "comment": "Absolutely love the elegant design!"
          },
          {
            "user": "satisfied_buyer456",
            "rating": 4,
            "comment": "Great quality, but a bit pricey."
          }
        ]
      },
      {
        "id": 2,
        "name": "Platinum Engagement Ring",
        "style": "Engagement",
        "metal": "Platinum",
        "gemstone": "Diamond",
        "price": 3000.00,
        "description": "An elegant platinum engagement ring with a stunning diamond centerpiece.",
        "sizes": ["5.5", "6.5", "7.5", "8.5"],
        "stock": 30,
        "customer_reviews": [
          {
            "user": "shiny_ring_lover",
            "rating": 5,
            "comment": "Beautiful ring! My fiancée said yes!"
          },
          {
            "user": "diamond_fanatic",
            "rating": 4,
            "comment": "The diamond sparkles brilliantly."
          }
        ]
      },
      {
        "id": 3,
        "name": "Modern Platinum Band",
        "style": "Modern",
        "metal": "Platinum",
        "gemstone": "None",
        "price": 2000.00,
        "description": "A sleek and modern platinum band, perfect for everyday wear.",
        "sizes": ["6", "7", "8", "9", "10"],
        "stock": 20,
        "customer_reviews": [
          {
            "user": "fashion_forward",
            "rating": 5,
            "comment": "Love the contemporary design!"
          },
          {
            "user": "minimalist_at_heart",
            "rating": 3,
            "comment": "Nice, but a bit too simple for my taste."
          }
        ]
      }
      // Add more rings as needed
    ],
    GoldRings: [
      {
        "id": 1,
        "name": "Elegant Diamond Ring",
        "design": "Modern",
        "price": 5500.00,
        "discount": 15,
        "weight": 3.2,
        "metal": "White Gold",
        "gemstone": "Diamond",
        "ring_size": ["6", "7", "8", "9"],
        "availability": true,
        "description": "An elegant modern diamond ring crafted in white gold. Perfect for engagements and special occasions.",
        "images": "elegant_diamond_ring_1.jpg"
      }, {
        "id": 2,
        "name": "Sapphire Halo Engagement Ring",
        "design": "Vintage",
        "price": 4800.00,
        "discount": 10,
        "weight": 2.8,
        "metal": "Yellow Gold",
        "gemstone": "Sapphire",
        "ring_size": ["5", "6", "7", "8"],
        "availability": true,
        "description": "A vintage-inspired engagement ring featuring a beautiful sapphire surrounded by a halo of diamonds.",
        "images": "sapphire_halo_ring_1.jpg"
      },
      
      {
        "id": 4,
        "name": "Pearl Elegance Ring",
        "design": "Classic",
        "price": 1800.00,
        "discount": 8,
        "weight": 2.5,
        "metal": "Yellow Gold",
        "gemstone": "Pearl",
        "ring_size": ["5", "6", "7"],
        "availability": true,
        "description": "A classic yellow gold ring featuring an elegant pearl. Ideal for a touch of sophistication.",
        "images": "pearl_elegance_ring_1.jpg"
      }, {
        "id": 5,
        "name": "Emerald Cut Diamond Ring",
        "design": "Modern",
        "price": 6500.00,
        "discount": 12,
        "weight": 3.0,
        "metal": "Platinum",
        "gemstone": "Diamond",
        "ring_size": ["6", "7", "8", "9"],
        "availability": true,
        "description": "A modern platinum ring featuring a stunning emerald-cut diamond. Sleek and sophisticated.",
        "images": "emerald_cut_diamond_ring_1.jpg"
      }
    ]
    ,
    path: '/products/Rings'
  },

  {
    id: 2,
    title: 'Bracelets',
    path: '/products/Bracelets'
  },
  ,
  {
    id: 3,
    title: 'Pendants',
    path: '/products/Pendants'
  },
  {
    id: 4,
    title: 'Solitaires',
    path: '/products/Solitaires'
  },
  {
    id: 5,
    title: 'Earrings',
    path: '/products/Earrings'
  },

];

export const allJwellery = [

  {
    title: 'Bangles',
    path: '/products/Bangles',
    cName: 'dropdown-link'
  },
  {
    title: 'Rings',
    path: '/products/Rings',
    cName: 'dropdown-link'
  },
  {
    title: 'Earrings',
    path: '/products/Earrings',
    cName: 'dropdown-link'
  },
  {
    title: 'Pendants',
    path: '/products/Pendants',
    cName: 'dropdown-link'
  },

  {
    title: 'Solitaires',
    path: '/products/Solitaires',
    cName: 'dropdown-link'
  }
];
