// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import Image from 'next/image';
import Link from 'next/link';

type NavProps = {
	logo?: string;
	name?: string;
	children?: React.ReactNode;
};

export default function Navbar(props: Readonly<NavProps>) {
	const { logo, name, children } = props;

	return (
		<div className='w-full h-16 bg-infn'>
			<Link href='/' className='w-fit h-full flex items-center'>
				{logo && (
					<Image
						src={logo}
						alt='Logo'
						width={100}
						height={60}
						className='inline-block ml-4 mr-2'
					/>
				)}
				{name && (
					<span className='text-white text-xl font-semibold'>
						{name}
					</span>
				)}
			</Link>

			{children}
		</div>
	);
}
