"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { BsHouse } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { Icon, Logo } from "@/components";
import { FiSettings, FiUser } from "react-icons/fi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbBuildingCommunity } from "react-icons/tb";

const variants = {
	initial: { opacity: 0.9, y: -4 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const navLinks = [
	{ href: "/portal/dashboard", icon: BsHouse, label: "Dashboard" },
	{ href: "/portal/users", icon: FiUser, label: "Users" },
	{
		href: "/portal/products",
		icon: MdProductionQuantityLimits,
		label: "Products",
	},
	{ href: "/portal/businesses", icon: TbBuildingCommunity, label: "Businesses" },
];

const Menu = () => {
	const pathname = usePathname();

	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			className={clsx([
				"min-h-[600px] w-[70px] py-8",
				"rounded-3xl bg-secondary-dense/80",
				"flex flex-col items-center gap-4",
				"text-primary-dense",
			])}
		>
			<Logo squareSize={60} bg="bg-secondary-light" />

			<div className="flex flex-col items-center gap-5 w-full">
				{navLinks.map((navLink) => {
					const { href, icon, label } = navLink;
					const isActive = pathname.startsWith(href);

					return (
						<Link
							href={href}
							key={label}
							className={clsx([
								"flex items-center justify-center w-full",
								"rounded border-x-[6px]",
								"hover:scale-110 transition-transform duration-300 ",
								isActive
									? "border-l-primary-dense border-r-transparent"
									: "border-transparent",
							])}
						>
							<Icon size={25} icon={icon} />
						</Link>
					);
				})}
			</div>

			<div className=" flex-1 flex items-end ">
				<Link href="#">
					<Icon icon={FiSettings} />
				</Link>
			</div>
		</motion.div>
	);
};

export default Menu;
