export default function Loading() {
  return (
    <div className="flex min-h-[80dvh] w-full flex-col items-center justify-center space-y-8 overflow-hidden">
      <div className="h-16 w-16 animate-spin rounded-full border-6 border-gray-300 border-t-transparent" />
      <h1 className="mb-1 text-xl">Please wait a moment</h1>
      <div className="text-sm text-gray-500">Your content is being loaded</div>
    </div>
  );
}
