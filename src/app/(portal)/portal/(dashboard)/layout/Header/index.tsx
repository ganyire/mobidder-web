"use client";

import React from "react";
import AddResourceDropdown from "./AddResourceDropdown";
import clsx from "clsx";
import ProfileDropDown from "./ProfileDropDown";

const Header = () => {
	return (
		<div className={clsx(["flex justify-center items-center gap-3"])}>
			<ProfileDropDown />
			<AddResourceDropdown />
		</div>
	);
};

export default Header;
