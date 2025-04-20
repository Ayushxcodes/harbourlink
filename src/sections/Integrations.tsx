import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";

// ✅ Define the type locally
type Integration = {
  name: string;
  description: string;
};

// ✅ Use the type here
const integrations: Integration[] = [
  {
    name: "Ventakesh D. Raju",
    description:
      "He is an experienced Marine Engineer with extensive global exposure. He has worked on diverse vessels, specializing in marine machinery and engineering operations. Known for his technical expertise and reliability, he ensures smooth and efficient ship performance.",
  },
  {
    name: "Sumit Sharma",
    description:
      "He is a seasoned Merchant Navy professional with over 20 years of experience. He has led maritime operations across commercial vessels, focusing on navigation and crew management. Known for his leadership and expertise, he upholds the highest standards in global shipping.",
  },
  {
    name: "Peter R. Gomez",
    description:
      "He is an international expert in maritime affairs with a strong global footprint. He has collaborated with leading maritime companies across the world. His expertise spans policy, operations, and strategic maritime development.",
  },
];

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        {/* Top Section with Text and Heading */}
        <div className="text-center mb-16">
          <Tag>Vision And Our Team</Tag>
          <h2 className="text-6xl font-medium mt-6">
            We have a <span className="text-sky-500">Vision</span>
          </h2>
          <p className="text-black/50 mt-4 text-lg">
            To become a global catalyst for marine innovation by delivering
            smart, sustainable, and scalable tech solutions that transform the
            shipbuilding and maritime industries. We envision a future where
            ports are intelligent, ships are greener, and marine operations are
            seamlessly connected—powering a modern blue economy in sync with
            India’s Sagarmala vision and global maritime sustainability goals.
          </p>
        </div>

        {/* Bottom Section with Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <FeatureCard
              key={index}
              title={integration.name}
              description={integration.description}
              className="flex flex-col justify-between"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
