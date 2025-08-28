// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import Image from 'next/image';

type HeaderProps = {
	logo?: string;
	title?: string;
	subtitle?: string;
};

export default function Header(props: Readonly<HeaderProps>) {
	const { logo, title, subtitle } = props;

	return (
		<div className='flex flex-col items-center text-center mb-16'>
			{logo && (
				<Image
					src={logo}
					alt='Logo'
					width={200}
					height={100}
					className='mb-4'
				/>
			)}
			{title && <span className='text-3xl font-bold mb-2'>{title}</span>}
			{subtitle && <span className='w-2/3'>{subtitle}</span>}
		</div>
	);
}
