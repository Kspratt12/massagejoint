export interface ServicePrice {
  duration: string;
  price: string;
}

export interface Service {
  name: string;
  description: string;
  prices: ServicePrice[];
  note?: string;
  image?: string;
}

export interface ServiceCategory {
  category: string;
  id: string;
  description?: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    category: "Massage",
    id: "massage",
    description: "To schedule dual massage and skincare appointments, please call or text 919-624-9864.",
    services: [
      {
        name: "Swedish",
        description: "Soft, long, kneading strokes and light, rhythmic strokes on the uppermost layers of muscles to promote relaxation and release tension.",
        prices: [
          { duration: "30 min", price: "$45" },
          { duration: "60 min", price: "$85" },
          { duration: "90 min", price: "$115" },
          { duration: "120 min", price: "$160" },
        ],
      },
      {
        name: "Deep Tissue",
        description: "Slow, firm strokes and sustained pressure to target tension in the connective tissues and inner layers of muscles.",
        prices: [
          { duration: "30 min", price: "$50" },
          { duration: "60 min", price: "$95" },
          { duration: "90 min", price: "$125" },
          { duration: "120 min", price: "$170" },
        ],
      },
      {
        name: "Prenatal",
        description: "Focuses on the special needs of a mother-to-be as her body goes through the changes of pregnancy and prepares her for labor and delivery.",
        prices: [
          { duration: "30 min", price: "$45" },
          { duration: "60 min", price: "$85" },
          { duration: "90 min", price: "$115" },
        ],
      },
      {
        name: "Trigger Point",
        description: "The application of pressure to tender muscle tissue in order to relieve pain and dysfunction in other parts of the body.",
        prices: [
          { duration: "30 min", price: "$50" },
          { duration: "60 min", price: "$95" },
          { duration: "90 min", price: "$125" },
        ],
      },
      {
        name: "Lymphatic",
        description: "Rhythmic strokes that encourage the movement of lymph fluids. This service is not a post-surgical lymphatic drainage treatment.",
        prices: [
          { duration: "30 min", price: "$50" },
          { duration: "60 min", price: "$95" },
          { duration: "90 min", price: "$125" },
        ],
      },
      {
        name: "Himalayan Stones",
        description: "Your favorite massage modality enhanced with heated Himalayan salt stones to increase blood circulation, relieve tension, exfoliate skin, and allow the body to absorb beneficial minerals.",
        prices: [
          { duration: "30 min", price: "$75+" },
          { duration: "60 min", price: "$115+" },
          { duration: "90 min", price: "$145+" },
          { duration: "120 min", price: "$190+" },
        ],
        image: "/images/services/himalayan-stones.png",
      },
      {
        name: "Table Thai",
        description: "Traditional Thai techniques including compression and stretching with deep pressure and Swedish techniques to improve joint range of motion and flexibility. Wear loose, comfortable clothing.",
        prices: [
          { duration: "60 min", price: "$100" },
          { duration: "90 min", price: "$130" },
        ],
      },
      {
        name: "Stretch",
        description: "Specific assisted stretching techniques to increase mobility and flexibility of a muscle or group of muscles.",
        prices: [
          { duration: "30 min", price: "$45" },
          { duration: "60 min", price: "$85" },
        ],
      },
    ],
  },
  {
    category: "Skincare",
    id: "skincare",
    services: [
      {
        name: "Custom Facial",
        description: "Custom facials begin with a consultation, facial cleanser, and skin analysis to determine the best treatment methods and products for the client's skin type and skincare goals.",
        note: "Includes heated table and mitts, steam and hot towels, product and mask application, facial, hand and arm or scalp massage, and LED light therapy. Hale & Hush skincare line is formulated for sensitive and health-challenged skin.",
        prices: [
          { duration: "30 min", price: "$85" },
          { duration: "60 min", price: "$115" },
          { duration: "90 min", price: "$145" },
        ],
        image: "/images/services/custom-facials.png",
      },
      {
        name: "Anti-Aging Facial",
        description: "Intended to hydrate, improve skin texture, promote collagen production, reduce and prevent fine lines, wrinkles, and age spots while also promoting relaxation.",
        note: "Includes elements of the custom facial, extended anti-aging facial massage, gua sha lymphatic drainage, and marble rollers.",
        prices: [
          { duration: "30 min", price: "$85" },
          { duration: "60 min", price: "$115" },
          { duration: "90 min", price: "$145" },
        ],
      },
      {
        name: "Diamond Microdermabrasion",
        description: "Diamond-tipped wand and suction used to exfoliate, remove dead skin cells and congestion, and promote cell turnover and collagen production. Recommended for fine lines, wrinkles, hyperpigmentation, blackheads, and more.",
        note: "Includes all elements of a custom facial, diamond tip microdermabrasion on areas of concern, and a complimentary oxygen infusion treatment.",
        prices: [
          { duration: "90 min", price: "$185" },
        ],
      },
      {
        name: "Dermaplaning",
        description: "Non-invasive manual exfoliation using a scalpel to remove dead skin cells and vellus hair (peach fuzz) to improve skin texture, address fine lines, acne scars, and allow for smoother makeup application.",
        prices: [
          { duration: "A la carte", price: "$50" },
          { duration: "60 min custom facial + dermaplaning", price: "$160" },
        ],
      },
    ],
  },
  {
    category: "Brows, Lashes & More",
    id: "brows-lashes",
    services: [
      {
        name: "Lash Lift & Tint",
        description: "Perming solution is applied to the lashes, enhancing natural lash curl and making lashes appear longer and fuller. Results last 6 to 8 weeks.",
        prices: [
          { duration: "No tint", price: "$75" },
          { duration: "With tint", price: "$85" },
        ],
      },
      {
        name: "Brow Lamination & Tint",
        description: "Perming solution is applied to the brows to make thin brows appear fuller or tame thick, unruly brow hairs. Includes waxing and shaping. Results last 6 to 8 weeks.",
        prices: [
          { duration: "No tint", price: "$85" },
          { duration: "With tint", price: "$95" },
        ],
      },
    ],
  },
  {
    category: "Hair Removal",
    id: "hair-removal",
    description: "Wax-free and sugar-free. Nufree is a soy-based hair removal product and a natural antibacterial. It sticks only to hair, not skin, which makes it less painful and leaves less redness and swelling.",
    services: [
      {
        name: "Hair Removal",
        description: "Gentle, effective hair removal using Nufree soy-based formula.",
        prices: [
          { duration: "Brows", price: "$20" },
          { duration: "Lip", price: "$12" },
          { duration: "Chin", price: "$12" },
          { duration: "Sideburns", price: "$15" },
          { duration: "Whole Face", price: "$50" },
          { duration: "Underarms", price: "$22" },
          { duration: "Arms", price: "$50" },
        ],
      },
    ],
  },
  {
    category: "Enhancements",
    id: "enhancements",
    services: [
      {
        name: "Peppermint Scalp Treatment",
        description: "Peppermint essential oil plus scalp massage is refreshing, relaxing, and promotes hair growth. Incorporated into treatment time.",
        prices: [
          { duration: "Add-on", price: "$15" },
        ],
      },
      {
        name: "Cold Stones",
        description: "Smooth chilled stones used to reduce inflammation, relieve face and jaw tension, and assist in migraine management.",
        prices: [
          { duration: "Add-on", price: "$15" },
        ],
        image: "/images/services/cold-stones.png",
      },
    ],
  },
];

