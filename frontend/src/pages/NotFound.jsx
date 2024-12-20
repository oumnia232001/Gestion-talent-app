import { LOGIN_ROUTE } from "../router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
        <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
        <a href={LOGIN_ROUTE} className="block px-8 py-3 font-semibold rounded text-white bg-blue-900 hover:bg-blue-500 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg">Back to login page</a>
      </div>
    </div>
  );
}
