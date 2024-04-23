//components
import Inputs from './Inputs';
import MaxWidthWrapper from './MaxWidthWrapper';
import Nav from './Nav';

const Header = () => {
	return (
		<header className="bg-blue-950 text-white">
			<Nav />
			<div className="flex justify-center items-left w-full">
				<MaxWidthWrapper>
					<div className="flex flex-col items-left">
						<h1 className="text-4xl font-bold pb-5">
							Find the best trip for you.
						</h1>
						<Inputs />
					</div>
				</MaxWidthWrapper>
			</div>
		</header>
	);
};

export default Header;
