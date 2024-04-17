import { Button } from "@/components/ui/button";
import Link from "next/link";

import { getRooms } from "../data-access/room";
import { SearchBar } from "./search-bar";
import { RoomCard } from "@/app/browse/room-card";
import { unstable_noStore } from "next/cache";
import { room } from "@/db/schema";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  unstable_noStore();

  const rooms = await getRooms(searchParams.search);
  console.log(rooms);

  return (
    <main className="min-h-screen p-16">
      <div className="flex flex-col gap-4 justify-between items-center mb-8">
        <h1 className="text-4xl">Find Dev Rooms</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
        <div className="mb-8">
          <SearchBar />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => {
          return <RoomCard key={room.id} room={room} />;
        })}
      </div>

      {rooms.length === 0 && (
        <div className="flex flex-col gap-4 justify-center items-center mt-24">
          <Image src="/no-data.svg" width="200" height="200" alt="no data" />
          <h2 className="text-2xl">No rooms yet</h2>
        </div>
      )}
    </main>
  );
}
