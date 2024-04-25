import SearchButton from './SearchButton';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Inputs = () => {
	return (
		<div className="flex gap-1 pb-10 w-full flex-wrap justify-between">
			<div className="flex flex-wrap gap-1 w-30">
				<SearchButton
					info="From"
					placeholder="Country, city or airport"
					classNameInput="rounded-r-none"
				/>
				<SearchButton />
				<SearchButton />
				<SearchButton />
				<SearchButton classNameInput="rounded-l-none" />
			</div>
			<Button>Search</Button>
		</div>
	);
};

export default Inputs;
