import { CreateRoomForm } from "./create-room-form";

export default function CreateRoom() {
  return (
    <div className="container mx-auto flex flex-col gap-8">
      <h1 className="text-4xl font-bold pt-12 pb-4">Create Room</h1>
      <CreateRoomForm />
    </div>
  );
}
