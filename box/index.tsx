// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Button } from "@/components/buttons";
import Link from "next/link";

type BoxProps = {
  title?: string;
  subtitle?: string;
  header?: string;
  btnText?: string;
  btnHref?: string;
  onclick?: () => void;
  icon?: React.ReactNode;
  type?: "small" | "blank";
  children?: React.ReactNode;
};

export default function Box(props: Readonly<BoxProps>) {
  const {
    title,
    subtitle,
    header,
    btnText,
    btnHref,
    onclick,
    icon,
    type,
    children,
  } = props;

  if (!type || type === "blank") {
    return (
      <div className="box w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="flex w-8/10 flex-col lg:w-7/10">
            {header ? (
              <span className="text-infn/50 text-sm font-bold uppercase lg:w-full">
                {header}
              </span>
            ) : (
              ""
            )}
            {title ? (
              <span className="text-xl font-bold lg:w-full">{title}</span>
            ) : (
              ""
            )}
            {subtitle ? (
              <span className="text-sm md:truncate lg:w-full">
                {subtitle || ""}
              </span>
            ) : (
              ""
            )}
          </div>
          {btnText ? (
            <div>
              <Button
                className="btn btn-secondary lg:mt-0 lg:w-auto"
                onClick={onclick}
              >
                {btnText || ""}
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
        {children}
      </div>
    );
  } else if (type === "small") {
    return (
      <div className="box w-full">
        <div className="flex flex-col items-center justify-center md:items-start lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col items-center text-center md:flex-row md:items-start md:text-left lg:w-6/10">
            {icon ? (
              <div className="flex h-12 w-12 items-center justify-center rounded-full inset-shadow-[-1px_1px_4px_rgba(0,0,0,0.1)] md:mr-6">
                <div className="h-8 w-8">{icon}</div>
              </div>
            ) : (
              ""
            )}
            <div className="flex w-8/10 flex-col lg:w-7/10">
              <span className="text-xl font-bold lg:w-full">{title || ""}</span>
              <span className="text-sm md:truncate lg:w-full">
                {subtitle || ""}
              </span>
            </div>
          </div>
          <Link href={btnHref || ""} className="w-full lg:w-auto">
            <Button className="btn btn-primary btn-bold clickable mt-6 w-full lg:mt-0 lg:w-auto">
              {btnText || ""} <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
