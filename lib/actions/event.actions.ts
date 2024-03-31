"use server";
import { CreateEventParams } from "@/types";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";
import Category from "../database/models/category.model";

const populateEvent = async (query: any) => {
  return query
    .populate({
      path: "organizer",
      model: "User",
      select: "_id firstName lastName",
    })
    .populate({ path: "category", model: Category, select: "_id name" });
};

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();
    console.log("event actions db connected");

    // const organizer = await User.findById(userId);

    // if (!organizer) {
    //   throw new Error("Organizer not found");
    // }

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: "601d74db9f384b9b6ca4d5a9",
    });

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};

export const getEventByid = async (eventId: string) => {
  try {
    await connectToDatabase();

    const event = await populateEvent(Event.findById(eventId));

    if (!event) {
      throw new Error("Event not found");
    }
  } catch (error) {
    handleError(error);
  }
};
