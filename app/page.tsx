"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
	const [isHeadlineHovered, setIsHeadlineHovered] = useState(false);
	return (
		<section className="relative grid min-h-screen overflow-hidden place-items-center">
			<div className="z-[1] relative flex flex-col p-8 md:items-center items-start gap-4 max-w-[100vw] ">
				<div
					className="relative block md:h-[117px] h-fit transition-transform group overflow-hidden"
					onMouseOver={() => setIsHeadlineHovered(true)}
					onMouseOut={() => setIsHeadlineHovered(false)}
				>
					<h1 className="mx-auto text-5xl font-black text-center cursor-default md:text-7xl text-animate-up rotate-scale-text group-hover:-translate-y-full group-hover:opacity-0 w-fit">
						<span
							style={{
								// @ts-ignore
								"--index": 1,
							}}
						>
							Hyper
						</span>
						<span
							style={{
								// @ts-ignore
								"--index": 2,
							}}
						>
							Edge
						</span>
					</h1>
					<a
						href="https://twitter.com/intent/tweet?text=I'm%20ready%20to%20%23GetAnEdge%F0%9F%94%BA%20w%2F%20%40hyperedge_so%20%F0%9F%9A%80&url=http%3A%2F%2Fhyperedge.so%2F"
						target="_blank"
						rel="noreferrer"
						className="hidden font-black duration-75 opacity-0 cursor-pointer md:block text-7xl text-animate-up rotate-scale-text group-hover:-translate-y-full group-hover:opacity-100"
					>
						#GetAnEdge🔺
					</a>
				</div>
				<div className="flex flex-wrap gap-4">
					<button
						style={{
							// @ts-ignore
							"--delay": "1s",
						}}
						className="text-lg px-4 py-2 text-rose-100 bg-rose-800 rounded-sm bg-opacity-60 backdrop-blur-lg transition-transform ease-[var(--easeOutExpo)] hover:scale-125 hover:-rotate-2 shadow-lg hover:z-10 fade-in"
					>
						Join the hype 💪
					</button>
					<Link
						style={{
							// @ts-ignore
							"--delay": "1.1s",
						}}
						href="/wob"
						className="text-lg px-4 py-2 text-yellow-200 bg-yellow-900 rounded-sm bg-opacity-40 backdrop-blur-lg transition-transform ease-[var(--easeOutExpo)] hover:scale-125 hover:-rotate-2 shadow-lg hover:z-10 fade-in"
					>
						Winter of Blockchain ❄️
					</Link>
				</div>
			</div>
			<div className="landing-overlay"></div>
			<Image
				alt="Hyperedge"
				src="/images/landing-bg.png"
				placeholder="blur"
				blurDataURL="|77cT{Sg1Iay}YxF5+J8=eNuW;w{a|N]n%sUjtSM1cn*].oLACNb=d$iADjFo1X8Wor?oLS#S3ni=dW;EgjZ-AoLEgWV-AofWpaesUX8SMr?sUbbNbn%xFbHR+jZxFW;NbNHo1xZSMR*n%offkR*bGfQjajZa|bHj[n%ay"
				quality={100}
				fill
				sizes="100vw"
				className="z-[-1] select-none origin-center"
				priority
				style={{
					objectFit: "cover",
					transition: "transform 0.3s var(--easeOutExpo)",
					transform: isHeadlineHovered
						? "scale(1.03) rotate(-0.3deg)"
						: "scale(1)",
				}}
			/>
		</section>
	);
}
