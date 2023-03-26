import { defineStore } from "pinia";

import { TodoEvent } from "@/types/event.type";

export const useEventList = defineStore("event-list-store", {
  state: () => {
    return {
      eventList: [] as Array<TodoEvent>,
    };
  },
  actions: {
    load() {
      this.eventList = [
        {
          id: 1,
          title: "Buy fruits",
          date: "2023-01-01",
          time: "18:00:00",
          img: "https://placehold.co/350x100/BBD6B8/white",
        },
        {
          id: 2,
          title: "Meeting with Mr.Anker",
          date: "2023-01-02",
          time: "19:00:00",
          img: "https://placehold.co/350x100/94AF9F/white",
        },
        {
          id: 3,
          title: "Doctor appointment",
          date: "2023-02-01",
          time: "09:00:00",
          img: "https://placehold.co/350x100/94AF7F/white",
        },
      ];
    },
  },
  getters: {
    numberOfEvents(): number {
      return this.eventList.length;
    },
    getEventByID: (state) => {
      return (userId: number) =>
        state.eventList.find((event) => event.id === userId);
    },
  },
});
