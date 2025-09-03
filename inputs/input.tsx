// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import {
	Input as HeadlessInput,
	type InputProps as HeadlessInputProps,
} from '@headlessui/react';
import {Label} from '@/components/form';

export interface InputProps extends HeadlessInputProps {
	'data-testid'?: string;
  label?: string;
  required?: boolean;
}

export function Input(props: Readonly<InputProps>) {
	const {label, required} = props;
  
  return (
		<>
      {
        label && (
          <Label data-required={required ? 'true' : undefined}>{label}</Label>
        )
      }
			<HeadlessInput
				className='iam-input'
				{...props}
				required={required ? true : false}
			/>
		</>
  );
}
