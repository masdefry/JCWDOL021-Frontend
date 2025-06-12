export default function TailwindCSS() {
  return (
    <>
      <h1 className='text-9xl text-green-500'>Hello</h1>

        {/* xs: xtra small, sm: small, md: medium, lg: large, xl: xtra large */}
      <div className='text-green-500 md:text-yellow-500 xl:text-blue-500'>
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
    </>
  );
}
