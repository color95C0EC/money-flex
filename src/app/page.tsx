import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/login">ログイン</Link>
      <Link href="/register">登録</Link>
    </div>
  );
}
