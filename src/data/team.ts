export interface TeamMember {
  name: string;
  title: string;
  license: string;
  certifications: string;
  specialties: string;
  bio: string;
  image: string;
  bookingUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Peter Kerr",
    title: "Licensed Massage & Bodywork Therapist",
    license: "LMBT 13771",
    certifications: "Certified in Swedish, deep tissue, prenatal, PNMT for shoulders, stretching, and more.",
    specialties: "Pain & Migraine Management, Injury Rehabilitation, TMJ Symptom Relief, Stretching, Relaxation",
    bio: "Peter brings years of experience and deep anatomical knowledge to every session. Known for his ability to identify and address the root cause of pain, he combines therapeutic precision with genuine care. Whether you are recovering from an injury, managing chronic migraines, or simply need to unwind, Peter creates a treatment plan tailored to your body and goals.",
    image: "/images/team/peter-kerr.png",
    bookingUrl: "https://themassagejointapex.clinicsense.com/book",
  },
  {
    name: "Leah Ramsey",
    title: "Licensed Massage & Bodywork Therapist",
    license: "LMBT 17931",
    certifications: "Certified in Swedish, deep tissue, trigger point, prenatal, PNMT for shoulders, and more.",
    specialties: "Neck Work, Pain & Injury Management",
    bio: "Leah is known for her intuitive approach to bodywork and her exceptional focus on neck and upper body tension. With advanced training in trigger point therapy and deep tissue techniques, she excels at relieving stubborn pain patterns and helping clients regain comfort and mobility.",
    image: "/images/team/leah-ramsey.png",
    bookingUrl: "https://themassagejointapex.clinicsense.com/book",
  },
  {
    name: "Skye Collins",
    title: "Licensed Massage & Bodywork Therapist",
    license: "LMBT 14608",
    certifications: "Certified in Swedish, deep tissue, prenatal, Table Thai massage, and more.",
    specialties: "Pain & Migraine Management, TMJ Symptom Relief, Relaxation",
    bio: "Skye offers a calming, restorative experience with every session. Her expertise spans from deep therapeutic work for pain and migraine relief to gentle relaxation techniques that leave you feeling completely renewed. She is also trained in Table Thai massage, making her an excellent choice for clients seeking improved flexibility.",
    image: "/images/team/skye-collins.png",
    bookingUrl: "https://themassagejointapex.clinicsense.com/book",
  },
  {
    name: "Emily Erkert",
    title: "Licensed Esthetician",
    license: "Esthetician 26032",
    certifications: "Certified in esthetics, dermaplaning, oxygen infusion, hair removal, and more.",
    specialties: "Custom Facials, Lash Lifts, Brow Lamination & Shaping",
    bio: "Emily brings warmth, precision, and a genuine passion for skincare to every treatment. From custom facials that address your unique skin concerns to expert lash lifts and brow shaping, she combines technical skill with a relaxing, attentive approach. Clients love her attention to detail and the glowing results they see after every visit.",
    image: "/images/team/emily.png",
    bookingUrl: "https://themassagejointapex.clinicsense.com/book",
  },
];
