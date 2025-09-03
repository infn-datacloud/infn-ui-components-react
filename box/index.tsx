// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { Button } from '@/components/buttons';
import Link from 'next/link';

type BoxProps = {
	title?: string;
	subtitle?: string;
	btnText?: string;
	btnHref?: string;
	icon?: React.ReactNode;
	type?: 'small' | 'blank';
	children?: React.ReactNode;
};

export default function Box(props: Readonly<BoxProps>) {
	const { title, subtitle, btnText, btnHref, icon, type, children } = props;

	if (!type || type === 'blank') {
		return (
			<div className='w-full box'>
				{children}
			</div>
		);
	} else if (type === 'small') {
		return (
			<div className='w-full box'>
				<div className='flex flex-col items-center justify-center md:items-start lg:items-center lg:flex-row lg:justify-between'>
					<div className='flex flex-col items-center text-center w-full lg:w-6/10 md:text-left md:items-start md:flex-row'>
						{icon ? (
							<div className='w-12 h-12 rounded-full inset-shadow-[-1px_1px_4px_rgba(0,0,0,0.1)] flex justify-center items-center md:mr-6'>
								<div className='w-8 h-8'>{icon}</div>
							</div>
						) : (
							''
						)}
						<div className='flex flex-col w-8/10 lg:w-7/10'>
							<span className='text-xl font-bold lg:w-full'>
								{title || ''}
							</span>
							<span className='text-sm md:truncate lg:w-full'>
								{subtitle || ''}
							</span>
						</div>
					</div>
					<Link href={btnHref || ''} className='w-full lg:w-auto'>
						<Button className='btn btn-primary btn-bold w-full mt-6 lg:w-auto lg:mt-0 clickable'>
							{btnText || ''}{' '}
							<ArrowRightIcon className='w-5 h-5' />
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}
