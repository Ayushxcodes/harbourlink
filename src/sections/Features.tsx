import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";

// Sample image URLs for the cards
import image1 from '@/assets/images/container1.jpg';
import image2 from '@/assets/images/container2.jpg';
import image3 from '@/assets/images/container3.jpg';

const features = [
  "AI logistics",
  "Predictive maintenance solutions",
  "General environment tracking",
  "Crew management",
  "Operational monitoring",
  "Streamline user interaction",
  "Data-driven waste management systems",
  "Digital procurement ecosystems"
];

export default function Features() {
  return (
    <section id="Services" className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Services</Tag>
        </div>

        <h2 className="text-6xl font-medium text-center mt-6">
          Sailing into the <span className="text-sky-800">Future</span> of Maritime Tech
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {/* First FeatureCard */}
          <FeatureCard
            title="AI & Technology driven Maritime solutions"
            description="AI & technology-driven maritime solutions leverage automation, data analytics, and smart systems to optimize operations at sea. These innovations enhance safety, efficiency, and decision-making across the shipping and logistics industry."
            className="md:col-span-2 lg:col-span-1 group text-center"
          >
            <Image src={image1} alt="AI & Technology" className="w-full h-49 object-cover rounded-lg" />
          </FeatureCard>

          {/* Second FeatureCard */}
          <FeatureCard
            title="Finding Sustainable & Green solutions for Ports by efficient recycling"
            description="Focused on creating sustainable, eco-friendly port operations through efficient waste management and recycling practices. These solutions aim to reduce environmental impact while promoting greener maritime infrastructure."
            className="md:col-span-2 lg:col-span-1 text-center"
          >
            <Image src={image2} alt="Sustainable Ports" className="w-full h-49 object-cover rounded-lg" />
          </FeatureCard>

          {/* Third FeatureCard */}
          <FeatureCard
            title="Research driven innovative solutions for Shipping manufacturers"
            description="Research-driven innovative solutions for shipping manufacturing focus on developing advanced technologies to enhance vessel design and performance. These solutions aim to improve efficiency, sustainability, and cost-effectiveness in the global shipping industry."
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto text-center group"
          >
            <Image src={image3} alt="Innovative Shipping" className="w-full h-49 object-cover rounded-lg" />
          </FeatureCard>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-gray-300 border-sky-500 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
            >
              <span className="bg-sky-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45">&#10038;</span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
