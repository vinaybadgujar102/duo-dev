"use server";

import { getSession } from "@/lib/auth";
import { deleteUser } from "./data-access/users";

export async function deleteAccountAction() {
  const session = await getSession();

  if (!session) {
    throw new Error("you must be logged in to delete your account");
  }

  await deleteUser(session.user.id);
}
