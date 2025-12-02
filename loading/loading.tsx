export default function Loading() {
	return (
		<div className='flex flex-col items-center justify-center min-h-[80dvh] w-full overflow-hidden space-y-8'>
			<div className='h-16 w-16 border-6 border-gray-300 border-t-transparent rounded-full animate-spin' />
			<h1 className='text-xl mb-1'>Please wait a moment</h1>
			<div className='text-gray-500 text-sm'>
				Your content is being loaded
			</div>
		</div>
	);
}
