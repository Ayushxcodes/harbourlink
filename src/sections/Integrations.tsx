import Tag from "@/components/Tag";
import figmaIcon from '@/assets/images/figma-logo.svg';
import notionIcon from '@/assets/images/notion-logo.svg';
import slackIcon from '@/assets/images/slack-logo.svg';
import IntegrationColumn from "@/components/Services";





const integrations = [
    { name: "Ventakesh D. Raju ", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Sumit Sharma", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Peter R. Gomez", icon: slackIcon, description: "Slack is a powerful team communication platform." },
];
export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return <section className="py-24 overflow-hidden">
        <div className="container">
           <div className="grid lg:grid-cols-2 items-center lg:gap-16" >
            <div>
            <Tag>Vision And Our Team</Tag>
            <h2 className="text-6xl font-medium mt-6 ">We have a <span className="text-sky-500">Vision</span></h2>
            <p className="text-black/50 mt-4 text-lg ">
            To become a global catalyst for marine innovation by delivering smart, sustainable, and scalable tech solutions that transform the shipbuilding and maritime industries.
We envision a future where ports are intelligent, ships are greener, and marine operations are seamlessly connected—powering a modern blue economy in sync with India’s Sagarmala vision and global maritime sustainability goals.
</p>
            </div>
            <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <IntegrationColumn integrations={integrations} />
            <IntegrationColumn 
            integrations={integrations.slice().reverse()} className="hidden md:flex" 
            reverse/>
            </div>
            </div>
            </div>
        </div>
    </section>;
}
