"use server";
import { eventsMock } from "@data/mock/events";
import { Event } from "@data/types/event";

export const getEvents = async (): Promise<Event[]> => {
  return eventsMock;
};
