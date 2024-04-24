import React from 'react';
import { Button } from './ui/button';

const SearchButton = () => {
	return (
		<div className="">
			<Button className="w-full h-full">
				{/* span on larger device */}
				<span></span>
				{/* icon on mobile */}
				<span></span>
			</Button>
		</div>
	);
};

export default SearchButton;
