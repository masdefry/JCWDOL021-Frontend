import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <h1>Login Page</h1>
      <Link href='/profile/detail'>Go to Profile Detail Page</Link>
    </>
  );
}
