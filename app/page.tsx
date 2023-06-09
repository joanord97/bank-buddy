import LoginButton from "@/components/button/login";
import { tinkLoginString } from "@/helpers/helperStrings";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <div>
          <Link
            className="btn w-40 m-2 hover:btn-neutral"
            href={tinkLoginString}
          >
            Login
          </Link>
        </div>
        <div>
          <Link className="btn w-40 m-2 hover:btn-neutral" href="/account">
            account
          </Link>
        </div>
        <div>
          <Link className="btn w-40 m-2 hover:btn-neutral" href="/transaction">
            transaction
          </Link>
        </div>
      </div>
    </main>
  );
}
