import { TestimonialCard } from "@/components/ui/testimonial-cards";

const getImageUrl = (id: number) => `https://picsum.photos/seed/${id}/200/200`;

const allTestimonials = [
  { id: 1, testimonial: "Load Logic fixed our lead gen. Finally, our bookings are predictable.", author: "Dawit Mekonnen - Agency Founder, Addis", imageSrc: getImageUrl(101) },
  { id: 2, testimonial: "የLoad Logic አውቶሜሽን ስራችንን በጣም አቅልሎልናል። በእውነት ለስኬት ወሳኝ ነው።", author: "Selam Kebede - Operations Lead, Addis", imageSrc: getImageUrl(102) },
  { id: 3, testimonial: "Robel's automated CRM setup brought sanity to our sales process.", author: "Yonas Belay - Sales Director, Addis", imageSrc: getImageUrl(103) },
  { id: 4, testimonial: "ሪፖርት ማድረግ አሁን በጣም ቀላል ሆኗል፣ ሁሉም ነገር በአንድ ቦታ ተደራጅቷል።", author: "Luwam Tesfaye - Account Manager, Addis", imageSrc: getImageUrl(104) },
];

function ShuffleCards() {
  return (
    <div className="py-24 border-t border-white/5 bg-background">
      <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center text-white">
        Trusted by Agencies
      </h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {allTestimonials.map((t) => (
          <div key={t.id} className="bg-surface p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center">
            <img src={t.imageSrc} alt={t.author} className="w-16 h-16 rounded-full mb-4 border border-white/10" />
            <p className="text-sm italic text-muted mb-4 flex-grow">"{t.testimonial}"</p>
            <p className="text-sm font-semibold text-white">{t.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ShuffleCards }
