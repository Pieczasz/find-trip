//components
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
	return (
		<div className="flex justify-center items-left w-full flex-col">
			<h3 className="pb-2 text-2xl font-bold">Booking flights with FindTrip</h3>
			<div className="flex gap-6 w-full">
				<div className="w-1/2">
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger>How does FindTrip works?</AccordionTrigger>
							<AccordionContent>
								{/* text
								 */}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Tips for using FindTrip.</AccordionTrigger>
							<AccordionContent>
								{/* text
								 */}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>
								Where should I book my flight?
							</AccordionTrigger>
							<AccordionContent>
								{/* text
								 */}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger>
								Do I book my flight with FindTrip?
							</AccordionTrigger>
							<AccordionContent>
								{/* text
								 */}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-5">
							<AccordionTrigger>
								What happens after I&apos;ve booked my flight?
							</AccordionTrigger>
							<AccordionContent>
								{/* text
								 */}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<div className="w-1/2">
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger>Does FindTrip do hotels too?</AccordionTrigger>
							<AccordionContent>
								{/* text
								 */}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>What about car rentals?</AccordionTrigger>
							<AccordionContent>
								{/* text
								 */}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>How price alert works?</AccordionTrigger>
							<AccordionContent>
								{/* text
								 */}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger>
								Can I book flexible flight ticket?
							</AccordionTrigger>
							<AccordionContent>
								{/* text
								 */}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-5">
							<AccordionTrigger>
								Can I book flights that emit less CO₂?
							</AccordionTrigger>
							<AccordionContent>
								{/* text
								 */}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
