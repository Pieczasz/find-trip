//components
import Explore from '@/components/Explore';
import FAQ from '@/components/FAQ';
import InternationalSites from '@/components/InternationalSites';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<MaxWidthWrapper>
				<Explore />
				<FAQ />
				<InternationalSites />
			</MaxWidthWrapper>
		</main>
	);
}
