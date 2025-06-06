import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div><Link href="/login">ログイン</Link></div>
      <div><Link href="/register">登録</Link></div>
    </main>
  );
}
