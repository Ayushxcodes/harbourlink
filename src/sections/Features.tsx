import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard"
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg"
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

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
          Where power meets <span className="text-sky-800">Simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free consulting."
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image src={avatar1} alt="avatar1" className="rounded-full"/>
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image src={avatar2} alt="avatar2" className="rounded-full"/>
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image src={avatar3} alt="avatar3" className="rounded-full"/>
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-sky-400 transition">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                  <Image src={avatar4} alt="Avatar 4" className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"/>
                  {Array.from({length:3}).map((_, i) =>(
                    <span className="size-1.5 rounded-full bg-white inline-flex" key={i}></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Interactive Consultancy"
            description="Engage with intuitive tools designed for maritime ops."
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-black/30 text-center">
                We&apos;ve achieved{" "} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible growth</span> this year
                </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Real-time Solutions"
            description="Instant insights and actions when you need them most."
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-sky-400 transition-all duration-500 group-hover:translate-y-1">Quality</Key>
              <Key className=" outline outline-2 outline-offset-4 outline-transparent group-hover:outline-sky-400 transition-all duration-1000 group-hover:translate-y-1">+</Key>
              <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-sky-400 transition-all duration-1000 group-hover:translate-y-1">Ethic</Key>
            </div>
          </FeatureCard>
        </div>

     
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className=" bg-gray-300 border-sky-500 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
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

