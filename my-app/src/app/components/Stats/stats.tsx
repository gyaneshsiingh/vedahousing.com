"use client"

import React, { useEffect, useRef } from "react";
import { STATS_DATA } from "./stats.constant";
import { StatItemType } from "./stats.type";
import "./stats.modules.css";

export const AnimatedStat = ({ end, suffix }: { end: number, suffix: string }) => {
    const nodeRef = useRef<HTMLHeadingElement>(null);

    const hasAnimated = useRef(false);

    useEffect(() => {
        const node = nodeRef.current;

        if (!node) return;

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;

            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                const duration = 1500;

                const startTime = performance.now();

                const easeOutQuart = (x: number): number => {
                    return 1 - Math.pow(1 - x, 4);
                };

                const updateCount = (currentTime: number) => {
                    const elapsedTime = currentTime - startTime;

                    const progress = Math.min(elapsedTime / duration, 1);

                    const currentCount = Math.floor(easeOutQuart(progress) * end);


                    if (nodeRef.current) {
                        nodeRef.current.textContent = currentCount + suffix;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    }
                    else {
                        if (nodeRef.current) {
                            nodeRef.current.textContent = end + suffix;
                        }
                    }
                };
                requestAnimationFrame(updateCount);
            }
        }, { threshold: 0.5 });

        observer.observe(node);

        return () => observer.disconnect();
    }, [end, suffix]);

    return (<h2 className="vh-stat-number" ref={nodeRef}>0{suffix}</h2>
    );
};

const Stats = () => {
    return (
        <section className="vh-stats">
            <div className="vh-stats-inner">
                {STATS_DATA.map((item: StatItemType, index: number) => (
                    <div key={index} className="vh-stat-item">
                        <AnimatedStat end={item.value} suffix={item.suffix} />
                        <p className="vh-stat-label">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats;