import { StaticImageData } from 'next/image'
import Image from 'next/image'

type BlogCardProps = {
	title?: string
	imgsrc: string | StaticImageData
	date?: string
	author: string
	info: string
}

export default function BlogCard({
	title,
	date,
	imgsrc,
	author,
	info,
}: BlogCardProps) {
	return (
		<div className="flex flex-col items-center w-full gap-[10px] pt-[60px] p-[10px]">
			<div className="font-black text-[35px] max-w-[800px] text-center pb-[20px] max-sm:text-[30px]">
				{title}
			</div>
			<div className='pb-[20px]'>{date}</div>
			<div className="flex justify-center max-w-[1300px] max-h-[670px]">
				<Image src={imgsrc} alt="blog post image" width={1300} height={670} />
			</div>
			<div className="flex flex-col max-w-[1300px]">
				<p className="max-w-[1300px] pb-[40px]">{author}</p>
				<p className="max-w-[1300px] whitespace-pre-line leading-relaxed pb-[50px]">
					{info}
				</p>
			</div>
		</div>
	)
}
