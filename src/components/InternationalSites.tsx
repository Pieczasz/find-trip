//components
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const InternationalSites = () => {
	return (
		<div className="w-full mt-10">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-xl">
						Our international sites
					</AccordionTrigger>
					<AccordionContent>{/* sites */}</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default InternationalSites;
