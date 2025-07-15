import OtherLayouts from '@/components/OtherLayouts'

import Link from 'next/link'

export default function PostBlog() {
	return (
		<OtherLayouts>
			<div className="flex pt-[90px] flex-col items-center p-9 w-full gap-[30px]">
				<h1 className="text-[35px] font-black">Post A blog</h1>
				<form method="POST">
					<div className="flex flex-row gap-[100px] max-lg:flex-col max-lg:gap-[40px] ">
						<div className="flex flex-col gap-[20px] max-lg:items-center">
							<h1 className='font-medium text-[20px]'>Add an image for your blog</h1>
							<label
								htmlFor="imageUpload"
								className="text-center items-center font-semibold bg-neutral-700 text-[100px] text-white pt-[50px] px-4 py-2 rounded hover:bg-neutral-800 w-[300px]
                                h-[300px]"
							>
							+
							</label>
							<input
								type="file"
								// placeholder='Add your image'
								id="imageUpload"
								name="image"
								accept="image/*"
								className="hidden"
							/>
							
						</div>
						<div className="flex flex-col max-w-[700px] pt-[40px] gap-[20px] min-w-[400px] ">
							<input
								type="text"
								placeholder="Title"
								className="border-[2px] border-black max-w-[600px] min-w-[400px]  h-[45px] rounded-md placeholder-black pl-[5px] ]"
							/>
							<input
								type="text"
								placeholder="Description"
								className="border-[2px] border-black max-w-[600px] min-w-[400px] h-[45px] rounded-md placeholder-black pl-[5px] "
							/>
							<textarea
								placeholder="Add additional note to your order"
								className="border-[2px] border-black max-w-[600px] min-w-[400px] h-[300px] rounded-md placeholder-black pl-[5px] "
							></textarea>
							<button className="bg-black text-white hover:bg-neutral-800 max-w-[100px] h-[30px] rounded-md">
								Send
							</button>
						</div>
					</div>
				</form>
			</div>
		</OtherLayouts>
	)
}
