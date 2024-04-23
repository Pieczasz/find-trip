import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const Inputs = () => {
	return (
		<div className="flex gap-1 pb-10 w-full flex-wrap justify-between">
			<div className="flex flex-wrap gap-1 w-30">
				<Input type="text" id="fromWhere" className="w-30" />
				<Input type="text" id="howManyCountries" className="w-30" />
				<Input type="text" id="depart" className="w-30" />
				<Input type="text" id="return" className="w-30" />
				<Input type="text" id="travelersInfo" className="w-30" />
			</div>
			<Button>Search</Button>
		</div>
	);
};

export default Inputs;
