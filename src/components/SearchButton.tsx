import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

interface SearchButtonProps {
	info?: string;
	placeholder?: string;
	icon?: React.ReactNode;
	classNameInput?: string;
	afterClickedOn?: React.ReactNode;
}

const SearchButton: React.FC<SearchButtonProps> = ({
	info,
	placeholder,
	icon,
	classNameInput,
	afterClickedOn,
}) => {
	return (
		<>
			<div>
				<Label className="block w-full">
					<div className="flex items-start w-full relative">
						{info && (
							<span className="absolute font-bold text-gray-500 pl-3 pt-4">
								{info}
							</span>
						)}
						<div className="flex flex-col w-full">
							<Input
								type="text"
								className={cn(
									'w-[202px] h-[69px] flex-grow pt-10 pb-6 pl-3',
									classNameInput
								)}
								placeholder={placeholder}
							/>
						</div>
						<div className="w-12 h-12 md:w-8 md:h-8 absolute top-0 right-0">
							{icon}
						</div>
					</div>
				</Label>
			</div>
			{afterClickedOn}
		</>
	);
};

SearchButton.defaultProps = {
	placeholder: '',
};

export default SearchButton;