export const featuredServices = [
  {
    name: "Deep Tissue Massage",
    benefit: "Targeted relief for chronic tension and pain through slow, firm pressure on deeper muscle layers.",
    startingPrice: "From $50",
    image: "/images/services/cold-stones.png",
    bookingUrl: "https://themassagejointapex.clinicsense.com/book",
  },
  {
    name: "Swedish Massage",
    benefit: "Classic relaxation therapy using gentle, flowing strokes to ease stress and restore calm.",
    startingPrice: "From $45",
    image: "/images/services/himalayan-stones.png",
    bookingUrl: "https://themassagejointapex.clinicsense.com/book",
  },
  {
    name: "Custom Facial",
    benefit: "Personalized skincare treatment with LED light therapy, steam, and products tailored to your skin.",
    startingPrice: "From $85",
    image: "/images/services/custom-facials.png",
    bookingUrl: "https://themassagejointapex.clinicsense.com/book",
  },
  {
    name: "Prenatal Massage",
    benefit: "Nurturing bodywork designed for the unique needs of expectant mothers through every stage.",
    startingPrice: "From $45",
    image: "/images/services/scalp-facials.png",
    bookingUrl: "https://themassagejointapex.clinicsense.com/book",
  },
  {
    name: "Dermaplaning",
    benefit: "Reveal smoother, brighter skin by gently removing dead cells and peach fuzz for a luminous finish.",
    startingPrice: "From $50",
    image: "/images/services/facial.png",
    bookingUrl: "https://themassagejointapex.clinicsense.com/book",
  },
  {
    name: "Lash Lift & Tint",
    benefit: "Enhance your natural lashes with a lasting curl and tint that lasts up to 8 weeks.",
    startingPrice: "From $75",
    image: "/images/services/facial2.png",
    bookingUrl: "https://themassagejointapex.clinicsense.com/book",
  },
];

export const chairMassageInfo = {
  title: "Chair Massage & Events",
  services: ["Employee Appreciation", "Pop-Up Events", "Parties"],
  cta: "Email, call, or text for a quote.",
};

export const cancellationPolicy = {
  text: "Same-day cancellations and no-calls/no-shows are subject to a 100% fee. Fee must be paid prior to scheduling future appointments or future appointments will be forfeited.",
  contact: "Call or text 919-624-9864 if you need to cancel within 12 hours of your scheduled appointment.",
};
