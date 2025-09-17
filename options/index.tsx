// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

type OptionProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  "data-danger"?: boolean;
  "data-testid"?: string;
};

export function Option(props: Readonly<OptionProps>) {
  const { children, ...other } = props;
  return (
    <MenuItem>
      <button
        className="cursor-pointer data-[danger]:hover:bg-danger hover:not:dark:text-light data-[danger]:text-danger dark:data-[danger]:text-danger-light data-[danger]:hover:text-secondary py-2 px-4 text-start whitespace-nowrap hover:bg-gray-200 focus:outline-none dark:hover:bg-white/30"
        {...other}
      >
        {children}
      </button>
    </MenuItem>
  );
}

type OptionsProps = {
  children?: React.ReactNode;
};

export function Options(props: Readonly<OptionsProps>) {
  const { children } = props;
  return (
    <Menu>
      <MenuButton
        data-testid="option"
        title="More"
        className="my-auto rounded-lg transition cursor-pointer hover:bg-neutral-100 focus:outline-none"
      >
        <EllipsisVerticalIcon className="text-infn/50 size-7" />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        transition
        className="easy-out flex flex-col rounded-lg bg-gray-50 shadow transition focus:outline-none data-closed:opacity-0"
      >
        {children}
      </MenuItems>
    </Menu>
  );
}
