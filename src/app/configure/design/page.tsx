import { notFound } from 'next/navigation';
import DesignConfigurator from './DesignConfigurator';
import { db } from '@/db';
import { constructMetadata } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'Design Configurator',
  description: 'Design your product',
});

export interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== 'string') return notFound();

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) return notFound();

  const { width, height, imageUrl } = configuration;

  return (
    <DesignConfigurator
      configId={id}
      imageUrl={imageUrl}
      imageDimensions={{ width, height }}
    />
  );
};

export default Page;
