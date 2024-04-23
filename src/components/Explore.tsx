//components
import Image from 'next/image';
import { Button } from './ui/button';

const Explore = () => {
	return (
		<div className="border rounded-2xl overflow-hidde my-12">
			<a href="/">
				<div className="relative">
					<Image
						src="/explore/old-bagan.jpg"
						alt="explore 5 random countries"
						width={2000}
						height={500}
						className="rounded-xl h-[400px]"
					/>
					<div className="absolute top-0 left-0 w-1/2 h-full p-6 text-white flex flex-col justify-center">
						<p className="text-sm font-bold py-1">
							Can&apos;t decide where to go?
						</p>
						<h2 className="text-5xl font-bold pb-10">
							Explore five random countries
						</h2>
						<Button
							variant="outline"
							className="text-black font-bold text-center w-20"
						>
							Explore
						</Button>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Explore;
