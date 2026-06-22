import React from "react";
import { CircularTestimonials } from './ui/circular-testimonials';

const testimonials = [
  // 15 Testimonials with Initials instead of faces
  { quote: "Load Logic has completely transformed our workflow.", name: "Dawit Mekonnen", designation: "Agency Founder", src: "" },
  { quote: "Their attention to detail and customer service is unmatched.", name: "Selam Kebede", designation: "Operations Lead", src: "" },
  { quote: "The most reliable agency I have ever worked with.", name: "Yonas Belay", designation: "Sales Director", src: "" },
  { quote: "Innovative solutions that actually deliver results.", name: "Luwam Tesfaye", designation: "Account Manager", src: "" },
  { quote: "Professional, punctual, and highly skilled team.", name: "Meklit Hailu", designation: "Product Manager", src: "" },
  { quote: "A game changer for our business operations.", name: "Kaleb Gebre", designation: "CEO", src: "" },
  { quote: "The best investment we've made this year.", name: "Fikirte Girma", designation: "Marketing Head", src: "" },
  { quote: "Clear communication and flawless execution.", name: "Abebech Tadesse", designation: "HR Director", src: "" },
  { quote: "Exceeded all our expectations!", name: "Tigist Demissie", designation: "Consultant", src: "" },
  { quote: "የLoad Logic አገልግሎት ስራችንን ወደ ሌላ ደረጃ አሳድጎታል።", name: "አስራት ተክሌ", designation: "የንግድ ስራ ባለቤት", src: "" },
  { quote: "በጣም ፈጠራ የተሞላባቸው እና ታማኝ ባለሙያዎች ናቸው።", name: "ዘነበ ወርቁ", designation: "ስራ አስኪያጅ", src: "" },
  { quote: "የእነሱ የስራ ጥራት እጅግ የሚያስደንቅ ነው።", name: "አልማዝ አበበ", designation: "የገበያ ክፍል ሀላፊ", src: "" },
  { quote: "ስራችንን አውቶሜትድ በማድረጋቸው ብዙ ጊዜ ቆጥበናል።", name: "ቴዎድሮስ ብርሃኑ", designation: "የቴክኖሎጂ ዳይሬክተር", src: "" },
  { quote: "ለሁሉም የንግድ ድርጅቶች እመክራቸዋለሁ።", name: "ሰላማዊት አሰፋ", designation: "ምክር ሰጪ", src: "" },
  { quote: "እጅግ በጣም ደስ የሚል እና ፕሮፌሽናል የሆነ አቀራረብ አላቸው።", name: "ኪሮስ ተስፋዬ", designation: "ዳይሬክተር", src: "" },
];

export const CircularTestimonialsDemo = () => (
  <section className="bg-[#050505] p-20 rounded-lg">
    <CircularTestimonials
      testimonials={testimonials}
      autoplay={true}
      colors={{
        name: "#ffffff",
        designation: "#888888",
        testimony: "#ededed",
        arrowBackground: "#1f1f1f",
        arrowForeground: "#ffffff",
        arrowHoverBackground: "#3b82f6",
      }}
      fontSizes={{
        name: "24px",
        designation: "16px",
        quote: "18px",
      }}
    />
  </section>
);
