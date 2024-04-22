import Inputs from './Inputs';
import Nav from './Nav';

const Header = () => {
	return (
		<header className="bg-blue-950 text-white">
			<Nav />
			<h1 className="text-4xl font-bold w-full text-left pl-[6.5rem] pb-5	">
				Find the best trip for you.
			</h1>
			<Inputs />
		</header>
	);
};

export default Header;
