import Image from 'next/image';
import Link from 'next/link';

// icons
import { MdOutlineAccountCircle } from 'react-icons/md';
import { HiOutlineViewList } from 'react-icons/hi';
import { FaRegFlag, FaRegHeart } from 'react-icons/fa';

const Nav = () => {
	return (
		<nav className="flex justify-between items-center">
			<div>
				<Link href="/">
					<Image
						src="/logo.svg"
						alt="logo"
						width={96}
						height={32}
						className="p-6"
					/>
				</Link>
			</div>
			<div className="flex gap-6 items-center p-6">
				<FaRegFlag className="icon" />
				<FaRegHeart className="icon" />
				<MdOutlineAccountCircle className="icon" />
				<HiOutlineViewList className="icon" />
			</div>
		</nav>
	);
};

export default Nav;
