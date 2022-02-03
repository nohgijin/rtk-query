import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>홈</a>
        </Link>
      </li>
      <li>
        <Link href="/user">
          <a>사용자 관리</a>
        </Link>
      </li>
      <li>
        <Link href="/version">
          <a>버전 안내</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;
