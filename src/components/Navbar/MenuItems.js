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
        "images": "bohemian_silver_cuff.jpg"
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
        "images": "classic_platinum_ring.jpg",
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
        "images": "platinum_engagement_ring.jpg",
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
        "images": "Modern_Platinum_Band.jpg",
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
        "images": "elegant_diamond_ring.jpg"
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
        "images": "sapphire_halo_ring.jpg"
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
        "images": "pearl_elegance_ring.jpg"
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
        "images": "emerald_cut_diamond_ring.jpeg"
      }
    ]
    ,
    path: '/products/Rings'
  },

  {
    id: 2,
    title: 'Bracelets',
    path: '/products/Bracelets',
    types: [{
      "name": "Bracelets"
      
    }],
      "Bracelets": [
        {
          "id": 1,
          "name": "Silver Chain Bracelet",
          "material": "Silver",
          "style": "Chain",
          "price": 100.00,
          "availability": true,
          "description": "A simple and elegant silver chain bracelet suitable for everyday wear.",
          "images":"silver_chain_bracelet.jpg",
          "subtypes": ["Figaro Chain", "Box Chain", "Cable Chain"]
        },
        {
          "id": 2,
          "name": "Gemstone Charm Bracelet",
          "material": "Gold",
          "style": "Charm",
          "price": 250.00,
          "availability": true,
          "description": "A gold bracelet adorned with various gemstone charms, adding a touch of color and sophistication.",
          "images":"Gemstone_Charm_Bracelet.jpg",
          "subtypes": ["Diamond Charms", "Birthstone Charms", "Engraved Charms"]
        },
        {
          "id": 3,
          "name": "Leather Wrap Bracelet",
          "material": "Leather",
          "style": "Wrap",
          "price": 80.00,
          "availability": false,
          "description": "A trendy leather wrap bracelet with adjustable straps, providing a stylish and casual look.",
          "images":"leather_wrap_bracelet.jpeg",
          "subtypes": ["Braided Leather", "Beaded Leather", "Double Wrap"]
        },
        {
          "id": 4,
          "name": "Rose Gold Cuff Bracelet",
          "material": "Rose Gold",
          "style": "Cuff",
          "price": 150.00,
          "availability": true,
          "images":"Rose_Gold_Cuff_Bracelet.jpeg",
          "description": "A chic rose gold cuff bracelet, perfect for adding a touch of elegance to any outfit.",
          "subtypes": ["Thin Cuff", "Wide Cuff", "Hammered Cuff"]
        },
        {
          "id": 5,
          "name": "Pearl Strand Bracelet",
          "material": "Pearl",
          "style": "Strand",
          "price": 200.00,
          "availability": true,
          "images":"pearl_strand_bracelet.jpg",
          "description": "A timeless pearl strand bracelet featuring lustrous pearls and a sterling silver clasp.",
          "subtypes": ["White Pearls", "Black Pearls", "Multi-Strand"]
        },
        {
          "id": 6,
          "name": "Turquoise Beaded Bracelet",
          "material": "Turquoise",
          "style": "Beaded",
          "price": 120.00,
          "availability": true,
          "images":"turquoise_beaded_bracelet.jpg",
          "description": "A vibrant turquoise beaded bracelet with a bohemian flair, perfect for a laid-back style.",
          "subtypes": ["Single Strand", "Multi-Layered", "Stretch Bracelet"]
        }
      ]
    
    
  },
  ,
  {
    id: 3,
    title: 'Pendants',
    path: '/products/Pendants',
    types: [{
      "name": "Pendants"
      
    }],
      "Pendants": [
        {
          "id": 1,
          "name": "Diamond Solitaire Pendant",
          "material": "White Gold",
          "style": "Solitaire",
          "price": 500.00,
          "availability": true,
          "images":"diamond_solitaire_pendant.jpeg",
          "description": "A stunning white gold pendant featuring a brilliant diamond solitaire, perfect for an elegant look."
        },
        {
          "id": 2,
          "name": "Gemstone Cluster Pendant",
          "material": "Yellow Gold",
          "style": "Cluster",
          "price": 350.00,
          "availability": true,
          "images":"gemstone_cluster_pendant.jpg",
          "description": "A yellow gold pendant adorned with a cluster of colorful gemstones, adding a vibrant touch to any outfit."
        },
        {
          "id": 3,
          "name": "Rose Gold Heart Locket",
          "material": "Rose Gold",
          "style": "Locket",
          "price": 220.00,
          "availability": false,
          "images":"rose_gold_heart_locket.jpeg",
          "description": "A romantic rose gold heart locket, ideal for keeping cherished memories close to your heart."
        },
        {
          "id": 4,
          "name": "Sterling Silver Infinity Pendant",
          "material": "Sterling Silver",
          "style": "Infinity",
          "price": 120.00,
          "availability": true,
          "images":"sterling_silver_infinity_pendant.jpg",
          "description": "A symbol of eternal love, this sterling silver pendant features an infinity design, making it a meaningful gift."
        },
        {
          "id": 5,
          "name": "Cubic Zirconia Cross Pendant",
          "material": "Rhodium Plated",
          "style": "Cross",
          "price": 80.00,
          "availability": true,
          "images":"cubic_zirconia_cross_pendant.jpg",
          "description": "A rhodium-plated pendant with a sparkling cubic zirconia cross, a stylish and symbolic accessory."
        },
        {
          "id": 6,
          "name": "Pearl Drop Pendant",
          "material": "White Gold",
          "style": "Drop",
          "price": 180.00,
          "availability": true,
          "images":"pearl_drop_pendant.jpg",
          "description": "An elegant white gold pendant featuring a lustrous pearl drop, adding a touch of sophistication to any ensemble."
        }
      ]    

  },
  {
    id: 4,
    title: 'Solitaires',
    path: '/products/Solitaires',
    types: [{
      "name": "Solitaires"
      
    }],
      "Solitaires": [
        {
          "id": 1,
          "name": "Classic Diamond Solitaire Ring",
          "metal": "White Gold",
          "carat": 1.5,
          "cut": "Round Brilliant",
          "clarity": "VS1",
          "color": "D",
          "price": 5000.00,
          "availability": true,
          "images":"classic_diamond_solitaire_ring.jpg",
          "description": "A timeless and elegant white gold solitaire ring featuring a 1.5 carat round brilliant diamond with VS1 clarity and D color."
        },
        {
          "id": 2,
          "name": "Princess Cut Solitaire Engagement Ring",
          "metal": "Yellow Gold",
          "carat": 2.0,
          "cut": "Princess",
          "clarity": "SI1",
          "color": "G",
          "price": 7000.00,
          "availability": true,
          "images":"princess_cut_solitaire_engagement_ring.jpeg",
          "description": "A stunning yellow gold solitaire engagement ring showcasing a 2.0 carat princess-cut diamond with SI1 clarity and G color."
        },
        {
          "id": 3,
          "name": "Rose Gold Oval Solitaire Ring",
          "metal": "Rose Gold",
          "carat": 1.8,
          "cut": "Oval",
          "clarity": "VS2",
          "color": "E",
          "price": 6000.00,
          "availability": false,
          "images":"rose_gold_oval_solitaire_ring.jpeg",
          "description": "A romantic rose gold solitaire ring featuring a 1.8 carat oval-shaped diamond with VS2 clarity and E color."
        },
        {
          "id": 4,
          "name": "Platinum Cushion Cut Solitaire Ring",
          "metal": "Platinum",
          "carat": 2.5,
          "cut": "Cushion",
          "clarity": "VVS1",
          "color": "F",
          "price": 8500.00,
          "availability": true,
          "images":"platinum_cushion_cut_solitaire_ring.jpeg",
          "description": "A luxurious platinum solitaire ring showcasing a 2.5 carat cushion-cut diamond with VVS1 clarity and F color."
        },
        {
          "id": 5,
          "name": "Emerald Cut Diamond Solitaire Ring",
          "metal": "White Gold",
          "carat": 2.2,
          "cut": "Emerald",
          "clarity": "VS2",
          "color": "H",
          "price": 7500.00,
          "availability": true,
          "images":"emerald_cut_diamond_solitaire_ring.jpeg",
          "description": "A sophisticated white gold solitaire ring featuring a 2.2 carat emerald-cut diamond with VS2 clarity and H color."
        },
        {
          "id": 6,
          "name": "Yellow Gold Marquise Solitaire Ring",
          "metal": "Yellow Gold",
          "carat": 1.6,
          "cut": "Marquise",
          "clarity": "SI2",
          "color": "I",
          "price": 5500.00,
          "availability": true,
          "images":"yellow_gold_marquise_solitaire_ring.jpeg",
          "description": "A unique yellow gold solitaire ring with a 1.6 carat marquise-cut diamond, featuring SI2 clarity and I color."
        }
      ]    
  },
  {
    id: 5,
    title: 'Earrings',
    path: '/products/Earrings',
    types: [{
      "name": "Earrings"
      
    }],
      "Earrings": [
        {
          "id": 1,
          "name": "Diamond Stud Earrings",
          "material": "White Gold",
          "carat": 1.0,
          "cut": "Round Brilliant",
          "clarity": "VS2",
          "color": "G",
          "price": 3000.00,
          "availability": true,
          "images":"diamond_stud_earrings.jpg",
          "description": "Classic white gold stud earrings featuring two 1.0 carat round brilliant diamonds with VS2 clarity and G color."
        },
        {
          "id": 2,
          "name": "Sapphire Drop Earrings",
          "material": "Yellow Gold",
          "gemstone": "Sapphire",
          "carat": 2.5,
          "shape": "Oval",
          "price": 2500.00,
          "availability": true,
          "images":"sapphire_drop_earrings.jpg",
          "description": "Elegant yellow gold drop earrings with two oval-shaped sapphires totaling 2.5 carats, perfect for a touch of color."
        },
        {
          "id": 3,
          "name": "Rose Gold Hoop Earrings",
          "material": "Rose Gold",
          "diameter": 25,
          "thickness": 3,
          "price": 1200.00,
          "availability": false,
          "images":"rose_gold_hoop_earrings.jpeg",
          "description": "Trendy rose gold hoop earrings with a diameter of 25mm and a thickness of 3mm, offering a stylish and versatile accessory."
        },
        {
          "id": 4,
          "name": "Pearl Drop Earrings",
          "material": "White Gold",
          "gemstone": "Pearl",
          "length": 1.5,
          "price": 1800.00,
          "availability": true,
          "images":"pearl_drop_earrings.jpeg",
          "description": "Classic white gold drop earrings featuring lustrous pearls with a length of 1.5 inches, adding sophistication to any ensemble."
        },
        {
          "id": 5,
          "name": "Diamond Huggie Earrings",
          "material": "Platinum",
          "carat": 0.75,
          "cut": "Princess",
          "clarity": "VS1",
          "color": "H",
          "price": 3500.00,
          "availability": true,
          "images":"diamond_huggie_earrings.jpeg",
          "description": "Platinum huggie earrings adorned with 0.75 carats of princess-cut diamonds with VS1 clarity and H color."
        },
        {
          "id": 6,
          "name": "Emerald and Diamond Stud Earrings",
          "material": "White Gold",
          "gemstone": "Emerald",
          "carat": 1.2,
          "cut": "Round Brilliant",
          "price": 2800.00,
          "availability": true,
          "images":"emerald_and_diamond_stud_earrings.jpg",
          "description": "White gold stud earrings featuring a combination of round brilliant diamonds and emeralds, creating a stunning and vibrant look."
        }
      ]
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
