//components
import Settings from './Settings';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const Footer = () => {
	return (
		<footer className="text-white p-10">
			<div className="flex justify-between font-bold">
				<p>Settings</p>
				<Settings />
				<div className="flex flex-col gap-y-4">
					<p>
						<a href="/">Help</a>
					</p>
					<p>
						<a href="/">Privacy settings</a>
					</p>
					<p>
						<a href="/">Log in</a>
					</p>
				</div>
				<div className="flex flex-col gap-y-4">
					<p>
						<a href="/">Cookie policy</a>
					</p>
					<p>
						<a href="/">Privacy policy</a>
					</p>
					<p>
						<a href="/">Terms of service</a>
					</p>
					<p>
						<a href="/">Company details</a>
					</p>
				</div>
				<div>
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1" className="border-b-0">
							<AccordionTrigger>Company</AccordionTrigger>
							<AccordionContent>About us</AccordionContent>
							<AccordionContent>Why FindTrip</AccordionContent>
							<AccordionContent>Media</AccordionContent>
							<AccordionContent>Our people</AccordionContent>
							<AccordionContent>Accessability</AccordionContent>
							<AccordionContent>Sustainability</AccordionContent>
							<AccordionContent>Jobs</AccordionContent>
							<AccordionContent>Security</AccordionContent>
							<AccordionContent>How FindTrip works</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2" className="border-b-0">
							<AccordionTrigger>Partners</AccordionTrigger>
							<AccordionContent>{/* text */}</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3" className="border-b-0">
							<AccordionTrigger>International sites</AccordionTrigger>
							<AccordionContent>{/* text */}</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
			<div>
				<p className="text-center">
					Find your trip and book cheap flights with FindTrip
				</p>
				<br />
				<p className="text-center">
					&copy; 2025 FindTrip. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
