import Link from "next/link";

export default SideBar;

function SideBar() {
  return (
    <div>
      <div>
        <Link href="/home">Home</Link>
      </div>
      <div>
        <Link href="/list">記録一覧</Link>
      </div>
    </div>
  );
}
