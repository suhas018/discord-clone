import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile"
import { InitialModal } from "@/components/modals/initial-modal";



const SetupPage = async () => {
  {/* to get a profile if exists if not create and get it */}
  const profile = await initialProfile();
  // get a server if it exists
  const server = await db.server.findFirst({
    where: {
        members: {
            some: {
              profileId: profile.id
            }
        }
    }
  });
  // if exist redirect to server page 
  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  // no sever return a page to create server
  return (
    <InitialModal />
  )
}

export default SetupPage