export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  console.log(productId);
  return (
    <>
      <h1>Product Detail Page</h1>
    </>
  );
}
