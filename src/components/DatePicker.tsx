'use client';

import * as React from 'react';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

// Import Label and Input components
import { Label } from './ui/label';
import { Input } from './ui/input';

function getRandomDateRange(): string {
	const startDate = addDays(new Date(), Math.floor(Math.random() * 30));
	const endDate = addDays(startDate, Math.floor(Math.random() * 20) + 1);
	return `${format(startDate, 'LLL dd, y')} - ${format(endDate, 'LLL dd, y')}`;
}

export function DatePickerWithRange({
	className,
}: React.HTMLAttributes<HTMLDivElement>) {
	const [date, setDate] = React.useState<DateRange | undefined>({
		from: new Date(2024, 5, 20),
		to: addDays(new Date(2024, 5, 20), 20),
	});
	return (
		<div className={cn('grid gap-2 ', className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Label className="block w-full ">
						<div className="flex items-start w-full relative ">
							<span className="absolute font-bold text-gray-500 pl-3 pt-4">
								Date Range
							</span>
							<div className="flex flex-col w-full">
								<Input
									type="text"
									className={cn(
										'w-[300px] h-[69px] flex-grow pt-10 pb-6 pl-3 rounded-none',
										!date && 'text-muted-foreground'
									)}
									placeholder={getRandomDateRange()}
									readOnly
								/>
							</div>
							<div className="w-12 h-12 absolute top-0 right-0 ">
								<CalendarIcon className="mr-2 h-4 w-4" />
							</div>
						</div>
					</Label>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						initialFocus
						mode="range"
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}

export default DatePickerWithRange;
