import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center m-1">
      <Link
        href={`/users`}
        className="flex justify-center bg-zinc-700 hover:bg-zinc-900 hover text-white p-4 w-fit rounded-lg"
      >
        Użytkownicy
      </Link>
    </div>
  );
}
