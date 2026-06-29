import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Settings() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] py-10 bg-gray-50">
      <UserProfile routing="hash" />
    </div>
  );
}

export default Settings;
