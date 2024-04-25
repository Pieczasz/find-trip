import SearchButton from './SearchButton';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Inputs = () => {
	return (
		<div className="flex gap-1 pb-10 w-full flex-wrap justify-between">
			<div className="flex flex-wrap gap-1">
				<SearchButton
					info="From"
					placeholder="Country, city or airport"
					classNameInput="rounded-r-none"
				/>
				<SearchButton classNameInput="rounded-none" />
				<SearchButton classNameInput="rounded-none" />
				<SearchButton classNameInput="rounded-none" />
				<SearchButton classNameInput="rounded-l-none" />
			</div>
			<Button className="h-[69px]">Search</Button>
		</div>
	);
};

export default Inputs;
