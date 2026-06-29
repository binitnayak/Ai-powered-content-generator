import React from 'react';
import { Check } from 'lucide-react';

function Billing() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 min-h-[calc(100vh-64px)]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Pricing Plans</h2>
        <p className="mt-4 text-xl text-gray-500">Choose the perfect plan for your content needs.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-5xl">
        {/* Free Plan */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col w-full md:w-1/2 max-w-sm">
          <h3 className="text-2xl font-semibold text-gray-900">Free</h3>
          <div className="mt-4 flex items-baseline text-5xl font-extrabold">
            $0
            <span className="ml-1 text-xl font-medium text-gray-500">/mo</span>
          </div>
          <p className="mt-4 text-gray-500">Get started with basic AI content generation.</p>
          <ul className="mt-8 space-y-4 flex-1">
            <li className="flex items-center gap-3 text-gray-700">
              <Check className="h-5 w-5 text-purple-600" />
              10,000 Words/month
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <Check className="h-5 w-5 text-purple-600" />
              50+ Content Templates
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <Check className="h-5 w-5 text-purple-600" />
              Unlimited Copy & Paste
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <Check className="h-5 w-5 text-purple-600" />
              1 Month History
            </li>
          </ul>
          <button className="mt-8 block w-full py-3 px-6 border border-transparent rounded-lg text-center font-medium text-purple-700 bg-purple-100 hover:bg-purple-200 transition-colors">
            Current Plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-purple-900 border-2 border-purple-500 rounded-2xl shadow-xl p-8 flex flex-col w-full md:w-1/2 max-w-sm relative transform md:-translate-y-4">
          <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </div>
          <h3 className="text-2xl font-semibold text-white">Pro</h3>
          <div className="mt-4 flex items-baseline text-5xl font-extrabold text-white">
            $9.99
            <span className="ml-1 text-xl font-medium text-purple-300">/mo</span>
          </div>
          <p className="mt-4 text-purple-200">Supercharge your content creation with unlimited access.</p>
          <ul className="mt-8 space-y-4 flex-1">
            <li className="flex items-center gap-3 text-white">
              <Check className="h-5 w-5 text-pink-400" />
              1,000,000 Words/month
            </li>
            <li className="flex items-center gap-3 text-white">
              <Check className="h-5 w-5 text-pink-400" />
              50+ Content Templates
            </li>
            <li className="flex items-center gap-3 text-white">
              <Check className="h-5 w-5 text-pink-400" />
              Unlimited Copy & Paste
            </li>
            <li className="flex items-center gap-3 text-white">
              <Check className="h-5 w-5 text-pink-400" />
              Unlimited History
            </li>
            <li className="flex items-center gap-3 text-white">
              <Check className="h-5 w-5 text-pink-400" />
              Priority Support
            </li>
          </ul>
          <button className="mt-8 block w-full py-3 px-6 border border-transparent rounded-lg text-center font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
