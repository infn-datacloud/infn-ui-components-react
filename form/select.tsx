// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

'use client';

import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from './listbox';
import { useState } from 'react';
import { Label } from '@/components/form';

export { ListboxOption as SelectOption };

export type SelectOption =
	| {
			id: string;
			name: string;
	  }
	| string;

type SelectProps = {
	name: string;
	label?: string;
	children: React.ReactNode;
	onChange?: (value: { id: string; name: string }) => void;
	defaultValue?: { id: string; name: string } | string;
	disabled?: boolean;
};

export function Select(props: Readonly<SelectProps>) {
	const { name, label, onChange, children, defaultValue, disabled } = props;
	const [selected, setSelected] = useState(defaultValue);

	const handleChange = (value: { id: string; name: string }) => {
		onChange?.(value);
		setSelected(value);
	};

	return (
		<>
			{label && <Label>{label}</Label>}
			<Listbox
				name={name}
				value={selected}
				onChange={handleChange}
				disabled={disabled}
			>
				<ListboxButton>
					{typeof selected === 'object' &&
					selected !== null &&
					'name' in selected
						? selected.name
						: selected}
				</ListboxButton>
				<ListboxOptions>{children}</ListboxOptions>
			</Listbox>
		</>
	);
}
