// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import Image, { StaticImageData } from "next/image";

type HeaderProps = {
  logo?: StaticImageData;
  title?: string;
  subtitle?: string;
};

export default function Header(props: Readonly<HeaderProps>) {
  const { logo, title, subtitle } = props;

  return (
    <div className="mb-16 flex flex-col items-center text-center">
      {logo && (
        <Image src={logo} alt="Logo" width={300} height={150} className="m-8" />
      )}
      {title && <h1 className="mb-2 font-bold">{title}</h1>}
      {subtitle && <p className="w-2/3">{subtitle}</p>}
    </div>
  );
}
