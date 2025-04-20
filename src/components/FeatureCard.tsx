import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const { title, description, children, className } = props;

  return (
    <div
      className={twMerge(
        "bg-gray-200 border border-gray-400 shadow-sm p-6 rounded-3xl hover:shadow-md transition-shadow duration-200 flex flex-col",
        className
      )}
    >
      {/* Only render this if children exist */}
      {children && <div className="mb-4">{children}</div>}

      <div>
        <h3 className="text-3xl font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
}
