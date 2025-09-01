// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

function arrayRange(start: number, stop: number, step: number = 1) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step
  );
}

function PreviousPage(props: Readonly<{ page: number }>) {
  const { page } = props;
  return (
    <div>
      <div className="text-secondary bg-infn dark:text-primary dark:border-light-gray dark:bg-light-gray flex aspect-square size-8 items-center justify-center rounded-full dark:border-3">
        {page}
      </div>
      <div className="border-infn dark:border-secondary m-auto h-12 w-0 border-l-3" />
    </div>
  );
}

function CurrentPage(props: Readonly<{ page: number; totalPages: number }>) {
  const { page, totalPages } = props;
  const isLast = page === totalPages;
  return (
    <div>
      <div className="text-primary border-infn dark:border-light-gray dark:text-light-gray flex aspect-square size-8 items-center justify-center rounded-full border-3 bg-transparent">
        {page}
      </div>
      <div
        className="dark:border-secondary/30 m-auto h-12 w-0 border-l-3 border-gray-400 data-[last=true]:hidden"
        data-last={isLast}
      />
    </div>
  );
}

function NextPage(props: Readonly<{ page: number; totalPages: number }>) {
  const { page, totalPages } = props;
  const isLast = page === totalPages - 1;
  return (
		<div>
			<div className='border-3 border-gray-400 flex size-8 items-center justify-center rounded-full bg-transparent text-gray-400'>
				{page + 1}
			</div>
			<div
				className='dark:border-secondary/30 m-auto h-12 w-0 border-l-3 border-gray-400 data-[last=true]:hidden'
				data-last={isLast}
			/>
		</div>
  );
}

type StepperProps = {
  currentPage: number;
  totalPages: number;
};

export function Stepper(props: Readonly<StepperProps>) {
  const { currentPage, totalPages } = props;
  const lastPage = totalPages - 1;

  // if currentPage == 0, previousPage is an empty array
  const previousPages = arrayRange(1, currentPage - 1);
  const nextPages = arrayRange(currentPage, lastPage);

  function PreviousPages() {
    return previousPages.map((i) => (
      <PreviousPage key={`step-${i}`} page={i} />
    ));
  }

  function NextPages() {
    return nextPages.map((i) => (
      <NextPage key={`step-${i}`} page={i} totalPages={totalPages} />
    ));
  }

  return (
    <div className="flex flex-col font-bold w-min">
      <PreviousPages />
      <CurrentPage page={currentPage} totalPages={totalPages} />
      <NextPages />
    </div>
  );
}
