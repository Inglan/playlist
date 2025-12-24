"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function Home() {
  const session = authClient.useSession();
  return (
    <>
      {session.isPending && <div>Loading...</div>}
      {session.data?.session ? (
        <div>
          Welcome, {session.data.user?.name}!
          <button onClick={() => authClient.signOut()}>sign out</button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => authClient.signIn.social({ provider: "spotify" })}
          >
            log in
          </button>
        </div>
      )}
    </>
  );
}
