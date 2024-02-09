export const MenuItems = [
  {
    id: 0,
    title: 'Bangles',
    path: '/products/Bangles',
    types: [
      {
        "name": "Gold Bangles"
      },
      {
        "name": "Silver Bangles"
      }

    ],
    "GoldBangles": [
      {
        "id": 1,
        "name": "Classic Yellow Gold Bangle",
        "material": "Yellow Gold",
        "color": "Gold",
        "price": 120000,
        "discount":10,
        "in_stock": true,
        "description": "Timeless yellow gold bangle for everyday elegance.",
        "manufacturer": "GoldCraft",
        "ratings": [
          {
            "user": "Customer101",
            "rating": 4.8,
            "comment": "Beautiful craftsmanship, love the simplicity."
          },
          {
            "user": "Customer202",
            "rating": 5,
            "comment": "Perfect accessory for any occasion."
          }
        ],
        "design": {
          "style": "Classic",
          "occasion": "Everyday",
          "collection": "Gold Classics"
        },
        "dimensions": {
          "diameter": 2.6,
          "width": 0.3,
          "thickness": 0.1
        },
        "images": "classic_yellow_gold_bangle.jpeg"
      },
      {
        "id": 2,
        "name": "Rose Gold Diamond Bangle",
        "material": "Rose Gold",
        "color": "Rose Gold",
        "price": 140000,
        "in_stock": true,
        "description": "Exquisite rose gold bangle with sparkling diamond accents.",
        "manufacturer": "RoseGoldDesigns",
        "ratings": [
          {
            "user": "Customer303",
            "rating": 4.7,
            "comment": "Absolutely stunning, love the combination of rose gold and diamonds."
          }
        ],
        "design": {
          "style": "Luxurious",
          "occasion": "Special Occasion",
          "collection": "Diamond Radiance"
        },
        "dimensions": {
          "diameter": 2.5,
          "width": 0.4,
          "thickness": 0.2
        },
        "images": "rose_gold_diamond_bangle.jpeg"
      },
      {
        "id": 3,
        "name": "White Gold Filigree Bangle",
        "material": "White Gold",
        "color": "White Gold",
        "price": 150000,
        "discount":12,
        "in_stock": false,
        "description": "Elegant white gold bangle with intricate filigree detailing.",
        "manufacturer": "WhiteGoldCraft",
        "ratings": [],
        "design": {
          "style": "Vintage",
          "occasion": "Formal",
          "collection": "Filigree Elegance"
        },
        "dimensions": {
          "diameter": 2.7,
          "width": 0.5,
          "thickness": 0.3
        },
        "images": "white_gold_filigree_bangle.jpeg"
      },
      {
        "id": 4,
        "name": "Two-Tone Gold Cuff Bangle",
        "material": "Yellow Gold, White Gold",
        "color": "Gold, White Gold",
        "price": 180000,
        "in_stock": true,
        "description": "Chic two-tone gold cuff bangle for a modern look.",
        "manufacturer": "GoldCraft",
        "ratings": [
          {
            "user": "Customer404",
            "rating": 4.5,
            "comment": "Love the combination of gold colors, very stylish."
          }
        ],
        "design": {
          "style": "Modern",
          "occasion": "Casual",
          "collection": "Two-Tone Chic"
        },
        "dimensions": {
          "diameter": 2.8,
          "width": 0.6,
          "thickness": 0.4
        },
        "images": "two_tone_gold_cuff_bangle.jpeg"
      },
      {
        "id": 5,
        "name": "Chunky Gold Textured Bangle",
        "material": "Yellow Gold",
        "color": "Gold",
        "discount":4,
        "price": 122000,
        "in_stock": true,
        "description": "Bold and chunky yellow gold bangle with textured surface.",
        "manufacturer": "GoldCraft",
        "ratings": [
          {
            "user": "Customer505",
            "rating": 4.3,
            "comment": "Makes a statement, love the texture!"
          }
        ],
        "design": {
          "style": "Bold",
          "occasion": "Evening Event",
          "collection": "Gold Statement"
        },
        "dimensions": {
          "diameter": 2.9,
          "width": 0.8,
          "thickness": 0.6
        },
        "images": "chunky_gold_textured_bangle.jpeg"
      }
    ]
    ,
    "SilverBangles": [
      {
        "id": 1,
        "name": "Classic Silver Bangle",
        "material": "925 Sterling Silver",
        "style": "Classic",
        "design": "Smooth polished surface",
        "size": "Medium",
        "weight": "20 grams",
        "price": 94000,
        "availability": true,
        "gemstone": "None",
        "closure": "Clasp",
        "brand": "SilverCraft",
        "description": "A timeless and elegant classic silver bangle with a smooth polished surface. Made from high-quality 925 sterling silver, this bangle is suitable for various occasions.",
        "images": "classic_silver_bangle.jpeg",
        "customer_reviews": [
          {
            "username": "HappyCustomer123",
            "rating": 4.5,
            "comment": "Beautiful and well-crafted bangle. Fits perfectly."
          },
          {
            "username": "SilverLover456",
            "rating": 5.0,
            "comment": "Excellent quality silver. I wear it every day!"
          }
        ]
      },
      {
        "id": 2,
        "name": "Twisted Silver Bangle",
        "material": "925 Sterling Silver",
        "style": "Twisted",
        "design": "Intricate twisted pattern",
        "size": "Small",
        "weight": "15 grams",
        "price": 95000,
        "availability": true,
        "discount":10,
        "gemstone": "None",
        "closure": "Hinged",
        "brand": "SilverStyles",
        "description": "A stylish twisted silver bangle with an intricate pattern. Crafted from high-quality 925 sterling silver, this bangle is lightweight and perfect for everyday wear.",
        "images": "twisted_silver_bangle.jpeg",
        "customer_reviews": [
          {
            "username": "Fashionista789",
            "rating": 4.0,
            "comment": "Love the unique twist design. Adds flair to my outfits."
          },
          {
            "username": "SilverFanatic101",
            "rating": 5.0,
            "comment": "Sturdy and well-made. Highly recommend."
          }
        ]
      },
      {
        "id": 3,
        "name": "Embossed Floral Silver Bangle",
        "material": "925 Sterling Silver",
        "style": "Embossed Floral",
        "design": "Floral patterns embossed on the surface",
        "size": "Large",
        "weight": "25 grams",
        "price": 82000,
        "availability": false,
        "gemstone": "Cubic Zirconia",
        "closure": "Slip-on",
        "brand": "FloralSilver",
        "description": "A stunning embossed floral silver bangle featuring intricate floral patterns on the surface. This bangle is adorned with cubic zirconia for added elegance.",
        "images": "embossed_floral_silver_bangle.jpeg",
        "customer_reviews": [
          {
            "username": "FloralGoddess",
            "rating": 4.8,
            "comment": "Absolutely gorgeous! The floral details are exquisite."
          },
          {
            "username": "ElegantStyle123",
            "rating": 4.5,
            "comment": "Slightly heavy, but worth it for the beautiful design."
          }
        ]
      },
      {
        "id": 4,
        "name": "Minimalist Silver Cuff",
        "material": "950 Sterling Silver",
        "style": "Minimalist",
        "design": "Clean and simple cuff design",
        "size": "Medium",
        "weight": "18 grams",
        "price": 41000,
        "availability": true,
        "gemstone": "None",
        "closure": "Adjustable",
        "brand": "SilverEssence",
        "description": "A modern and minimalist silver cuff crafted from 950 sterling silver. Its clean and simple design makes it a versatile accessory for any occasion.",
        "images": "minimalist_silver_cuff.jpeg",
        "customer_reviews": [
          {
            "username": "ModernChic",
            "rating": 4.2,
            "comment": "Love the minimalist design. Goes well with my everyday style."
          },
          {
            "username": "SilverAdmirer",
            "rating": 4.5,
            "comment": "Comfortable to wear and looks great stacked with other bracelets."
          }
        ]
      },
      {
        "id": 5,
        "name": "Bohemian Silver Bangle Set",
        "material": "Sterling Silver Alloy",
        "style": "Bohemian",
        "design": "Set of 3 bangles with boho-inspired charms",
        "size": "Mixed",
        "discount":8,
        "weight": "22 grams (total)",
        "price": 54000,
        "availability": true,
        "gemstone": "Turquoise",
        "closure": "Lobster clasp",
        "brand": "BohoSilver",
        "description": "A bohemian-inspired set of three silver bangles featuring unique charms and turquoise gemstones. Perfect for a free-spirited and eclectic look.",
        "images": "bohemian_silver_bangle_set.jpeg",
        "customer_reviews": [
          {
            "username": "BohoQueen",
            "rating": 4.7,
            "comment": "Absolutely love the boho vibes. Each bangle is a work of art."
          },
          {
            "username": "FreeSpirit123",
            "rating": 5.0,
            "comment": "Great for stacking or wearing individually. The turquoise adds a pop of color."
          }
        ]
      }
    ]
  },
  {
    id: 1,
    title: 'Rings',
    types: [{
      "name": "Platinum Rings"

    }, {
      "name": "Gold Rings"
    }],
    "PlatinumRings": [
      {
        "id": 1,
        "name": "Platinum Solitaire Engagement Ring",
        "material": "Platinum",
        "color": "Platinum",
        "price": 462852,
        "discount":12,
        "in_stock": true,
        "description": "Classic platinum solitaire engagement ring for a timeless proposal.",
        "manufacturer": "PlatinumCraft",
        "ratings": [
          {
            "user": "Customer101",
            "rating": 4.9,
            "comment": "Exceptional quality, she said yes!"
          },
          {
            "user": "Customer202",
            "rating": 5,
            "comment": "Beautiful ring, elegant and sophisticated."
          }
        ],
        "design": {
          "style": "Classic",
          "occasion": "Engagement",
          "collection": "Platinum Elegance"
        },
        "dimensions": {
          "width": 3,
          "thickness": 1.8
        },
        "images": "platinum_solitaire_engagement_ring.jpeg"
      },
      {
        "id": 2,
        "name": "Art Deco-Inspired Platinum Ring",
        "material": "Platinum",
        "color": "Platinum",
        "price": 308500,
        "in_stock": true,
        "discount":10,
        "description": "Elegant art deco-inspired platinum ring with intricate detailing.",
        "manufacturer": "PlatinumCraft",
        "ratings": [
          {
            "user": "Customer303",
            "rating": 4.7,
            "comment": "Love the vintage vibe, beautifully crafted."
          }
        ],
        "design": {
          "style": "Vintage",
          "occasion": "Formal",
          "collection": "Platinum Classics"
        },
        "dimensions": {
          "width": 2.5,
          "thickness": 2
        },
        "images": "art_deco-Inspired_platinum_ring.jpeg"
      },
      {
        "id": 3,
        "name": "Platinum Eternity Band",
        "material": "Platinum",
        "color": "Platinum",
        "price": 369800,
        "in_stock": false,
        "description": "Timeless platinum eternity band with channel-set diamonds.",
        "manufacturer": "PlatinumCraft",
        "ratings": [],
        "design": {
          "style": "Timeless",
          "occasion": "Anniversary",
          "collection": "Eternity Bliss"
        },
        "dimensions": {
          "width": 3,
          "thickness": 1.5
        },
        "images": "platinum_eternity_band.jpeg"
      },
      {
        "id": 4,
        "name": "Platinum Three-Stone Ring",
        "material": "Platinum",
        "color": "Platinum",
        "price": 115000,
        "in_stock": true,
        "description": "Exquisite platinum three-stone ring featuring diamonds of varying sizes.",
        "manufacturer": "PlatinumCraft",
        "ratings": [
          {
            "user": "Customer404",
            "rating": 4.9,
            "comment": "A symbol of our past, present, and future. Stunning!"
          }
        ],
        "design": {
          "style": "Luxurious",
          "occasion": "Special Occasion",
          "collection": "Diamond Harmony"
        },
        "dimensions": {
          "width": 3.2,
          "thickness": 2.2
        },
        "images": "platinum_three-Stone_ring.jpeg"
      },
      {
        "id": 5,
        "name": "Platinum Halo Engagement Ring",
        "material": "Platinum",
        "color": "Platinum",
        "price": 204000,
        "in_stock": true,
        "description": "Elegant platinum engagement ring with a sparkling diamond halo.",
        "manufacturer": "PlatinumCraft",
        "discount":4,
        "ratings": [
          {
            "user": "Customer505",
            "rating": 4.8,
            "comment": "Absolutely stunning! The halo adds a beautiful touch."
          }
        ],
        "design": {
          "style": "Modern",
          "occasion": "Engagement",
          "collection": "Platinum Radiance"
        },
        "dimensions": {
          "width": 2.8,
          "thickness": 1.7
        },
        "images": "platinum_halo_engagement_ring.jpeg"
      },
      {
        "id": 6,
        "name": "Platinum Twist Band",
        "material": "Platinum",
        "color": "Platinum",
        "price": 170430,
        "in_stock": true,
        "description": "Chic platinum twist band ring for a modern and stylish look.",
        "manufacturer": "PlatinumCraft",
        "ratings": [
          {
            "user": "Customer606",
            "rating": 4.5,
            "comment": "Love the unique twist design, comfortable to wear."
          }
        ],
        "design": {
          "style": "Modern",
          "occasion": "Everyday",
          "collection": "Platinum Chic"
        },
        "dimensions": {
          "width": 3.5,
          "thickness": 1.2
        },
        "images": "platinum_twist_band.jpeg"
      },
      {
        "id": 7,
        "name": "Platinum and Sapphire Vintage Ring",
        "material": "Platinum, Sapphire",
        "color": "Platinum, Blue",
        "price": 152899,
        "discount":14,
        "in_stock": true,
        "description": "Vintage-inspired platinum ring with a central blue sapphire and diamond accents.",
        "manufacturer": "PlatinumCraft",
        "ratings": [
          {
            "user": "Customer707",
            "rating": 4.6,
            "comment": "Love the combination of platinum and sapphire, stunning!"
          }
        ],
        "design": {
          "style": "Vintage",
          "occasion": "Special Occasion",
          "collection": "Sapphire Elegance"
        },
        "dimensions": {
          "width": 2.2,
          "thickness": 1.5
        },
        "images": "platinum_and_sapphire_vintage_ring.jpeg"
      }
    ]
    ,
    "GoldRings": [
      {
        "id": 1,
        "name": "Classic Yellow Gold Wedding Band",
        "material": "Yellow Gold",
        "color": "Gold",
        "price": 73959,
        "in_stock": true,
        "description": "Timeless and elegant yellow gold wedding band.",
        "manufacturer": "GoldCraft",
        "ratings": [
          {
            "user": "Customer101",
            "rating": 4.8,
            "comment": "Perfect for our wedding! Great quality."
          },
          {
            "user": "Customer202",
            "rating": 5,
            "comment": "Simple and beautiful."
          }
        ],
        "design": {
          "style": "Classic",
          "occasion": "Wedding",
          "collection": "Gold Elegance"
        },
        "dimensions": {
          "width": 4,
          "thickness": 2
        },
        "images": "classic_yellow_gold_wedding_band.jpeg"
      },
      {
        "id": 2,
        "name": "Rose Gold Diamond Engagement Ring",
        "material": "Rose Gold",
        "color": "Rose Gold",
        "price": 60536,
        "in_stock": true,
        "discount":3,
        "description": "Exquisite rose gold engagement ring with a sparkling diamond.",
        "manufacturer": "RoseGoldDesigns",
        "ratings": [
          {
            "user": "Customer303",
            "rating": 4.5,
            "comment": "Absolutely stunning ring!"
          }
        ],
        "design": {
          "style": "Luxurious",
          "occasion": "Engagement",
          "collection": "Diamond Radiance"
        },
        "dimensions": {
          "width": 3,
          "thickness": 1.5
        },
        "images": "rose_gold_diamond_engagement_ring.jpeg"
      },
      {
        "id": 3,
        "name": "White Gold Solitaire Ring",
        "material": "White Gold",
        "color": "White Gold",
        "price": 44118,
        "in_stock": false,
        "description": "Classic white gold solitaire ring for a timeless look.",
        "manufacturer": "LuxuryGems",
        "ratings": [],
        "design": {
          "style": "Timeless",
          "occasion": "Formal",
          "collection": "White Gold Classics"
        },
        "dimensions": {
          "width": 2.5,
          "thickness": 1.8
        },
        "images": "white_gold_solitaire_ring.jpeg"
      },
      {
        "id": 4,
        "name": "Yellow Gold Stackable Rings Set",
        "material": "Yellow Gold",
        "color": "Gold",
        "price": 59060,
        "discount":12,
        "in_stock": true,
        "description": "Set of stackable yellow gold rings for a versatile and trendy look.",
        "manufacturer": "GoldCraft",
        "ratings": [
          {
            "user": "Customer404",
            "rating": 4.2,
            "comment": "Love the versatility of the stackable rings."
          }
        ],
        "design": {
          "style": "Trendy",
          "occasion": "Casual",
          "collection": "Stackable Elegance"
        },
        "dimensions": {
          "width": 2,
          "thickness": 0.8
        },
        "images": "yellow_gold_stackable_rings_set.jpeg"
      },
      {
        "id": 5,
        "name": "Two-Tone Gold and Diamond Ring",
        "material": "Yellow Gold, White Gold",
        "color": "Gold, White Gold",
        "price": 75708,
        "in_stock": true,
        "description": "Chic two-tone gold ring with a diamond accent.",
        "manufacturer": "GoldCraft",
        "ratings": [
          {
            "user": "Customer505",
            "rating": 4.7,
            "comment": "Unique design, love the combination of gold colors."
          }
        ],
        "design": {
          "style": "Chic",
          "occasion": "Special Occasion",
          "collection": "Gold Fusion"
        },
        "dimensions": {
          "width": 2.8,
          "thickness": 1.2
        },
        "images": "two-tone_gold_and_diamond_ring.jpeg"
      },
      {
        "id": 6,
        "name": "Vintage-Inspired Gold Filigree Ring",
        "material": "Yellow Gold",
        "color": "Gold",
        "price": 590330,
        "in_stock": true,
        "description": "Intricate vintage-inspired gold filigree ring for a touch of old-world charm.",
        "manufacturer": "GoldCraft",
        "discount":14,
        "ratings": [],
        "design": {
          "style": "Vintage",
          "occasion": "Formal",
          "collection": "Filigree Classics"
        },
        "dimensions": {
          "width": 3.5,
          "thickness": 1.5
        },
        "images": "vintage-inspired_gold_filigree_ring.jpeg"
      },
      {
        "id": 7,
        "name": "Chunky Gold Statement Ring",
        "material": "Yellow Gold",
        "color": "Gold",
        "price": 88000,
        "in_stock": true,
        "description": "Bold and chunky yellow gold statement ring for a daring look.",
        "manufacturer": "GoldCraft",
        "ratings": [
          {
            "user": "Customer606",
            "rating": 4.3,
            "comment": "Makes a strong statement, love it!"
          }
        ],
        "design": {
          "style": "Bold",
          "occasion": "Evening Event",
          "collection": "Gold Statement"
        },
        "dimensions": {
          "width": 4.5,
          "thickness": 2.5
        },
        "images": "chunky_gold_statement_ring.jpeg"
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
      "name": "Solitaire Bracelets"
    },
    {
      "name": "Bracelets"
    }],

    "SolitaireBracelets": [
      {
        "id": 1,
        "name": "Diamond Cluster Tennis Bracelet",
        "metal": "White Gold",
        "diamonds": [
          {
            "shape": "Round",
            "carat": 2.5,
            "color": "E",
            "clarity": "VS1",
            "cut": "Excellent"
          },
          {
            "shape": "Princess",
            "carat": 2.0,
            "color": "D",
            "clarity": "VVS2",
            "cut": "Very Good"
          }
        ],
        "price": 302785,
        "discount":2,
        "availability": true,
        "description": "Elegant white gold tennis bracelet featuring a cluster of round and princess-cut diamonds.",
        "length": "7.25 inches",
        "images": "diamond_cluster_tennis_bracelet.jpeg",
        "reviews": [
          {
            "user": "EleganceSeeker123",
            "rating": 5,
            "comment": "Absolutely elegant! The cluster of diamonds is stunning."
          },
          {
            "user": "DiamondLover456",
            "rating": 4,
            "comment": "Beautiful combination of round and princess-cut diamonds."
          }
        ],
       },
      {
        "id": 2,
        "name": "Rose Gold Charm Bracelet with Gemstones",
        "metal": "Rose Gold",
        "diamonds": [
          {
            "shape": "Round",
            "carat": 1.0,
            "color": "F",
            "clarity": "SI1",
            "cut": "Good"
          }
        ],
        "gemstones": ["Blue Topaz", "Amethyst", "Peridot"],
        "price": 702901,
        "availability": true,
        "description": "Charming rose gold charm bracelet featuring a round-cut diamond and colorful gemstone charms.",
        "length": "6.75 inches",
        "images": "rose_gold_charm_bracelet_with_gemstones.jpeg",
        "reviews": [
          {
            "user": "CharmAdmirer567",
            "rating": 4,
            "comment": "The gemstone charms add a playful touch. Love this bracelet!"
          },
          {
            "user": "RoseGoldCharmLover",
            "rating": 5,
            "comment": "Charming and versatile, perfect for any occasion."
          }
        ],
       },
      {
        "id": 3,
        "name": "Vintage-Inspired Diamond Link Bracelet",
        "metal": "Yellow Gold",
        "discount":8,
        "diamonds": [
          {
            "shape": "Asscher",
            "carat": 2.2,
            "color": "G",
            "clarity": "SI2",
            "cut": "Good"
          },
          {
            "shape": "Baguette",
            "carat": 1.8,
            "color": "H",
            "clarity": "VS1",
            "cut": "Excellent"
          }
        ],
        "price": 458535,
        "availability": false,
        "description": "Vintage-inspired yellow gold link bracelet featuring asscher and baguette-cut diamonds.",
        "length": "7.5 inches",
        "images": "vintage_inspired_diamond_link_bracelet.jpeg",
        "reviews": [
          {
            "user": "VintageCharm567",
            "rating": 5,
            "comment": "Love the vintage vibe! The combination of diamonds is exquisite."
          },
          {
            "user": "YellowGoldVintage",
            "rating": 3,
            "comment": "Beautiful design, but currently out of stock."
          }
        ],
      },
      {
        "id": 4,
        "name": "Pearl and Diamond Cuff Bracelet",
        "metal": "White Gold",
        "diamonds": [
          {
            "shape": "Round",
            "carat": 1.5,
            "color": "E",
            "clarity": "VVS2",
            "cut": "Excellent"
          }
        ],
        "pearls": [
          {
            "size": "8mm",
            "color": "White"
          },
          {
            "size": "10mm",
            "color": "Pink"
          }
        ],
        "price": 501206,
        "availability": true,
        "description": "Sophisticated white gold cuff bracelet featuring diamonds and lustrous pearls.",
        "length": "6.5 inches",
        "discount":2,
        "images": "pearl_and_diamond_cuff_bracelet.jpeg",
        "reviews": [
          {
            "user": "SophisticatedStyle123",
            "rating": 4,
            "comment": "A sophisticated piece! The combination of diamonds and pearls is stunning."
          },
          {
            "user": "PearlLover456",
            "rating": 5,
            "comment": "Absolutely love it! Perfect for formal events."
          }
        ],
      },
      {
        "id": 5,
        "name": "Diamond Infinity Link Bracelet",
        "metal": "Rose Gold",
        "diamonds": [
          {
            "shape": "Round",
            "carat": 2.0,
            "color": "H",
            "clarity": "SI1",
            "cut": "Very Good"
          }
        ],
        "price": 408138,
        "availability": true,
        "description": "Graceful rose gold link bracelet featuring an infinity symbol adorned with diamonds.",
        "length": "7.25 inches",
        "images": "diamond_infinity_link_bracelet.jpeg",
        "reviews": [
          {
            "user": "GracefulAdmirer123",
            "rating": 4,
            "comment": "The infinity symbol adds a touch of grace. Beautiful bracelet!"
          },
          {
            "user": "RoseGoldInfinityFan",
            "rating": 5,
            "comment": "Graceful design, perfect for everyday wear."
          }
        ],
      },
      {
        "id": 6,
        "name": "Multi-Gemstone Link Bracelet",
        "metal": "Yellow Gold",
        "discount":12,
        "gemstones": [
          {
            "type": "Amethyst",
            "shape": "Round",
            "size": "6mm"
          },
          {
            "type": "Citrine",
            "shape": "Oval",
            "size": "8x6mm"
          },
          {
            "type": "Peridot",
            "shape": "Pear",
            "size": "7x5mm"
          }
        ],
        "price": 306942,
        "availability": true,
        "description": "Colorful yellow gold link bracelet featuring a variety of gemstones in different shapes.",
        "length": "7.5 inches",
        "images": "multi_gemstone_link_bracelet.jpeg",
        "reviews": [
          {
            "user": "GemstoneAdmirer123",
            "rating": 5,
            "comment": "The variety of gemstones adds a vibrant touch. Love this bracelet!"
          },
          {
            "user": "YellowGoldGemstoneLover",
            "rating": 4,
            "comment": "Colorful and unique design, great for casual wear."
          }
        ],
     },
      {
        "id": 7,
        "name": "Diamond and Pearl Strand Bracelet",
        "metal": "White Gold",
        "diamonds": [
          {
            "shape": "Round",
            "carat": 2.0,
            "color": "F",
            "clarity": "SI2",
            "cut": "Good"
          }
        ],
        "pearls": [
          {
            "size": "7.5mm",
            "color": "White"
          }
        ],
        "price": 338000,
        "availability": true,
        "description": "Elegant white gold strand bracelet featuring a combination of diamonds and pearls.",
        "length": "7 inches",
        "images": "diamond_and_pearl_strand_bracelet.jpeg",
        "discount":10,
        "reviews": [
          {
            "user": "EleganceSeeker789",
            "rating": 4,
            "comment": "The combination of diamonds and pearls is timeless. Elegant bracelet!"
          },
          {
            "user": "PearlDiamondElegance",
            "rating": 5,
            "comment": "Perfect for special occasions. Love the combination."
          }
        ],
       },
      {
        "id": 8,
        "name": "Sapphire and Diamond Halo Bracelet",
        "metal": "Rose Gold",
        "diamonds": [
          {
            "shape": "Round",
            "carat": 1.8,
            "color": "G",
            "clarity": "VS1",
            "cut": "Excellent"
          }
        ],
        "gemstone": "Blue Sapphire",
        "price": 256980,
        "availability": true,
        "description": "Stunning rose gold bracelet with a halo of diamonds surrounding a vibrant blue sapphire.",
        "length": "6.75 inches",
        "images": "sapphire_and_diamond_halo_bracelet.jpeg",
        "reviews": [
          {
            "user": "SapphireLover123",
            "rating": 5,
            "comment": "The blue sapphire adds a pop of color. Absolutely stunning bracelet!"
          },
          {
            "user": "RoseGoldHaloFan",
            "rating": 4,
            "comment": "Beautiful design, the halo of diamonds enhances the brilliance."
          }
        ],
        },
      {
        "id": 9,
        "name": "Cubic Zirconia Tennis Bracelet",
        "metal": "White Gold",
        "cubicZirconia": true,
        "price":455950,
        "availability": true,
        "description": "Affordable white gold tennis bracelet featuring sparkling cubic zirconia stones.",
        "length": "7 inches",
        "images": "cubic_zirconia_tennis_bracelet.jpeg",
        "reviews": [
          {
            "user": "AffordableElegance",
            "rating": 4,
            "comment": "Affordable and elegant! Looks like real diamonds. Great value."
          },
          {
            "user": "BudgetLuxuryLover",
            "rating": 5,
            "comment": "Perfect for those on a budget. Elegant and timeless."
          }
        ],
      },
      {
        "id": 10,
        "name": "Diamond and Ruby Bangle",
        "metal": "Yellow Gold",
        "diamonds": [
          {
            "shape": "Round",
            "carat": 1.2,
            "color": "H",
            "clarity": "SI1",
            "cut": "Very Good"
          }
        ],
        "gemstone": "Ruby",
        "price": 154270,
        "availability": true,
        "discount":4,
        "description": "Bold yellow gold bangle featuring diamonds and a vibrant round-cut ruby.",
        "length": "6.5 inches",
        "images": "diamond_and_ruby_bangle.jpeg",
        "reviews": [
          {
            "user": "BoldStyle123",
            "rating": 5,
            "comment": "The combination of diamonds and ruby is bold and beautiful. Love it!"
          },
          {
            "user": "RubyDiamondAdmirer",
            "rating": 4,
            "comment": "Bold design, perfect for making a statement."
          }
        ],
       }
    ]
    ,
    "Bracelets": [
      {
        "id": 1,
        "name": "Sterling Silver Charm Bracelet",
        "material": "Sterling Silver",
        "color": "Silver",
        "price": 141170,
        "in_stock": true,
        "description": "Classic charm bracelet made from high-quality sterling silver.",
        "manufacturer": "SilverStyle",
        "ratings": [
          {
            "user": "Customer101",
            "rating": 4.2,
            "comment": "Adorable charms, great craftsmanship."
          },
          {
            "user": "Customer202",
            "rating": 4.5,
            "comment": "Lovely bracelet for everyday wear."
          }
        ],
        "design": {
          "style": "Classic",
          "occasion": "Casual",
          "collection": "Charm Elegance"
        },
        "dimensions": {
          "length": 7.5,
          "width": 0.2,
          "thickness": 0.1
        },
        "images": "sterling_silver_charm_bracelet.jpeg"
      },
      {
        "id": 2,
        "name": "Leather Wrap Bracelet",
        "material": "Genuine Leather",
        "color": "Brown",
        "price": 117050,
        "in_stock": true,
        "description": "Stylish brown leather wrap bracelet with magnetic clasp.",
        "manufacturer": "UrbanStyle",
        "ratings": [
          {
            "user": "Customer303",
            "rating": 4.0,
            "comment": "Comfortable and trendy."
          }
        ],
        "design": {
          "style": "Bohemian",
          "occasion": "Casual",
          "collection": "Leather Chic"
        },
        "dimensions": {
          "length": 15,
          "width": 0.5,
          "thickness": 0.2
        },
        "images": "leather_wrap_bracelet.jpeg"
      },
      {
        "id": 3,
        "name": "Rose Gold Bangle",
        "material": "Rose Gold Plated",
        "color": "Rose Gold",
        "price":85905,
        "discount":10,
        "in_stock": false,
        "description": "Elegant rose gold plated bangle with a minimalist design.",
        "manufacturer": "RoseGoldDesigns",
        "ratings": [],
        "design": {
          "style": "Minimalist",
          "occasion": "Formal",
          "collection": "Rose Gold Elegance"
        },
        "dimensions": {
          "diameter": 2.6,
          "width": 0.3,
          "thickness": 0.1
        },
        "images": "rose_gold_bangle.jpeg"
      },
      {
        "id": 4,
        "name": "Gemstone Beaded Bracelet",
        "material": "Natural Gemstones",
        "color": "Multicolor",
        "price": 449000,
        "in_stock": true,
        "description": "Handcrafted bracelet with vibrant natural gemstone beads.",
        "manufacturer": "GemCraftsmanship",
        "ratings": [
          {
            "user": "Customer404",
            "rating": 4.8,
            "comment": "Beautiful colors, great quality."
          }
        ],
        "design": {
          "style": "Bohemian",
          "occasion": "Casual",
          "collection": "Gemstone Delight"
        },
        "dimensions": {
          "length": 7.8,
          "bead_size": 0.2
        },
        "images": "gemstone_beaded_bracelet.jpeg"
      },
      {
        "id": 5,
        "name": "Stainless Steel Cuff",
        "material": "Stainless Steel",
        "color": "Silver",
        "price": 52950,
        "in_stock": true,
        "description": "Sleek stainless steel cuff bracelet with a modern design.",
        "manufacturer": "SteelStyle",
        "ratings": [
          {
            "user": "Customer505",
            "rating": 4.5,
            "comment": "Simple yet stylish, goes with everything."
          }
        ],
        "design": {
          "style": "Modern",
          "occasion": "Everyday",
          "collection": "Steel Chic"
        },
        "dimensions": {
          "diameter": 2.7,
          "width": 0.4,
          "thickness": 0.1
        },
        "images": "stainless_steel_cuff.jpeg"
      },
      {
        "id": 6,
        "name": "Pearl Strand Bracelet",
        "material": "Cultured Pearls",
        "color": "White",
        "price": 115000,
        "in_stock": true,
        "description": "Elegant strand bracelet featuring lustrous cultured pearls.",
        "manufacturer": "PearlCraft",
        "ratings": [],
        "design": {
          "style": "Elegant",
          "occasion": "Formal",
          "collection": "Pearl Elegance"
        },
        "dimensions": {
          "length": 7.2,
          "pearl_size": 0.25
        },
        "images": "pearl_strand_bracelet.jpeg"
      },
      {
        "id": 7,
        "name": "Silver Twisted Cuff",
        "material": "Sterling Silver",
        "color": "Silver",
        "price": 105000,
        "in_stock": true,
        "description": "Twisted sterling silver cuff bracelet for a unique and eye-catching look.",
        "manufacturer": "SilverStyle",
        "ratings": [
          {
            "user": "Customer606",
            "rating": 4.7,
            "comment": "Love the intricate design, very versatile."
          }
        ],
        "design": {
          "style": "Artistic",
          "occasion": "Casual",
          "collection": "Silver Artistry"
        },
        "dimensions": {
          "diameter": 2.6,
          "width": 0.5,
          "thickness": 0.2
        },
        "images": "silver_twisted_cuff.jpeg"
      }
    ]
  },
  ,
  {
    id: 3,
    title: 'Pendants',
    path: '/products/Pendants',
    types: [{
      "name": "Solitaire Pendants"
    },
    {
      "name": "Pendants"
    }],
    "SolitairePendants": [
      {
        "id": 1,
        "name": "Classic Round Diamond Pendant",
        "metal": "White Gold",
        "discount":14,
        "diamond": {
          "shape": "Round",
          "carat": 0.75,
          "color": "E",
          "clarity": "VS1",
          "cut": "Excellent"
        },
        "price": 332999,
        "availability": true,
        "description": "Timeless white gold pendant featuring a brilliant round-cut diamond.",
        "chainLength": "18 inches",
        "images": "classic_round_diamond_pendant.jpeg",
        "reviews": [
          {
            "user": "DiamondFanatic123",
            "rating": 5,
            "comment": "Absolutely beautiful! The diamond sparkles remarkably."
          },
          {
            "user": "ElegantAdmirer",
            "rating": 4,
            "comment": "Classic design, great addition to my jewelry collection."
          }
        ],
       },
      {
        "id": 2,
        "name": "Heart-Shaped Rose Gold Pendant",
        "metal": "Rose Gold",
        "diamond": {
          "shape": "Heart",
          "carat": 1.0,
          "color": "D",
          "clarity": "VVS2",
          "cut": "Very Good"
        },
        "price": 196700,
        "availability": false,
        "description": "Romantic rose gold pendant featuring a heart-shaped diamond.",
        "chainLength": "20 inches",
        "images": "heart_shaped_rose_gold_pendant.jpeg",
        "reviews": [
          {
            "user": "RomanceSeeker",
            "rating": 5,
            "comment": "Adorable heart pendant! Perfect gift for a loved one."
          },
          {
            "user": "RoseGoldEnthusiast",
            "rating": 3,
            "comment": "Lovely design, but the chain is a bit delicate."
          }
        ],
        },
      {
        "id": 3,
        "name": "Princess-Cut Yellow Gold Pendant",
        "metal": "Yellow Gold",
        "diamond": {
          "shape": "Princess",
          "carat": 0.85,
          "color": "G",
          "clarity": "SI1",
          "cut": "Good"
        },
        "price": 162960,
        "availability": true,
        "description": "Bold yellow gold pendant featuring a dazzling princess-cut diamond.",
        "chainLength": "22 inches",
        "images": "princess_cut_yellow_gold_pendant.jpeg",
        "reviews": [
          {
            "user": "BoldBeauty123",
            "rating": 4,
            "comment": "Love the bold design! The princess-cut diamond is stunning."
          },
          {
            "user": "SunshineGlow",
            "rating": 4,
            "comment": "Beautiful, but the chain length is shorter than expected."
          }
        ],
       },
      {
        "id": 4,
        "name": "Elegant Marquise Diamond Pendant",
        "metal": "Platinum",
        "diamond": {
          "shape": "Marquise",
          "carat": 1.2,
          "color": "F",
          "clarity": "VS2",
          "cut": "Excellent"
        },
        "price": 102697,
        "availability": true,
        "description": "Exquisite platinum pendant featuring an elegant marquise-cut diamond.",
        "chainLength": "18 inches",
        "images": "elegant_marquise_diamond_pendant.jpeg",
        "reviews": [
          {
            "user": "EleganceSeeker456",
            "rating": 5,
            "comment": "Absolutely elegant! The marquise diamond is breathtaking."
          },
          {
            "user": "PlatinumLover",
            "rating": 4,
            "comment": "Beautiful craftsmanship, worth the investment."
          }
        ],
       },
      {
        "id": 5,
        "name": "Sapphire Halo White Gold Pendant",
        "metal": "White Gold",
        "discount":11,
        "diamond": {
          "shape": "Round",
          "carat": 0.5,
          "color": "G",
          "clarity": "SI1",
          "cut": "Very Good"
        },
        "gemstone": "Blue Sapphire",
        "price": 126184,
        "availability": true,
        "description": "Charming white gold pendant with a round-cut diamond surrounded by a halo of blue sapphires.",
        "chainLength": "20 inches",
        "images": "sapphire_halo_white_gold_pendant.jpeg",
        "reviews": [
          {
            "user": "GemstoneAdmirer",
            "rating": 5,
            "comment": "The blue sapphires add a touch of elegance. Love it!"
          },
          {
            "user": "HaloLover",
            "rating": 4,
            "comment": "Unique design, great combination of diamond and sapphires."
          }
        ],
      },
      {
        "id": 6,
        "name": "Vintage Emerald-Cut Pendant",
        "metal": "Yellow Gold",
        "diamond": {
          "shape": "Emerald",
          "carat": 1.8,
          "color": "H",
          "clarity": "SI2",
          "cut": "Good"
        },
        "price": 177650,
        "availability": false,
        "description": "Vintage-inspired yellow gold pendant featuring an emerald-cut diamond.",
        "chainLength": "22 inches",
        "images": "vintage_emerald_cut_pendant.jpeg",
        "reviews": [
          {
            "user": "VintageCharm",
            "rating": 5,
            "comment": "Love the vintage vibe! The emerald-cut diamond is mesmerizing."
          },
          {
            "user": "YellowGoldFanatic",
            "rating": 3,
            "comment": "Beautiful design, but the pendant is a bit heavy."
          }
        ],
        },
      {
        "id": 7,
        "name": "Pear-Shaped Diamond Cluster Pendant",
        "metal": "Rose Gold",
        "diamond": {
          "shape": "Pear",
          "carat": 1.5,
          "color": "D",
          "clarity": "VVS1",
          "cut": "Excellent"
        },
        "price": 104996,
        "availability": true,
        "description": "Graceful rose gold pendant featuring a cluster of pear-shaped diamonds.",
        "chainLength": "18 inches",
        "images": "pear_shaped_diamond_cluster_pendant.jpeg",
        "reviews": [
          {
            "user": "GracefulAdmirer",
            "rating": 4,
            "comment": "The cluster of diamonds adds a touch of grace. Beautiful pendant!"
          },
          {
            "user": "RoseGoldCharm",
            "rating": 5,
            "comment": "Absolutely charming! Love the pear-shaped diamonds."
          }
        ],
       },
      {
        "id": 8,
        "name": "Cushion-Cut Platinum Pendant",
        "metal": "Platinum",
        "diamond": {
          "shape": "Cushion",
          "carat": 1.2,
          "color": "E",
          "clarity": "VS2",
          "cut": "Very Good"
        },
        "price": 100408,
        "availability": true,
        "description": "Sophisticated platinum pendant featuring a cushion-cut diamond.",
        "chainLength": "20 inches",
        "images": "cushion_cut_platinum_pendant.jpeg",
        "reviews": [
          {
            "user": "SophisticatedStyle",
            "rating": 5,
            "comment": "A sophisticated piece! The cushion-cut diamond is stunning."
          },
          {
            "user": "PlatinumLover123",
            "rating": 4,
            "comment": "Great craftsmanship, comfortable to wear."
          }
        ],
      },
      {
        "id": 9,
        "name": "Oval Diamond Halo Pendant",
        "metal": "White Gold",
        "diamond": {
          "shape": "Oval",
          "carat": 1.0,
          "color": "F",
          "clarity": "SI1",
          "cut": "Good"
        },
        "discount":7,
        "price": 202951,
        "availability": false,
        "description": "Captivating white gold pendant featuring an oval-cut diamond surrounded by a halo.",
        "chainLength": "22 inches",
        "images": "oval_diamond_halo_pendant.jpeg",
        "reviews": [
          {
            "user": "CaptivatingElegance",
            "rating": 4,
            "comment": "The oval diamond with halo is truly captivating."
          },
          {
            "user": "HaloLover456",
            "rating": 3,
            "comment": "Beautiful design, but the chain is delicate."
          }
        ],
      },
      {
        "id": 10,
        "name": "Radiant-Cut Diamond Drop Pendant",
        "metal": "Yellow Gold",
        "diamond": {
          "shape": "Radiant",
          "carat": 1.3,
          "color": "G",
          "clarity": "VS1",
          "cut": "Excellent"
        },
        "price": 165851,
        "availability": true,
        "description": "Eye-catching yellow gold pendant featuring a radiant-cut diamond in a drop setting.",
        "chainLength": "18 inches",
        "images": "radiant_cut_diamond_drop_pendant.jpeg",
        "reviews": [
          {
            "user": "EyeCatcher",
            "rating": 5,
            "comment": "Truly an eye-catching piece! The radiant-cut diamond is stunning."
          },
          {
            "user": "YellowGoldAdmirer",
            "rating": 4,
            "comment": "Beautiful design, love the drop setting."
          }
        ],
      }
    ],
    "Pendants": [
      {
        "id": 1,
        "name": "Crystal Teardrop Pendant",
        "material": "Crystal",
        "color": "Clear",
        "price": 568800,
        "in_stock": true,
        "description": "Elegant teardrop-shaped crystal pendant with a silver chain.",
        "manufacturer": "CrystalCrafters",
        "ratings": [
          {
            "user": "Customer123",
            "rating": 4.5,
            "comment": "Beautiful design, great quality."
          },
          {
            "user": "Customer456",
            "rating": 5,
            "comment": "Absolutely stunning!"
          }
        ],
        "design": {
          "style": "Classic",
          "occasion": "Formal",
          "collection": "Crystal Elegance"
        },
        "dimensions": {
          "length": 2.5,
          "width": 1.5,
          "thickness": 0.3
        },
        "images": "crystal-teardrop_pendant.jpeg"
      },
      {
        "id": 2,
        "name": "Silver Heart Locket",
        "material": "Silver",
        "discount":12,
        "color": "Silver",
        "price": 103670,
        "in_stock": false,
        "description": "Heart-shaped locket crafted from sterling silver, perfect for keeping cherished photos close to your heart.",
        "manufacturer": "SilverCreations",
        "ratings": [],
        "design": {
          "style": "Romantic",
          "occasion": "Casual",
          "collection": "Heartfelt Memories"
        },
        "dimensions": {
          "length": 2,
          "width": 1.8,
          "thickness": 0.4
        },
        "images": "silver_heart_locket.jpeg"
      },
      {
        "id": 3,
        "name": "Rose Gold Initial Pendant",
        "material": "Rose Gold",
        "color": "Rose Gold",
        "price": 215840,
        "in_stock": true,
        "description": "Personalized rose gold pendant with your chosen initial, a unique and stylish accessory.",
        "manufacturer": "RoseGoldDesigns",
        "ratings": [
          {
            "user": "Customer789",
            "rating": 4,
            "comment": "Love the personalization, but a bit pricey."
          }
        ],
        "design": {
          "style": "Modern",
          "occasion": "Everyday",
          "collection": "Personalized Elegance"
        },
        "dimensions": {
          "length": 1.8,
          "width": 1.5,
          "thickness": 0.2
        },
        "images": "rose_gold_initial_pendant.jpeg"
      },
      {
        "id": 4,
        "name": "Diamond Halo Pendant",
        "material": "White Gold",
        "color": "White",
        "price": 114999,
        "in_stock": true,
        "description": "Exquisite white gold pendant featuring a dazzling diamond halo design.",
        "manufacturer": "LuxuryGems",
        "ratings": [
          {
            "user": "Customer567",
            "rating": 5,
            "comment": "Absolutely breathtaking! Worth every penny."
          }
        ],
        "design": {
          "style": "Luxurious",
          "occasion": "Special Occasion",
          "collection": "Diamond Elegance"
        },
        "dimensions": {
          "length": 2.2,
          "width": 1.7,
          "thickness": 0.5
        },
        "images": "diamond_halo_pendant.jpeg",
      },
      {
        "id": 5,
        "name": "Emerald Drop Pendant",
        "material": "Yellow Gold",
        "color": "Green",
        "price": 249000,
        "in_stock": true,
        "description": "Elegant yellow gold pendant with a hanging emerald drop, perfect for a touch of sophistication.",
        "manufacturer": "GemCraftsmanship",
        "ratings": [],
        "design": {
          "style": "Timeless",
          "occasion": "Evening Event",
          "collection": "Precious Gemstones"
        },
        "discount":4,
        "dimensions": {
          "length": 2.8,
          "width": 1.2,
          "thickness": 0.4
        },
        "images": "emerald_drop_pendant.jpeg"
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
        "name": "Classic Round Diamond Ring",
        "metal": "Platinum",
        "diamond": {
          "shape": "Round",
          "carat": 1.5,
          "color": "D",
          "clarity": "VVS1",
          "cut": "Excellent"
        },
        "price": 115392,
        "availability": true,
        "size": 6,
        "description": "Timeless and elegant platinum ring featuring a brilliant round-cut diamond.",
        "images": "classic_round_diamond_ring.jpeg",
        "reviews": [
          {
            "user": "DiamondLover123",
            "rating": 5,
            "comment": "Absolutely stunning! The diamond sparkles beautifully."
          },
          {
            "user": "EleganceSeeker",
            "rating": 4,
            "comment": "Classic design, great value for money."
          }
        ]
      },
      {
        "id": 2,
        "name": "Princess-Cut White Gold Ring",
        "metal": "White Gold",
        "diamond": {
          "shape": "Princess",
          "carat": 2.0,
          "color": "E",
          "clarity": "VS2",
          "cut": "Very Good"
        },
        "price": 325700,
        "availability": false,
        "discount":10,
        "size": 7,
        "description": "Modern and sophisticated white gold ring featuring a princess-cut diamond.",
        "images": "princess_cut_white_gold_ring.jpeg",
        "reviews": [
          {
            "user": "ModernBride",
            "rating": 5,
            "comment": "Love the contemporary design! The diamond is brilliant."
          },
          {
            "user": "JewelryEnthusiast",
            "rating": 3,
            "comment": "Beautiful, but the sizing runs a bit small."
          }
        ]
      },
      {
        "id": 3,
        "name": "Oval Diamond Rose Gold Ring",
        "metal": "Rose Gold",
        "diamond": {
          "shape": "Oval",
          "carat": 1.8,
          "color": "F",
          "clarity": "SI1",
          "cut": "Good"
        },
        "price": 1105600,
        "availability": true,
        "size": 6.5,
        "description": "Romantic rose gold ring featuring a captivating oval-cut diamond.",
        "images": "oval_diamond_rose_gold_ring.jpeg",
        "reviews": [
          {
            "user": "RomanticSoul",
            "rating": 4,
            "comment": "Lovely design and the rose gold adds a touch of romance."
          },
          {
            "user": "DiamondFanatic",
            "rating": 5,
            "comment": "The oval diamond is unique and breathtaking."
          }
        ]
      },
      {
        "id": 5,
        "name": "Radiant-Cut Yellow Gold Ring",
        "metal": "Yellow Gold",
        "diamond": {
          "shape": "Radiant",
          "carat": 2.2,
          "color": "H",
          "clarity": "SI2",
          "cut": "Good"
        },
        "price": 287000,
        "discount":13,
        "availability": true,
        "size": 7,
        "description": "Bold yellow gold ring featuring a dazzling radiant-cut diamond.",
        "images": "radiant_cut_yellow_gold_ring.jpeg",
        "reviews": [
          {
            "user": "BoldBeauty",
            "rating": 5,
            "comment": "Love the bold design! The radiant-cut diamond is breathtaking."
          },
          {
            "user": "SunshineGlow",
            "rating": 4,
            "comment": "Beautiful, but the yellow gold is a bit softer than expected."
          }
        ]
      },
      {
        "id": 6,
        "name": "Pear-Shaped Rose Gold Ring",
        "metal": "Rose Gold",
        "diamond": {
          "shape": "Pear",
          "carat": 1.7,
          "color": "F",
          "clarity": "VS1",
          "cut": "Excellent"
        },
        "price": 363902,
        "availability": true,
        "size": 6.5,
        "description": "Charming rose gold ring featuring a pear-shaped diamond with excellent brilliance.",
        "images": "pear_shaped_rose_gold_ring.jpeg",
        "reviews": [
          {
            "user": "CharmAdmirer",
            "rating": 5,
            "comment": "The pear-shaped diamond adds a touch of charm. Beautiful ring!"
          },
          {
            "user": "RoseGoldLover",
            "rating": 4,
            "comment": "Lovely design, but the size runs a bit small."
          }
        ],
      },
    ],

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
        "name": "Crystal Drop Earrings",
        "material": "Silver",
        "gemstone": "Swarovski Crystal",
        "color": "Clear",
        "price": 10500,
        "availability": true,
        "dimensions": {
          "length": "2 inches",
          "width": "0.5 inches"
        },
        "weight": "0.2 ounces",
        "description": "Elegant silver earrings with sparkling Swarovski crystals, perfect for special occasions.",
        "images": "crystal_drop_earrings.jpeg",
        "reviews": [
          {
            "user": "Customer123",
            "rating": 5,
            "comment": "Absolutely stunning! Great quality."
          },
          {
            "user": "EarringLover",
            "rating": 4,
            "comment": "Lovely design, but a bit heavier than expected."
          }
        ],
       },
      {
        "id": 2,
        "name": "Gold Hoop Earrings",
        "material": "Gold-plated",
        "style": "Hoop",
        "price": 25600,
        "availability": false,
        "dimensions": {
          "diameter": "1.5 inches",
          "thickness": "0.1 inches"
        },
        "weight": "0.15 ounces",
        "description": "Classic gold-plated hoop earrings, suitable for everyday wear.",
        "images": "gold_hoop_earrings.jpeg",
        "reviews": [
          {
            "user": "Fashionista21",
            "rating": 5,
            "comment": "Love these hoops! Simple and stylish."
          },
          {
            "user": "JewelryFanatic",
            "rating": 3,
            "comment": "Nice, but the closure is a bit tricky."
          }
        ]
      },
      {
        "id": 3,
        "name": "Pearl Stud Earrings",
        "material": "Sterling Silver",
        "gemstone": "Freshwater Pearl",
        "discount":12,
        "color": "White",
        "price": 47999,
        "availability": true,
        "dimensions": {
          "diameter": "0.3 inches"
        },
        "weight": "0.1 ounces",
        "description": "Delicate sterling silver stud earrings with lustrous freshwater pearls.",
        "images": "pearl_stud_earrings.jpeg",
        "reviews": [
          {
            "user": "PearlLover",
            "rating": 5,
            "comment": "Beautiful pearls! Very pleased with my purchase."
          },
          {
            "user": "SimpleElegance",
            "rating": 4,
            "comment": "Lovely design, but the posts are a bit short."
          }
        ]
      }
    ]
  }

];
