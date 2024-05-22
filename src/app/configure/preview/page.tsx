import { notFound } from 'next/navigation';
import { PageProps } from '../design/page';
import { db } from '@/db';
import DesignPreview from './DesignPreview';
import { constructMetadata } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'Design Preview',
  description: 'Preview your design',
});

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== 'string') {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  return <DesignPreview configuration={configuration} />;
};

export default Page;
