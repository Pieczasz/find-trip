//components
import MaxWidthWrapper from './MaxWidthWrapper';
import Settings from './RegionalSettings';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const Footer = () => {
	return (
		<footer className="text-white p-10 pb-5">
			<MaxWidthWrapper>
				<div className="flex justify-between font-bold text-sm">
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
								<AccordionTrigger className="font-bold">
									Company
								</AccordionTrigger>
								<AccordionContent className="font-normal">
									<a href="/">About us</a>
								</AccordionContent>
								<AccordionContent className="font-normal">
									<a href="/">Why FindTrip</a>
								</AccordionContent>
								<AccordionContent className="font-normal">
									<a href="/">Media</a>
								</AccordionContent>
								<AccordionContent className="font-normal">
									<a href="/">Our people</a>
								</AccordionContent>
								<AccordionContent className="font-normal">
									<a href="/">Accessability</a>
								</AccordionContent>
								<AccordionContent className="font-normal">
									<a href="/">Sustainability</a>
								</AccordionContent>
								<AccordionContent className="font-normal">
									<a href="/">Jobs</a>
								</AccordionContent>
								<AccordionContent className="font-normal">
									<a href="/">Security</a>
								</AccordionContent>
								<AccordionContent className="font-normal">
									<a href="/">How FindTrip works</a>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2" className="border-b-0">
								<AccordionTrigger className="font-bold">
									<a href="/">Partners</a>
								</AccordionTrigger>
								<AccordionContent className="font-normal">
									<a href="/">{/* text */}</a>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3" className="border-b-0">
								<AccordionTrigger className="font-bold">
									International sites
								</AccordionTrigger>
								<AccordionContent className="font-normal">
									<a href="/">{/* text */}</a>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				<div className="flex flex-col mt-3">
					<p className="text-center text-xs">
						Find your trip and book cheap flights with FindTrip
					</p>
					<p className="text-center text-sm">
						&copy; FindTrip 2025. All rights reserved.
					</p>
				</div>
			</MaxWidthWrapper>
		</footer>
	);
};

export default Footer;
