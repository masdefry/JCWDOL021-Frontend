export const onGetProductDetailByProductId = async (productId: string) => {
  const response = await fetch(
    `http://localhost:3000/api/products/${productId}`,
    {
      cache: 'no-store',
    }
  );
  const product = await response.json();

  return product;
};

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = await onGetProductDetailByProductId(productId);
  console.log(product);
  return (
    <>
      <h1>Product Detail Page</h1>
      <p>{product?.product?.name}</p>
      <p>{product?.product?.price}</p>
    </>
  );
}

// SSR > SEO & Shareable