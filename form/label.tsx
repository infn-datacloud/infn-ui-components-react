// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import {
  Label as HeadlessLabel,
  LabelProps as HeadlessLabelProps,
} from "@headlessui/react";

type LabelProps = HeadlessLabelProps

export function Label(props: Readonly<LabelProps>) {
  return (
		<HeadlessLabel
			className="data-[required]:after:text-danger dark:text-secondary py-1 uppercase text-infn font-bold text-sm data-[required]:after:content-['*'] after:ml-1"
			{...props}
		/>
  );
}
