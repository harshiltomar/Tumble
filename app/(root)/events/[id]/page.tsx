import { getEventByid } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import React from "react";

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  //
  const event = await getEventByid(id);

  console.log(event);
  return <div>EventDetails</div>;
};

export default EventDetails;
