import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

type BlogItemProps = {
	imgsrc: string | StaticImageData
	author: string
	date?: string
	title?: string
	info: string
	link?: string
}

export default function BlogItems({
	imgsrc,
	author,
	date,
	title,
	info,
	link,
}: BlogItemProps) {
	return (
		<div className="flex flex-col gap-[5px]">
			<div className="max-w-[500px] h-[400px] relative overflow-hidden">
				<Link href="/blogPost">
					<Image
						src={imgsrc}
						alt="Blog post image"
						fill
						className="object-cover"
					/>
				</Link>
			</div>
			<div className="flex flex-row text-[17px] gap-[10px]">
				<p>{author}</p>
				<p>{date}</p>
			</div>
			<p className="text-[25px] text-black-900 max-w-[500px]">{title}</p>
			<div className=" flex-row max-w-[500px] pb-[20px]">
				<p>{info}</p>
				{link ? (
					<Link
						href="/blogPost"
						className="text-blue-600 hover:underline cursor-pointer"
					>
						See more
					</Link>
				) : null}
			</div>
		</div>
	)
}
