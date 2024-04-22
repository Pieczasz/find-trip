import Image from 'next/image';
import { Button } from './ui/button';

const Explore = () => {
	return (
		<div className="border rounded-2xl overflow-hidden">
			<a href="/">
				<div className="relative">
					<Image
						src="/explore.png"
						alt="explore 5 random countries"
						layout="fill"
						objectFit="cover"
					/>
					<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-6 text-white">
						<p className="text-lg">Can&apos;t decide where to go?</p>
						<h2 className="text-6xl font-bold">Explore 5 random countries</h2>
						<Button className="bg-white text-black">Explore</Button>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Explore;
