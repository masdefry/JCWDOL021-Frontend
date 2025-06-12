import CardProduct from '@/features/profile/detail/components/CardProduct';
import Link from 'next/link';

export default function DetailPage() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <CardProduct
          title={'Purwadhika School'}
          paragraph={'Lorem ipsum'}
        />
        <CardProduct
          title={'Web Development'}
          paragraph={'Lorem ipsum'}
        />

        <Link href={'/login'}>Go to login page</Link>
      </div>
    </>
  );
}

// Props: Hanya mengirim data dari parent menuju ke child
