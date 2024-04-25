import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

interface SearchButtonProps {
	info?: string;
	placeholder?: string;
	icon?: React.ReactNode;
	classNameInput?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({
	info,
	placeholder,
	icon,
	classNameInput,
}) => {
	return (
		<div>
			<Label className="block w-full">
				<div className="flex items-start w-full relative">
					{info && (
						<span className="absolute font-bold text-gray-500 pl-3 pt-3">
							{info}
						</span>
					)}
					<div className="flex flex-col w-full">
						<Input
							type="text"
							className={cn('flex-grow pt-10 pb-5 pl-3', classNameInput)}
							placeholder={placeholder}
						/>
					</div>
					<div className="w-12 h-12 md:w-8 md:h-8 absolute top-0 right-0">
						{icon}
					</div>
				</div>
			</Label>
		</div>
	);
};

SearchButton.defaultProps = {
	placeholder: '',
};

export default SearchButton;
