"use client";

import React from "react";
import { Dropdown, MenuProps } from "antd";
import { TbTextPlus } from "react-icons/tb";
import clsx from "clsx";
import { BsPlus } from "react-icons/bs";

interface AddResourceDropdownProps {
	squareDimensions?: number;
}

const AddResourceDropdown: React.FC<AddResourceDropdownProps> = (props) => {
	const { squareDimensions = 64 } = props;

	const dimensions = `w-[${squareDimensions}px] h-[${squareDimensions}px]`;

	const menuItems: MenuProps["items"] = [
		{
			key: "add-user",
			label: (
				<div className="flex items-center gap-1">
					<BsPlus size={25} /> User
				</div>
			),
			onClick: () => console.log("add user"),
		},
		{
			key: "add-product-category",
			label: (
				<div className="flex items-center gap-1">
					<BsPlus size={25} /> Product Category
				</div>
			),
			onClick: () => console.log("add product category"),
		},
		{
			key: "add-product",
			label: (
				<div className="flex items-center gap-1">
					<BsPlus size={25} /> Product
				</div>
			),
			onClick: () => console.log("add product"),
		},
	];

	return (
		<>
			<Dropdown
				menu={{ items: menuItems }}
				trigger={["click"]}
				arrow
				placement="bottom"
				className="flex justify-center"
			>
				<div
					className={clsx([
						"flex justify-center items-center",
						dimensions,
						"bg-secondary-light/70",
						"rounded-full",
						"cursor-pointer",
					])}
				>
					<TbTextPlus size={30} className="text-primary-dense" />
				</div>
			</Dropdown>
		</>
	);
};

export default AddResourceDropdown;
