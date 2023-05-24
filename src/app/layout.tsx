// import "react-phone-number-input/style.css";
import "./globals.css";
import { interRegular, interRegularItalic, interBold, interBoldItalic } from "./fonts";
import RQProvider from "@/providers/RQProvider";
import clsx from "clsx";
import ADConfigProvider from "@/providers/ADConfigProvider";
import ToastProvider from "@/providers/ToastProvider";
import ProgressProvider from "@/providers/ProgressProvider";

interface RootProps {
	children: React.ReactNode;
}

export default function RootLayout(props: RootProps) {
	const { children } = props;

	return (
		<html lang="en">
			<body
				className={clsx([
					interRegular.variable,
					interRegularItalic.variable,
					interBold.variable,
					interBoldItalic.variable,
					"font-interRegular",
					"bg-[url(/images/map.jpg)]",
					"bg-cover",
					"bg-center",
					"bg-no-repeat",
					"min-h-screen",
					"text-base text-gray-700",
				])}
				suppressHydrationWarning={true}
			>
				<RQProvider>
					<ADConfigProvider>
						<ProgressProvider />
						{children}
						<ToastProvider />
					</ADConfigProvider>
				</RQProvider>
			</body>
		</html>
	);
}
