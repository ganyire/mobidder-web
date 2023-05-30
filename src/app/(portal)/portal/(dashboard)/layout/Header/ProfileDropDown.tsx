"use client";

import React from "react";
import { Dropdown, MenuProps } from "antd";
import { TbTextPlus } from "react-icons/tb";
import clsx from "clsx";
import useAuthStore from "@/store/useAuthStore";
import useStore from "@/store/useStore";
import { TfiUser } from "react-icons/tfi";
import { RxCaretDown } from "react-icons/rx";

interface ProfileDropDownProps {
	squareDimensions?: number;
}

const ProfileDropDown: React.FC<ProfileDropDownProps> = (props) => {
	const { squareDimensions = 64 } = props;

	const dimensions = `w-[${squareDimensions}px] h-[${squareDimensions}px]`;

	const profile = useStore(useAuthStore, (state) => state.profile);

	const menuItems: MenuProps["items"] = [
		{
			key: "account-profile",
			label: (
				<div className="flex flex-col justify-center items-center">
					<p className="font-bold text-accent-2 text-base">{profile?.name}</p>
					<p className="text-accent-1">{profile?.email}</p>
				</div>
			),
		},
		{
			key: "account-settings",
			label: "Settings",
		},
		{
			key: "account-upgrade",
			label: "Upgrade",
		},
		{
			type: "divider",
		},
		{
			key: "account-signout",
			label: "Sign out",
		},
	];

	return (
		<>
			<Dropdown menu={{ items: menuItems }} trigger={["click"]} arrow placement="bottom">
				<div
					className={clsx([
						"flex flex-col justify-center items-center",
						dimensions,
						"bg-slate-400/90 shadow-md",
						"rounded-full",
						"cursor-pointer",
					])}
				>
					<TfiUser size={25} />
					<RxCaretDown size={18} />
				</div>
			</Dropdown>
		</>
	);
};

export default ProfileDropDown;
