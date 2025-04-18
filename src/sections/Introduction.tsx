"use client";
import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `At Harbourlink Global, our mission is to revolutionize India's maritime and shipping sectors through cutting-edge technology and smart digital infrastructure. We are a startup driven by innovation, deeply aligned with the vision of the Sagarmala Programme—aiming to modernize port connectivity, streamline logistics, and enhance coastal development.`;
const words = text.split('');
export default function Introduction() {

    const scrollTarget = useRef<HTMLDivElement>(null);

    const{scrollYProgress} = useScroll({target:scrollTarget,offset:['start end','end end']});

    const [currentWord,setCurrentWord] = useState(0);

    const wordIndex = useTransform(scrollYProgress,[0,1],[0,words.length]);

    useEffect(() =>{
        wordIndex.on('change',(latest) =>{
            setCurrentWord(latest);
        })
    },[wordIndex]);

    return <section id="Introduction" className="py-28 lg:py-40">
        <div className="container">
            <div className="sticky top-10 md:top-40 lg:top-40">
            <div className="flex justify-center">
            <Tag>Transforming Maritime Operations with Smart Technology</Tag>
            </div>
            <div className="text-4xl  text-center font-medium mt-10">
                <span>Transforming Maritime Operations with Smart Technology.</span>{" "}
                <span className="text-black">{words.map((word,wordIndex) =>(
                    <span key={wordIndex} className={twMerge("transition duration-500",wordIndex < currentWord && "text-sky-400")}>{`${word}`}</span>
                ))}
                </span>
                <span>Join the next wave of innovation in maritime logistics built for speed, security, and scale.</span>
            </div>
            </div>
            <div className="h-[150vh]" ref={scrollTarget}></div>
        </div>
    </section>;
}
