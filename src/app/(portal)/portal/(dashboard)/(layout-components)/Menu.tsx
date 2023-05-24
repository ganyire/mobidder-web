"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const variants = {
	initial: { opacity: 0.9, y: -4 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Menu = () => {
	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			className={clsx([
				"min-h-[700px] w-[80px] py-8",
				"rounded-3xl bg-secondary-dense/80",
				"flex flex-col items-center",
				"text-primary-dense",
			])}
		>
			<Link href="/dashboard">lenny</Link>
		</motion.div>
	);
};

export default Menu;
