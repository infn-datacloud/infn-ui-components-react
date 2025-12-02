// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import React from "react";

export type FormProps = React.HTMLProps<HTMLFormElement>

export function Form(props: FormProps) {
  return <form {...props} className='space-y-4' />;
}
