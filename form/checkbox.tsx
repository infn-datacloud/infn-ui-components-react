// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import { Checkbox as HeadlessCheckbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import {Label} from '@/components/form';

export interface CheckboxState<T> {
	checked: boolean;
	underlying: T;
	index: number;
}

type CheckboxProps = {
	id?: string;
	name?: string;
	value?: boolean;
	label?: string;
  required?: boolean;
	defaultChecked?: boolean;
	checked?: boolean;
	disabled?: boolean;
	onChange?: (value: boolean) => void;
};

export function Checkbox(props: Readonly<CheckboxProps>) {
	const { label, required } = props;

	return (
		<div className='flex items-center space-x-2'>
			<HeadlessCheckbox
				{...props}
				className='group flex aspect-square size-4 cursor-pointer items-center rounded border border-slate-300 bg-white/10 ring-1 ring-white/15 ring-inset focus:not-data-focus:outline-none data-checked:bg-white data-focus:outline-2 data-focus:outline-infn'
			>
				<CheckIcon className='hidden size-4 fill-gray-700 group-data-[checked]:block' />
			</HeadlessCheckbox>
			<Label
				data-required={required ? 'true' : undefined}
        style={{ cursor: 'pointer' }}
			>
				{label}
			</Label>
		</div>
	);
}
