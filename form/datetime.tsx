// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import { Label } from '@/components/form';

export interface DatetimeProps {
	name: string;
	label?: string;
	required?: boolean;
	disabled?: boolean;
	max?: string;
	min?: string;
	value?: string|undefined;
	onChange?: (value: string) => void;
}

export function Datetime({
	name,
	label,
	required = false,
	disabled = false,
	value = undefined,
	max='',
	min='',
	onChange = () => {},
}: Readonly<DatetimeProps>) {

	return (
		<>
			{label && (
				<Label data-required={required ? 'true' : undefined}>
					{label}
				</Label>
			)}

			<input
				type='date'
				name={name}
				max={max}
				min={min}
				required={required}
				disabled={disabled}
				defaultValue={value}
				onChange={(e) => onChange?.(e.target.value)}
				className='iam-input'
			></input>
		</>
	);
}
