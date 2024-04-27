import SearchButton from './SearchButton';
import { Button } from './ui/button';
import DatePicker from './DatePicker';

const Inputs = () => {
	return (
		<div className="flex gap-1 pb-10 w-full flex-wrap justify-between">
			<div className="flex flex-wrap gap-1">
				<SearchButton
					info="From"
					placeholder="Country, city or airport"
					classNameInput="rounded-r-none"
				/>
				<SearchButton
					info="Countries"
					placeholder="Choose up to five countries"
					classNameInput="rounded-none"
				/>
				<DatePicker />
				<SearchButton
					info="Travellers and cabin class"
					placeholder="1 Adult, economy"
					classNameInput="rounded-l-none"
				/>
			</div>
			<Button className="h-[69px]">Search</Button>
		</div>
	);
};

export default Inputs;
