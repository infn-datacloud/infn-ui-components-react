// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import NextLink from "next/link";

type LinkProps = {
  href: string;
  target?: "_blank";
  children: React.ReactNode;
  className?: string;
};

export default function Link(props: Readonly<LinkProps>) {
  const { href, children, className } = props;
  return (
    <NextLink
      href={href}
      target={props.target}
      className={`font-medium text-primary-600 underline dark:text-primary-400 ${className ?? ""}`}
    >
      {children}
    </NextLink>
  );
}
