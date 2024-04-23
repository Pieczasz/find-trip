//components
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
	return (
		<div className="flex justify-center items-left w-full flex-col my-12">
			<h3 className="pb-2 text-2xl font-bold">Booking flights with FindTrip</h3>
			<div className="flex gap-6 w-full">
				<div className="w-1/2">
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger>How does FindTrip works?</AccordionTrigger>
							<AccordionContent>
								We&apos;re a flight search engine. We scan all the top airlines
								and travel providers across the net and create one big trip
								around 1-5 countries that you can take. Once you&apos;ve found
								the best trip you can book every flight directly with the
								provider.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Tips for using FindTrip.</AccordionTrigger>
							<AccordionContent>
								<strong>Save money and time</strong> Whether it&apos;s the
								fastest flight or the smartest stay, you can pick your preferred
								flight provider based on real traveler ratings, and book
								instantly.
								<br />
								<strong>Search Everywhere. Go anywhere. </strong>Want to go on a
								trip but don&apos;t mind where? Or perhaps you want to discover
								somewhere new. Search “Everywhere” for the best cheap flights
								anywhere on any given day.
								<br />
								<strong>Find the cheapest time to fly</strong>
								If you have a destination in mind and want to find the cheapest
								flight, choose “Cheapest month” when you search. Then find
								flights on the cheapest day.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>
								Where should I book my flight?
							</AccordionTrigger>
							<AccordionContent>
								If you&apos;re looking for inspiration for your next trip,{' '}
								<a href="/" className="text-blue-500 underline">
									search Everywhere
								</a>{' '}
								to find a cheap flight ticket anywhere.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger>
								Do I book my flight with FindTrip?
							</AccordionTrigger>
							<AccordionContent>
								We&apos;re a search engine, so after you&apos;ve found the best
								trip you&apos;ll book directly with the airline or travel
								provider on their site. This will give you the opportunity to
								add any loyalty information you would like and to select your
								preferred flight options, such as seating.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-5">
							<AccordionTrigger>
								What happens after I&apos;ve booked my flight?
							</AccordionTrigger>
							<AccordionContent>
								Your flight booking confirmation email and all the other info
								you&apos;ll need will come from the airline or provider you
								booked with. If you have any follow-up questions about your
								booking, or want to change or cancel your flight, you&apos;l
								need to get in touch with them.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<div className="w-1/2">
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger>Does FindTrip do hotels too?</AccordionTrigger>
							<AccordionContent>
								No. At this moment we only search for flights.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>What about car rentals?</AccordionTrigger>
							<AccordionContent>
								No. At this moment we only search for flights.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>How price alert works?</AccordionTrigger>
							<AccordionContent>
								If you set up a Price Alert, we&apos;ll watch the price of plane
								tickets for you, and let you know via email or push notification
								via the app if they go up or down.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger>
								Can I book flexible flight ticket?
							</AccordionTrigger>
							<AccordionContent>
								We understand how important it is to have flexible vacation
								plans. Sometimes, you can pay an extra fee for an amendable
								airline ticket, so look out for this option as you book. You can
								also look for hotels and car rental options with free
								cancellation, so you can book now and amend or even cancel later
								if you need to.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-5">
							<AccordionTrigger>
								Can I book flights that emit less CO₂?
							</AccordionTrigger>
							<AccordionContent>
								Yes – since we began showing carbon emission info on flights
								where it&apos;s available, over 100 million travelers have found
								a plane ticket with lower emissions for their route.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
