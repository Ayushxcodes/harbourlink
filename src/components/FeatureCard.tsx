import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?:string;
  }) {
    const { title, description, children,className } = props;
  
    return (
      <div className={twMerge("bg-gray-200 border border-gray-400 shadow-sm p-6 rounded-3xl hover:shadow-md transition-shadow duration-200",className)}>
        {/* Icon or illustration slot */}
        <div className="aspect-video">{children}</div>
  
        {/* Text content */}
        <div>
          <h3 className="text-3xl font-medium mt-6 text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600 text-base">{description}</p>
        </div>
      </div>
    );
  }
  