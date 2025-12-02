// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

'use client';

type TableProps = {
	columns: { field: string; width: number }[];
    rows: (string | number)[][];
};

export function Table(props: Readonly<TableProps>) {
    const { columns = [], rows = [] } = props;

	return (
		<>
			<div className='w-full overflow-auto my-12'>
				<div className='w-full flex mb-4'>
					{columns.map((column, i) => (
						<div
							key={i}
							className='font-bold text-infn uppercase truncate'
							style={{ width: column.width + '%' }}
						>
							{column.field}
						</div>
					))}
				</div>
				<ul className='w-full flex flex-col'>
					{rows.map((row, i) => (
						<li key={i} className='mb-2 flex flex-row py-2 w-full'>
							{row.map((cell, j) => (
								<div
									key={j}
									className='truncate'
									style={{ width: columns[j].width + '%' }}
								>
									{cell}
								</div>
							))}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
