'use client';

import { useConvexAuth } from 'convex/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';
import { SignInButton } from '@clerk/clerk-react';

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Sync Your Ideas, Documents, & Plans Seamlessly.
        <p className="mt-2 sm:text-5xl md:text-6xl text-palette">
          Welcome to <span className="underline">ScribeSync</span>
        </p>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        ScribeSync is the connected intuitive workspace for seamless
        organization and collaborative productivity.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter ScribeSync
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get ScribeSync free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
