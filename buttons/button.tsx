// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2
 
import { Button as HeadButton } from '@headlessui/react';

export default function Button(props: React.ComponentProps<typeof HeadButton>) {
	const { className, ...otherProps } = props;

	return (
		<HeadButton {...otherProps} className={`cursor-pointer ${className ?? ''}`} />
	);
}