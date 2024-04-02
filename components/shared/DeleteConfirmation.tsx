"use client";

import { useTransition } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { deleteEvent } from "@/lib/actions/event.actions";
import { Button } from "../ui/button";

export const DeleteConfirmation = ({ eventId }: { eventId: string }) => {
  const pathname = usePathname();
  let [isPending, startTransition] = useTransition();
  const ref1 = "hello";

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Image
          src="/assets/icons/delete.svg"
          alt="edit"
          width={20}
          height={20}
        />
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        {/* <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
          <AlertDialogDescription className="p-regular-16 text-grey-600">
            This will permanently delete this event
          </AlertDialogDescription>
        </AlertDialogHeader> */}

        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}

          {/* <AlertDialogAction
            onClick={() =>
              startTransition(async () => {
                await deleteEvent({ eventId, path: pathname });
              })
            }
          > */}
          <Button
            onClick={() =>
              startTransition(async () => {
                await deleteEvent({ eventId, path: pathname });
              })
            }
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
          {/* </AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
