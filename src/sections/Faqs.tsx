"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence,motion } from "framer-motion";

const faqs = [
    {
        question: "How is HarbourLink different from others?",
        answer: "At Harbourlink Global, our mission is to revolutionize India's maritime and shipping sectors through cutting-edge technology and smart digital infrastructure. We are a startup driven by innovation, deeply aligned with the vision of the Sagarmala Programme—aiming to modernize port connectivity, streamline logistics, and enhance coastal development.",
    },
    {
        question: "How can smart digital infrastructure reshape the future of India’s ports and coastal logistics?",
        answer: "Smart infrastructure transforms maritime operations by using AI, IoT, and real-time data to improve cargo tracking, reduce delays, and enhance connectivity. At Harbourlink Global, we’re helping modernize port logistics in line with the Sagarmala Programme—making operations faster, more efficient, and globally competitive",
    },
    {
        question: "What’s the impact of real-time data and automation on greener maritime operations?",
        answer: "Real-time data and automation optimize fuel usage, improve safety, and reduce emissions. Our intelligent systems enable smarter ship design, efficient port operations, and sustainable practices—paving the way for a cleaner, more cost-effective maritime industry.",
    },
    {
        question: "Can India lead the global blue economy through marine tech",
        answer: "Yes—India is poised to lead with the right innovation. Harbourlink Global is building the future of maritime through smart, scalable, and sustainable tech solutions that boost global competitiveness and support national growth. We’re not just adapting to change—we’re driving it.",
    },
    {
        question: " What does a smarter, future-ready maritime ecosystem look like—and how is Harbourlink Global shaping it?",
        answer: "A smarter maritime future means intelligent ports, greener ships, and fully connected marine operations. Harbourlink Global envisions a tech-driven ecosystem where automation, sustainability, and scalability lead the way. Through innovation in shipbuilding, port digitization, and AI-powered logistics, we're creating solutions that don’t just meet today’s needs—they’re built to power the blue economy of tomorrow.",
    },
];

export default function Faqs() {
    const [selectedIndex,setSelectedIndex] = useState(0);
    return (
        <section id="Faqs" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Wanna Know{" "}<span className="text-sky-400">About</span> Us ?
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq,faqIndex) => (
                        <div key={faq.question} className="bg-gray-300 rounded-2xl border border-black/10 p-6">
                            <div className="flex justify-between items-center" onClick={() =>setSelectedIndex(faqIndex)}>
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className={twMerge("feather feather-plus text-sky-400 flex-shrink-0 transition duration-300",selectedIndex === faqIndex && 'rotate-45')}>

                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                            {selectedIndex === faqIndex && (
                                  <motion.div 
                                  initial={{
                                    height:0,
                                    marginTop:0,
                                  }}
                                  animate={{
                                    height:"auto",
                                    marginTop:24,
                                  }}
                                  exit={{
                                    height:0,
                                    marginTop:0,
                                  }}
                                  className={twMerge("overflow-hidden")}>
                                  <p className="text-black/60">{faq.answer}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
