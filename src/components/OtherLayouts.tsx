import Link from 'next/link'
import { useState, useEffect  } from 'react'

export default function OtherLayouts({ children }: any) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 50 // Triggers after 50px scroll
			setScrolled(isScrolled)
		}
		// Add scroll listener
		window.addEventListener('scroll', handleScroll)

		// Cleanup on unmount
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	

	return (
		<div>
			<header
				className={`flex fixed top-0 left-0 right-0 z-50 text-white justify-between  p-6 bg-black w-full bg-cover ${
					scrolled ? 'bg-black bg-opacity-70' : 'bg-black'
				}`}
			>
				<div className="text-[25px]">Blogged.</div>
				<div className="hidden sm:flex flex-row gap-[30px] hover:border-b-white items-center ">
					<Link href="/">
						<span className="border-b-2 border-transparent hover:border-white transition duration-1000 ease-in-out">
							Home
						</span>
					</Link>
					<Link href="/PostBlog">
						<span className="border-b-2 border-transparent hover:border-white transition duration-1000 ease-in-out">
							Post A Blog
						</span>
					</Link>
					<Link href="/signUp">
						<span className="border-b-2 border-transparent hover:border-white transition duration-1000 ease-in-out">
							Sign Up
						</span>
					</Link>

					<Link href="/signIn">
						<span className="border-b-2 border-transparent hover:border-white transition duration-1000 ease-in-out">
							Log in
						</span>
					</Link>
				</div>
				<button
					className="sm:hidden z-50 relative"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? (
						// Show X when menu is open
						<span className="text-3xl">×</span>
					) : (
						// Show hamburger when menu is closed
						<div className="flex flex-col gap-1">
							<div className="w-6 h-0.5 bg-white"></div>
							<div className="w-6 h-0.5 bg-white"></div>
							<div className="w-6 h-0.5 bg-white"></div>
						</div>
					)}
				</button>
				{menuOpen && (
					<div className="md:hidden fixed top-0 left-0 w-full h-full bg-black z-40 flex items-center justify-center">
						<div className="flex flex-col gap-8 text-center text-2xl">
							<Link href="/" onClick={() => setMenuOpen(false)}>
								<span className="border-b-2 border-transparent hover:border-white transition duration-1000 ease-in-out pb-1">
									Home
								</span>
							</Link>
							<Link href="/PostBlog" onClick={() => setMenuOpen(false)}>
								<span className="border-b-2 border-transparent hover:border-white transition duration-1000 ease-in-out pb-1">
									Post A Blog
								</span>
							</Link>
							<Link href="/signUp" onClick={() => setMenuOpen(false)}>
								<span className="border-b-2 border-transparent hover:border-white transition duration-1000 ease-in-out pb-1">
									Sign Up
								</span>
							</Link>
							<Link href="/signIn" onClick={() => setMenuOpen(false)}>
								<span className="border-b-2 border-transparent hover:border-white transition duration-1000 ease-in-out pb-1">
									Log in
								</span>
							</Link>
						</div>
					</div>
				)}
			</header>
			<main>{children}</main>
			<footer className="flex bg-black justify-around p-20 gap-[30px] text-white max-sm:flex-col-reverse max-sm:gap-[40px] max-sm:p-3">
				<div className="flex gap-[20px] flex-col ">
					<div className="flex flex-col max-w-[700px] gap-[20px]">
						<p className="text-[25px]">Blogged.</p>
						<p className="sm:max-w-[800px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
							bibendum eget justo eget blandit. Fusce vitae tempor turpis. Sed
							scelerisque elementum eros, a porta erat auctor sit amet. Mauris
							nec mi ornare ante hendrerit porta nec gravida nisl. Suspendisse
							vitae ligula consequat, tristique libero eu, facilisis quam.
						</p>
					</div>
					<p> © 2025. All Rights Reserved.</p>
				</div>
				<div className="flex flex-row gap-[100px] max-sm:flex-col max-sm:gap-[40px] max-sm:pt-[30px]">
					<div className="flex flex-col gap-[10px]">
						<p>Others</p>
						<Link href="/" className="text-neutral-500">
							<span className="hover:text-white transition duration-900">
								Terms Of Service
							</span>
						</Link>
						<Link href="/" className="text-neutral-500">
							<span className="hover:text-white transition duration-900">
								Privacy Policy
							</span>
						</Link>
						<Link href="/" className="text-neutral-500">
							<span className="hover:text-white transition duration-900">
								Corporate
							</span>
						</Link>
					</div>
					<div className="flex flex-col gap-[10px]">
						<p>Socials</p>
						<Link href="/" className="text-neutral-500">
							<span className="hover:text-white transition duration-900">
								Facebook
							</span>
						</Link>
						<Link href="/" className="text-neutral-500">
							<span className="hover:text-white transition duration-900">
								X
							</span>
						</Link>
						<Link href="/" className="text-neutral-500">
							<span className="hover:text-white transition duration-900">
								Instagram
							</span>
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}
