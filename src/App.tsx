/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl bg-white p-12 shadow-sm border border-gray-100 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Welcome to your new app
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            This is a sample page to demonstrate the responsive navbar design. Try resizing your browser window to see the mobile menu in action.
          </p>
        </div>
      </main>
    </div>
  );
}
