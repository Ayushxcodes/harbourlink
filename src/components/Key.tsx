import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props:HTMLAttributes<HTMLDivElement>){
   
   const {className,children,...otherProps} = props;
    return(
        <div className={twMerge("size-14 bg-gray-400 inline-flex items-center justify-center rounded-2xl text-xl text-black font-medium",className)}{...otherProps}>
            {children}
        </div>
    )
}