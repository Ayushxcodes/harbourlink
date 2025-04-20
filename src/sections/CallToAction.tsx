"use client";

import { motion, useAnimate, AnimationPlaybackControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Static imports
import image1 from "@/assets/images/imag1.png";
import image2 from "@/assets/images/imag2.png";
import image3 from "@/assets/images/imag3.png";
import image4 from "@/assets/images/imag4.png";
import image5 from "@/assets/images/imag5.png";
import image6 from "@/assets/images/imag6.png";
import image7 from "@/assets/images/imag7.png";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls | null>(null);
    const [scope, animate] = useAnimate();

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
    ];

    useEffect(() => {
        if (scope.current) {
            animation.current = animate(
                scope.current,
                { x: ["0%", "-50%"] },
                {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }
            );
        }
    }, [scope, animate]);

    useEffect(() => {
        if (animation.current) {
            animation.current.speed = isHovered ? 0.5 : 1;
        }
    }, [isHovered]);

    return (
        <section className="py-24">
            <div className="overflow-x-hidden px-4">
                <motion.div
                    ref={scope}
                    className="flex w-max gap-16 pr-16 cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Duplicate images to create seamless loop */}
                    {[...images, ...images].map((img, i) => (
                        <Image
                            key={i}
                            src={img}
                            alt={`Image ${i + 1}`}
                            width={150}
                            height={150}
                            className="object-cover rounded-xl"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
