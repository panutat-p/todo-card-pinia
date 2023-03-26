import { defineStore } from "pinia";

export const useEventList = defineStore("event-list-store", {
  state: () => {
    return {
      eventList: [] as Array<object>,
    };
  },
  actions: {
    fill() {
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
          date: "2023-01-02",
          time: "19:00:00",
          img: "https://placehold.co/350x100/94AF7F/white",
        },
      ];
    },
  },
  getters: {},
});
