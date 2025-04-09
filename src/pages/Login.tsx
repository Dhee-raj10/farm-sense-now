
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import { GrainIcon } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-12">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <GrainIcon className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary">FarmSense Now</h1>
          <p className="text-muted-foreground">Smart farming insights for better decisions</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
