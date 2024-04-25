import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface SearchButtonProps {
	info?: string;
	placeholder?: string;
	icon?: React.ReactNode;
}

const SearchButton: React.FC<SearchButtonProps> = ({
	info,
	placeholder,
	icon,
}) => {
	return (
		<div>
			<Label className="block w-full">
				<div className="w-4/5 h-3/5 relative">
					<div className="flex flex-col">
						{info && (
							<span className="font-bold text-gray-500 absolute top-0 left-0 pl-2">
								{info}
							</span>
						)}
						<Input type="text" className=" pl-2" placeholder={placeholder} />
					</div>
					<div className="w-8 h-8 md:hidden">{icon}</div>
				</div>
			</Label>
		</div>
	);
};

export default SearchButton;
