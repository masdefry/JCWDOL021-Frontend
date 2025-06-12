import CardProduct from '@/features/profile/detail/components/CardProduct';

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
      </div>
    </>
  );
}

// Props: Hanya mengirim data dari parent menuju ke child
