export interface Review {
  name: string;
  badge?: string;
  reviewCount?: string;
  timeAgo: string;
  priceTag?: string;
  text: string;
  hasPhotos?: boolean;
  photoCount?: number;
  photos?: string[];
  hasVideo?: boolean;
  videoSrc?: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    name: "Katie McCracken",
    reviewCount: "8 reviews",
    timeAgo: "a month ago",
    priceTag: "Great price",
    text: "Best massages consistently I've had in the triangle. I'm a hooked regular. After my first one I rescheduled at the appointment knowing I would need it at this point in the year.",
    rating: 5,
  },
  {
    name: "Sydney Hodgson",
    reviewCount: "2 reviews",
    timeAgo: "3 months ago",
    priceTag: "Great price",
    text: "Emily is by far the best esthetician I've ever had!!! I got a scalp facial, and my treatment was so relaxing I literally fell asleep, which never happens. Emily makes sure you feel comfortable, gives different options for your treatment.",
    rating: 5,
  },
  {
    name: "Marci Watson",
    reviewCount: "6 reviews",
    timeAgo: "6 months ago",
    text: "Incredible massage by Leah! The Massage Joint had a very clean and peaceful ambiance. I arrived stressed with tension in my upper back and left feeling lighter and refreshed. She was excellent at targeting a painful knot in my back. Overall, very happy with my experience!",
    rating: 5,
  },
  {
    name: "Danielle King",
    badge: "Local Guide",
    reviewCount: "172 reviews",
    timeAgo: "7 months ago",
    text: "The Massage Joint is great, reasonable prices in a good location. Peter is an amazing massage therapist, it's like seeing a physical therapist while still getting a relaxing massage; he changes it up depending on where I'm having issues.",
    rating: 5,
  },
  {
    name: "Mariani Fam",
    badge: "Local Guide",
    reviewCount: "60 reviews",
    timeAgo: "a year ago",
    text: "I just received a derma-plane facial and it was relaxing and gentle. Emily was superb and offered a shoulder and scalp massage while my masks set. I highly recommend getting the peppermint oil during the scalp massage, it smelled phenomenal!",
    rating: 5,
    hasVideo: true,
    videoSrc: "/images/reviews/mariani-fam-review.mp4",
  },
  {
    name: "Courtney Cullen",
    badge: "Local Guide",
    reviewCount: "14 reviews",
    timeAgo: "4 years ago",
    text: "I highly recommend The Massage Joint! I booked last minute for a NEEDED hour of relief. Peter was kind, professional and thorough! My upper back and neck were super tight and he loosened things up beautifully. Tension headache be gone!",
    rating: 5,
    hasPhotos: true,
    photoCount: 3,
    photos: [
      "/images/reviews/courtney-cullen-review.png",
      "/images/reviews/courtney-cullen-review2.png",
      "/images/reviews/courtney-cullen-review3.png",
    ],
  },
  {
    name: "Heather Pinney",
    badge: "Local Guide",
    reviewCount: "16 reviews",
    timeAgo: "a month ago",
    priceTag: "Reasonable price",
    text: "Leah listens and then gets to work on my 'problem areas' while attending to all areas of my body. Her deep tissue massages are comprehensive which allows me to stay physically active.",
    rating: 5,
  },
  {
    name: "Robert Amarante",
    badge: "Local Guide",
    reviewCount: "65 reviews",
    timeAgo: "7 months ago",
    priceTag: "Reasonable price",
    text: "Very professional, friendly, courteous staff. The Massage Joint offers many services and it's very easy to use the online booking system. They have a consumer-friendly rewards program as well. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amanda Madison",
    badge: "Local Guide",
    reviewCount: "51 reviews",
    timeAgo: "a year ago",
    text: "I had the best facial experience with Emily. We went over my goals from the treatment and she chose perfectly for my skin type. It's been a week and my skin is still glowing. She recommended their aloe jelly mask. I love a jelly mask.",
    rating: 5,
  },
  {
    name: "Cam Baillie",
    badge: "Local Guide",
    reviewCount: "15 reviews",
    timeAgo: "2 months ago",
    text: "I absolutely love The Massage Joint! Everyone is so friendly and accommodating, and they really listen to my needs and develop a treatment plan accordingly. They've also been incredibly helpful if/when I need to reschedule. I can't recommend this place enough! Special thanks to Skye and Peter!!",
    rating: 5,
  },
  {
    name: "Craig Brown",
    reviewCount: "3 reviews",
    timeAgo: "2 years ago",
    text: "I highly recommend The Massage Joint! I see Peter and he is extremely talented, intuitive, and a great communicator. I always get a 90 minute deep tissue massage and his energy never flags! The building is both spotless and serene. This has to be the best place in Apex!",
    rating: 5,
  },
  {
    name: "Sara Borges",
    reviewCount: "2 reviews",
    timeAgo: "2 years ago",
    text: "This is the only place I trust for my massage, and I'm pretty selective about my massage. It's always so relaxing (fall asleep and snore kind of relaxing). So far, I have only seen Peter, but I'm sure they are all great.",
    rating: 5,
  },
  {
    name: "Lora Rogers",
    reviewCount: "4 reviews",
    timeAgo: "4 years ago",
    text: "Peter is the most talented massage therapist I have ever come across. He listens so well and tailors and executes a treatment plan to meet the discussed needs. Not only is he respectful and kind, he is also very knowledgeable and skilled.",
    rating: 5,
  },
  {
    name: "Golfingandy",
    badge: "Local Guide",
    reviewCount: "63 reviews",
    timeAgo: "5 months ago",
    priceTag: "Reasonable price",
    text: "Deep tissue massage was excellent! Skye is the best...highly recommend her!",
    rating: 5,
  },
  {
    name: "Angela Heiser",
    badge: "Local Guide",
    reviewCount: "27 reviews",
    timeAgo: "2 years ago",
    text: "Excellent. They came highly recommended by other local mamas and I can see why. Peter and Leah have been wonderful and relieved my sciatic pain multiple times. Now it's my turn to recommend them to everyone I know.",
    rating: 5,
  },
  {
    name: "Kristen Montgomery",
    badge: "Local Guide",
    reviewCount: "20 reviews",
    timeAgo: "3 years ago",
    text: "I've had massages from Peter, Skye and Leah. I must say they're all absolutely fabulous! I used to be a member at Massage Envy and let me tell ya... There's no comparison here! I had a concussion with pinched nerves and occipital neuralgia.",
    rating: 5,
  },
  {
    name: "Julie DeVita",
    reviewCount: "6 reviews",
    timeAgo: "3 years ago",
    text: "Can not recommend this place enough. I'm pregnant and early on I started getting sciatica very severely. I couldn't even stand without collapsing. My chiro recommended a massage and I found Leah who was certified for prenatal.",
    rating: 5,
  },
  {
    name: "Ashley Marie Hall",
    badge: "Local Guide",
    reviewCount: "56 reviews",
    timeAgo: "2 years ago",
    text: "Had my first massage today with Peter & scheduled my next one before leaving! He listened to all that was needed, was detailed throughout. He found issues with my tissues that I didn't know I had! He was definitely worth driving a round trip of 4 hours for!",
    rating: 5,
  },
  {
    name: "Kristina Faulkner",
    reviewCount: "5 reviews",
    timeAgo: "a year ago",
    text: "Emily was so sweet and over delivered! My experience was absolutely wonderful. The scalp facial was so relaxing, I recommend highly!",
    rating: 5,
  },
  {
    name: "Kirstin Allen",
    reviewCount: "5 reviews",
    timeAgo: "a year ago",
    text: "My boyfriend and I got couples massages here earlier this year and they were so great, the therapist really took the time to find out what areas have been hurting and we left feeling very relaxed. I recently got a facial here and the experience was wonderful.",
    rating: 5,
  },
];

export const reviewStats = {
  totalReviews: 74,
  averageRating: 5.0,
  platform: "Google",
};
