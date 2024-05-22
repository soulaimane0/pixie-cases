import { Suspense } from 'react';
import ThankYou from './ThankYou';
import { constructMetadata } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'Thank You',
  description: 'Thank you for your purchase',
});

const Page = () => {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
};

export default Page;
