import { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'Find best trip for you',
	description: 'Your personal trip planner',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="font-poppins">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
