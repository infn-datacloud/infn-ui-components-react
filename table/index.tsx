// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

"use client";

type TableProps = {
  columns: { field: string; width: number }[];
  rows: (string | number)[][];
};

export function Table(props: Readonly<TableProps>) {
  const { columns = [], rows = [] } = props;

  return (
    <>
      <div className="my-12 w-full overflow-auto">
        <div className="mb-4 flex w-full">
          {columns.map((column, i) => (
            <div
              key={i}
              className="text-infn truncate font-bold uppercase"
              style={{ width: column.width + "%" }}
            >
              {column.field}
            </div>
          ))}
        </div>
        <ul className="flex w-full flex-col">
          {rows.map((row, i) => (
            <li key={i} className="mb-2 flex w-full flex-row py-2">
              {row.map((cell, j) => (
                <div
                  key={j}
                  className="truncate"
                  style={{ width: columns[j].width + "%" }}
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
