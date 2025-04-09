
import React from 'react';
import SignupForm from '@/components/auth/SignupForm';
import { Wheat } from 'lucide-react';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-12">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Wheat className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary">Smart Farming</h1>
          <p className="text-muted-foreground">Join our platform for smart farm management</p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
