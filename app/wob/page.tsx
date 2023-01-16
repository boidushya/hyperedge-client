"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/Navbar";

const Section = (props: any) => {
	const [isHeadlineHovered, setIsHeadlineHovered] = useState(false);
	return (
		<section className="relative grid min-h-screen overflow-hidden place-items-center">
			<div className="z-[1] relative flex flex-col items-start gap-4 p-16 my-16">
				{props.children}
			</div>
			<div className="landing-overlay md:backdrop-blur-0"></div>
			<Image
				alt="Winter of Blockchain"
				src={props.bg || "/images/wob-bg.png"}
				placeholder="blur"
				blurDataURL="|77cT{Sg1Iay}YxF5+J8=eNuW;w{a|N]n%sUjtSM1cn*].oLACNb=d$iADjFo1X8Wor?oLS#S3ni=dW;EgjZ-AoLEgWV-AofWpaesUX8SMr?sUbbNbn%xFbHR+jZxFW;NbNHo1xZSMR*n%offkR*bGfQjajZa|bHj[n%ay"
				quality={100}
				fill
				sizes="100vw"
				className="z-[-1] select-none origin-center"
				priority
				style={{
					objectFit: "cover",
				}}
			/>
		</section>
	);
};

export default function Home() {
	const [isHeadlineHovered, setIsHeadlineHovered] = useState(false);
	const notify = () => toast('31 Jan, 2023 Application Deadline Extended', {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
	});

	useEffect(() => {
		window.onload = function () {
			notify()
		}
	})


	return (
		<>
			<Navbar />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
			<section className="relative grid min-h-screen overflow-hidden place-items-center">
				<div className="z-[1] relative flex flex-col md:items-center gap-4 p-16">
					<div
						className="relative block md:h-[117px] h-fit text-center transition-transform w-fit group overflow-hidden"
						onMouseOver={() => setIsHeadlineHovered(true)}
						onMouseOut={() => setIsHeadlineHovered(false)}
					>
						<h1 className="text-3xl font-black cursor-default md:text-7xl text-animate-up rotate-scale-text group-hover:-translate-y-full group-hover:opacity-0 w-fit">
							<span
								className="whitespace-pre"
								style={{
									// @ts-ignore
									"--index": 1,
								}}
							>
								Winter{" "}
							</span>
							<span
								className="whitespace-pre"
								style={{
									// @ts-ignore
									"--index": 2,
								}}
							>
								of{" "}
							</span>
							<span
								style={{
									// @ts-ignore
									"--index": 3,
								}}
							>
								Blockchain
							</span>
						</h1>
						<a
							href="https://twitter.com/intent/tweet?text=I'm%20ready%20to%20%23GetAnEdge%F0%9F%94%BA%20w%2F%20%40hyperedge_so%20%F0%9F%9A%80%20%20Apply%20here%20%F0%9F%91%89%20https%3A%2F%2Fform.waitlistpanda.com%2Fgo%2F1LTpRXz4nBUX26zZdIfO&url=https%3A%2F%2Fhyperedge.so"
							target="_blank"
							rel="noreferrer"
							className="block text-3xl font-black text-center duration-75 opacity-0 cursor-pointer select-none md:text-7xl text-animate-up rotate-scale-text group-hover:-translate-y-full group-hover:opacity-100"
						>
							#GetAnEdge🔺
						</a>
					</div>
					<div className="flex flex-col items-center gap-4 md:mt-8 md:flex-row">
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSeLJEt65MrDsdFdaDd-tOuDi6GNAPhN5TrL_B5I-Yzv4PFO5Q/viewform"
							target="_blank"
							rel="noreferrer"
							style={{
								// @ts-ignore
								"--delay": "1s",
							}}
							className="w-fit group grid place-items-center h-12 relative text-lg px-4 py-2 text-rose-100 bg-rose-800 rounded-sm bg-opacity-60 backdrop-blur-lg transition-transform ease-[var(--easeOutExpo)] hover:scale-125 hover:-rotate-2 shadow-lg hover:z-10 fade-in"
						>
							Mentor Application
						</a>
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSdKNcUO9lGvgHoMpEELVZ0j_fOvNr7eU5iclHNluc3Fl-WyOw/viewform"
							target="_blank"
							rel="noreferrer"
							style={{
								// @ts-ignore
								"--delay": "1s",
							}}
							className="w-fit group grid place-items-center h-12 relative text-lg px-4 py-2 text-orange-100 bg-orange-800 rounded-sm bg-opacity-60 backdrop-blur-lg transition-transform ease-[var(--easeOutExpo)] hover:scale-125 hover:-rotate-2 shadow-lg hover:z-10 fade-in"
						>
							Mentee Application
						</a>
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSdHWePFDUoJTt-E91bKk7cKysNt_1yz0XWTIYsteEU4jBGO5g/viewform"
							target="_blank"
							rel="noreferrer"
							style={{
								// @ts-ignore
								"--delay": "1s",
							}}
							className="w-fit group grid place-items-center h-12 relative text-lg px-4 py-2 text-yellow-100 bg-yellow-800 rounded-sm bg-opacity-60 backdrop-blur-lg transition-transform ease-[var(--easeOutExpo)] hover:scale-125 hover:-rotate-2 shadow-lg hover:z-10 fade-in"
						>
							Project Submission
						</a>
					</div>
				</div>
				<div className="absolute bottom-0 mb-16 scroll-down z-[60] scale-75 text-zinc-400">
					<div>
						<span></span>Scroll
					</div>
				</div>
				<div className="landing-overlay"></div>
				<Image
					alt="Winter of Blockchain"
					src="/images/wob-bg.png"
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
			<Section bg="/images/hero1.png">
				<h1 className="text-3xl font-black leading-tight cursor-default md:text-5xl w-fit">
					What is winter of blockchain?
				</h1>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-8 ">
					Winter of Blockchain is a 3-month long open source
					contribution program for contributing to Blockchains and
					Blockchain related projects like Blockchain Games,
					Protocols, Community Platforms, DeFi and other Services and
					Products. The program is chain-agnostic and it will give an
					opportunity for new developers to make a career in
					Blockchain Industry.
				</p>
				<h1 className="text-3xl font-black cursor-default md:text-5xl w-fit">
					Who can participate?
				</h1>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-8 ">
					The program is open for anyone worldwide with 50% seats
					reserved for diverse and underrepresented groups.
				</p>
				<h1 className="text-3xl font-black cursor-default md:text-5xl w-fit">
					Mentor Application
				</h1>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-8 ">
					The mentors should have relevant experience as a
					professional programmer, technical writer or open-source
					contributor in any programming language of their choice. The
					experience with Blockchain technologies is a plus as every
					project will have a few seats reserved for such mentors.
				</p>
				<h1 className="text-3xl font-black cursor-default md:text-5xl w-fit">
					Mentee Application
				</h1>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-8 ">
					The mentees can be any beginner programmer who have written
					some lines of code in their life. The first week of program
					will teach you how to make open source contribution as well
					as about what Blockchain is and how to make a career in
					Blockchain Industry so don’t worry about the details and
					just take a leap.
				</p>
				<h1 className="text-3xl font-black cursor-default md:text-5xl w-fit">
					Project Submission
				</h1>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-8 ">
					<span className="underline">TL;DR</span>
					<ul className="my-2 text-left list-disc list-inside">
						<li>Pay the organization onboarding fee</li>
						<li>
							Dedicate atleast one POC for the program along with
							open Github repositories for the participants to
							contribute
						</li>
					</ul>
					From the biggest of blockchain companies to anyone who is
					getting started as an entrepreneur are welcome to submit
					their project. The only two conditions are the projects need
					to pay a compulsory fee to get listed into the program or
					they can even sponsor on higher levels to get more benefits
					out of this program. This fee or sponsorship will be used
					for running the program and rewarding the top performers.
					Apart from this, the projects should have Github
					repositories open for contribution with labels including
					tech-stack, some documentation/introduction and level of
					development clearly.
				</p>
				<div className="p-4 font-medium bg-red-900 border-2 border-red-400 rounded-sm text-red-50 bg-opacity-20 backdrop-blur-sm">
					Looking to Volunteer? Shoot us an email on{" "}
					<a
						className="font-semibold hover:underline"
						href="mailto:wob@hyperedge.so"
					>
						wob@hyperedge.so
					</a>
				</div>
			</Section>
			<Section bg="/images/hero2.png">
				<h1 className="text-3xl font-black cursor-default md:text-5xl w-fit">
					What Will I Receive?
				</h1>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-2 ">
					Top 5 contributors [mentors and mentees] for overall program
					will win a cash prize and a free ticket to Web3Conf in Goa,
					India alongwith travel allowance, accomodation and a chance
					to be a part of panel discussion on stage.
				</p>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-2 ">
					Top 100 and most consistent mentees will receive an
					exclusive swag kit plus a “Proof of Knowledge” NFT.
				</p>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-2 ">
					The top 100 and most consistent mentors will receive an
					exclusive swag kit plus a “Proof of Contribution” NFT and
					priority in call for speaker application at Web3Conf India.
				</p>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-8 ">
					All participants who make atleast 3 contributions in the
					program will win an NFT certificate for participation as
					well as exclusive access to the newsletter for jobs, funding
					and more opportunities from our partners and sponsors.
				</p>
				<h1 className="text-3xl font-black cursor-default md:text-5xl w-fit">
					Important Dates
				</h1>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-8  space-y-4">
					<div className="p-4 font-medium bg-red-900 border-2 border-red-400 rounded-sm text-red-50 bg-opacity-20 backdrop-blur-sm w-fit">
						<span className="font-bold text-white">
							21 Dec, 2022{" "}
						</span>
						Call for mentor, mentees and projects/sponsors begin
					</div>
					<div className="p-4 font-medium border-2 rounded-sm bg-rose-900 border-rose-400 text-rose-50 bg-opacity-20 backdrop-blur-sm w-fit">
						<span className="font-bold text-white">
							31 Jan, 2023{" "}
						</span>
						Application Deadline Extended
					</div>
					<div className="p-4 font-medium border-2 rounded-sm bg-rose-900 border-rose-400 text-rose-50 bg-opacity-20 backdrop-blur-sm w-fit">
						<span className="font-bold text-white">
							15 Jan, 2023{" "}
						</span>
						Program Begins
					</div>
					<div className="p-4 font-medium bg-orange-900 border-2 border-orange-400 rounded-sm text-orange-50 bg-opacity-20 backdrop-blur-sm w-fit">
						<span className="font-bold text-white">
							15 Mar, 2023{" "}
						</span>
						Program Ends
					</div>
					<div className="p-4 font-medium bg-orange-900 border-2 border-yellow-400 rounded-sm text-yellow-50 bg-opacity-20 backdrop-blur-sm w-fit">
						<span className="font-bold text-white">
							1st Week of April, 2023:{" "}
						</span>
						Winner Announcement
					</div>
				</p>
				<h1 className="text-3xl font-black cursor-default md:text-5xl w-fit">
					What Will Happen In The Program?
				</h1>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-2 ">
					The mentors will be coordinating with different project
					administrators and help mentees in making a successful
					contribution to the repositories.
				</p>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-2 ">
					There will be special speaker sessions, pop-up events with
					blockchain experts, contest and giveaway in between to cheer
					the mentees and teach them new skills.
				</p>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-8 ">
					We will also conduct physical meetups, workshops and
					sessions for increasing the community interaction.
				</p>
				<h1 className="text-3xl font-black cursor-default md:text-5xl w-fit">
					Code of Conduct
				</h1>
				<p className="text-lg font-medium text-justify text-zinc-300 max-w-[48rem] mb-8 ">
					Everyone who is part of this program directly or indirectly
					will need to sign a code of conduct document at the
					beginning of their onboarding as we believe in equal
					opportunities and creating a safer environment for everyone
					to grow together. This is a 100% virtual program and any
					kind of verbal or written harassment, inappropriate or
					discriminatory behaviour would result in exemption from this
					and all of our future programs.
				</p>
				<div className="p-4 font-medium bg-red-900 border-2 border-red-400 rounded-sm text-red-50 bg-opacity-20 backdrop-blur-sm max-w-[48rem] ">
					The program is inspired by{" "}
					<span className="text-xl font-semibold text-white">
						GirlScript Summer of Code’s{" "}
					</span>
					success for last{" "}
					<span className="text-xl font-semibold text-white">
						5 years{" "}
					</span>
					with over{" "}
					<span className="text-xl font-semibold text-white">
						8,000{" "}
					</span>
					developers in 2022 edition from{" "}
					<span className="text-xl font-semibold text-white">
						14+ countries.
					</span>
				</div>
			</Section>
			<footer className="z-50 flex items-center justify-center w-full p-4 py-6 bg-zinc-900 text-zinc-400">
				<a
					href="mailto:wob@hyperedge.so"
					className="font-medium transition-colors hover:underline hover:text-zinc-200"
				>
					wob@hyperedge.so
				</a>
				<span className="whitespace-pre text-zinc-600"> | </span>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://twitter.com/hyperedge_so"
					className="font-medium transition-colors hover:underline hover:text-zinc-200"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
					</svg>
				</a>
			</footer>
		</>
	);
}
