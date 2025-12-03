// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type NavProps = {
  logo?: StaticImageData;
  name?: string;
  children?: React.ReactNode;
};

export default function Navbar(props: Readonly<NavProps>) {
  const { logo, name, children } = props;

  return (
    <div className="bg-infn sticky top-0 z-100 flex h-16 w-full items-center justify-between">
      <Link href="/" className="flex h-full w-auto items-center">
        {logo && (
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={60}
            className="mr-2 ml-4 inline-block"
          />
        )}
        {name && (
          <span className="text-xl font-semibold text-white">{name}</span>
        )}
      </Link>

      {children}
    </div>
  );
}
