import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href="/user">유저</Link>
      </div>
      <div>
        <Link href="/version">버전</Link>
      </div>
    </>
  );
}
