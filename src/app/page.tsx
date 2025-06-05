import Link from "next/link";
import Header from "@/app/components/header";

export default function Page() {
  return (
    <main>
      <Header></Header>
      <div><Link href="/login">ログイン</Link></div>
      <div><Link href="/register">登録</Link></div>
    </main>
  );
}
