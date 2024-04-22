import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const Inputs = () => {
	return (
		<div className="flex gap-1 pb-10 justify-center items-center">
			<Input type="text" className="w-30" id="fromWhere" />
			<Input type="text" className="w-30" id="howManyCountries" />
			<Input type="text" className="w-30" id="depart" />
			<Input type="text" className="w-30" id="return" />
			<Input type="text" className="w-30" id="travelersInfo" />
			<Button>Search</Button>
		</div>
	);
};

export default Inputs;
