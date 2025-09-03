// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

type StatusProps = {
	status: string;
};

import {
	PencilIcon,
	CheckCircleIcon,
	PaperAirplaneIcon,
	ClockIcon,
	BeakerIcon,
	PlayIcon,
	ArrowPathIcon,
	WrenchIcon,
	ExclamationTriangleIcon,
	NoSymbolIcon,
	XCircleIcon,
} from '@heroicons/react/24/solid';
import { JSX } from 'react';

interface StatusConfig {
    name: string;
	color: string;
	icon: JSX.Element;
}

export const statusMap: Record<string, StatusConfig> = {
	0: {
        name: 'draft',
		color: '#90A4AE', // Blue Grey 300 – initial, still incomplete
		icon: <PencilIcon className='size-4' />,
	},
	1: {
        name: 'ready',
		color: '#64B5F6', // Blue 300 – ready, positive but waiting
		icon: <CheckCircleIcon className='size-4' />,
	},
	2: {
        name: 'submitted',
		color: '#1976D2', // Blue 700 – submitted, formal and reliable
		icon: <PaperAirplaneIcon className='size-4' />,
	},
	3: {
        name: 'evaluation',
		color: '#FBC02D', // Yellow 700 – under evaluation, attention needed
		icon: <ClockIcon className='size-4' />,
	},
	4: {
        name: 'pre-production',
		color: '#FFA726', // Orange 400 – pre-production, data collection phase
		icon: <BeakerIcon className='size-4' />,
	},
	5: {
        name: 'active',
		color: '#43A047', // Green 600 – active, working, healthy
		icon: <PlayIcon className='size-4' />,
	},
	6: {
        name: 're-evaluation',
		color: '#FDD835', // Yellow 600 – re-evaluation, verification in progress
		icon: <ArrowPathIcon className='size-4' />,
	},
	7: {
        name: 'maintenance',
		color: '#FB8C00', // Orange 600 – maintenance, work in progress
		icon: <WrenchIcon className='size-4' />,
	},
	8: {
        name: 'degraded',
		color: '#E53935', // Red 600 – degraded or offline, critical state
		icon: <ExclamationTriangleIcon className='size-4' />,
	},
	9: {
        name: 'deprecated',
		color: '#8D6E63', // Brown 400 – deprecated, obsolete but still recoverable
		icon: <NoSymbolIcon className='size-4' />,
	},
	10: {
        name: 'removed',
		color: '#424242', // Grey 800 – removed, no longer usable
		icon: <XCircleIcon className='size-4' />,
	},
};
  

export default function Status(props: Readonly<StatusProps>) {
	const { status } = props;

    const statusConfig = statusMap[status as keyof typeof statusMap];
	const name = statusConfig?.name || status;
	const color = statusConfig?.color || '#000000'; // Default to black if status not found
	const icon = statusConfig?.icon;

	return (
		<span
			className='w-full p-2 rounded-lg text-white font-bold text-sm text-center uppercase flex items-center justify-center gap-1'
			style={{ backgroundColor: color }}
		>
            {icon && (
                <>
                  {icon}&nbsp;
                </>
            )}
			<span className='truncate'>{name}</span>
		</span>
	);

}
