// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import { UserIcon } from '@heroicons/react/24/solid';
import Status from '@/components/status';
import Link from 'next/link';

type ListProps = {
	items?: Array<{
		id: string;
		name: string;
		user_name?: string;
		status: string;
		href?: string;
	}>;
};

export default function List(props: Readonly<ListProps>) {
	const { items } = props;

	const listItems = items?.map((item) => (
		<Link
			href={item.href + '/' + item.id || '#'}
			key={item.id}
			className={`box w-full flex flex-col md:flex-row items-center justify-between cursor-default pointer-events-none ${
				item.href ? 'clickable' : ''
			}`}
		>
			<h3 className='w-full md:w-1/2 truncate font-black'>{item.name}</h3>
			{item.user_name && (
				<p
					className='w-full md:w-1/4 truncate flex items-center opacity-50 font-bold text-sm'
				>
					<UserIcon className='size-4' />
					&nbsp;{item.user_name}
				</p>
			)}
				<p className='w-full md:w-1/4 mt-6 md:mt-0 flex justify-end'>
					<Status status={item.status} />
				</p>
		</Link>
	));

	return (
		<>
			<div className=''>{listItems}</div>
		</>
	);
}
