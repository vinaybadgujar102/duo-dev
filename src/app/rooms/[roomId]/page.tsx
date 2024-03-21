import { getRoom } from "@/app/data-access/room";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default async function RoomPage(props: { params: { roomId: string } }) {
  const roomId = props.params.roomId;
  const room = await getRoom(roomId);
  if (!room) {
    return <div>Room not found</div>;
  }
  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-3 p-4 pr-1">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
          VIDEO PLayer
        </div>
      </div>
      <div className="col-span-1 p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-base">{room?.name}</h1>
          <p className="text-base_text-gray-600">{room?.description}</p>
          <Badge className="w-fit">{room.language}</Badge>
          {room.githubRepo && (
            <Link
              href={room.githubRepo}
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Github Project
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
