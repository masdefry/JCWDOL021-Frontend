import { Metadata, ResolvingMetadata } from 'next';
import { onGetProductDetailByProductId } from './page';

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata | undefined> {
  const product = await onGetProductDetailByProductId(params?.productId);
  console.log(product);
  return {
    title: `${product?.product?.name}` || 'Product Sehari-Hari',
    description: `Ini adalah product dengan nama ${product?.product?.name}. Dengan harga ${product?.product?.price}`,
    keywords: [`${product?.product?.name}`],
    authors: [
      { name: 'Purwadhika Team', url: 'https://www.purwadhika.com/about-us' },
    ],
    creator: 'Purwadhika School',
    publisher: 'Purwadhika School',
    openGraph: {
      title: `${product?.product?.name}` || 'Product Sehari-Hari',
      description: `Ini adalah product dengan nama ${product?.product?.name}. Dengan harga ${product?.product?.price}`,
      url: `http://localhost:3000/products/${params?.productId}`,
      siteName: 'Purwadhika Digital School',
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: 'https://purwadhika.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FthumbnailVideo.46d1e19b.jpg&w=1920&q=75',
          width: 1200,
          height: 630,
          alt: 'Purwadhika Digital School',
        },
      ],
    },
  };
}
