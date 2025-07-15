import Image from 'next/image'
import OtherLayouts from '../components/OtherLayouts'

export default function signUp() {
	return (
		<OtherLayouts>
			<div className="flex pt-[90px] justify-between bg-stone-400 max-sm:flex-col-reverse ">
				<div className="flex flex-col gap-[170px] w-1/2 h-full max-sm:w-full max-sm:pb-[170px]">
					<div className="flex flex-col gap-[20px] pt-[25%] ">
						<h1 className="justify-center text-center text-[30px] font-900 text-white">
							Create an account
						</h1>
						<p className="justify-center text-center text-white">{`Let's get you started`}</p>
						<div>
							<form className="flex flex-col justify-center items-center gap-[30px] text-white">
								<input
									type="text"
									placeholder="Name"
									className=" border-b-[1px] border-white placeholder-white pt-[10px] pb-[10px] w-1/2 bg-transparent max-sm:w-[75%]"
								/>
								<input
									type="text"
									placeholder="Email"
									className=" border-b-[1px] border-white placeholder-white bg-transparent pt-[10px] pb-[10px] w-1/2 max-sm:w-[75%]"
								/>
								<input
									type="password"
									placeholder="Password"
									className=" border-b-[1px] border-white placeholder-white bg-transparent pt-[10px] pb-[10px] w-1/2 max-sm:w-[75%]"
								/>
								<input
									type="password"
									placeholder="Confirm password"
									className=" border-b-[1px] border-white placeholder-white bg-transparent pt-[10px] pb-[10px] w-1/2 max-sm:w-[75%]"
								/>
								<button className="bg-black text-white w-1/2 pt-[10px] pb-[10px] hover:bg-neutral-800 max-sm:w-[75%]">
									Sign Up
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className=" flex h-screen w-1/2 justify-center items-center content-center max-sm:h-1/2 max-sm:w-full  ">
					<Image
						src="/signUp.jpeg"
						alt="Sign Up Image"
						width={500}
						height={500} 
						className="  rounded-xl border-[5px] border-white xl:h-[90%] lg:h-[90%] lg:w-[90%] md:h-[90%] md:w-[90%] sm:h-[90%] sm:w-[90%] max-sm:h-[400px] max-sm:border-none max-sm:rounded-none max-sm:w-full "
					/>
				</div>
			</div>
		</OtherLayouts>
	)
}
