import Zepplin from "./assets/img/Zepplin.svg";
import Angular from "./assets/img/Angular.svg";
import Figma from "./assets/img/Figma.svg";
import meta from "./assets/img/meta.svg";
import reacts from "./assets/img/reacts.svg";
import Vue from "./assets/img/Vue.svg";

export const customersData = () => {
  const data = [
    {
      userId: 114423,
      source: "Zepplin",
      status: "Active",
      imgUrl: Zepplin,
      amount: "686.00",
      joined: "October",
      group: "Design",
    },
    {
      userId: 76223,
      source: "Figma",
      status: "Pending",
      imgUrl: Figma,
      amount: "864.00",
      joined: "June",
      group: "Finance",
    },
    {
      userId: 89453,
      source: "Meta",
      status: "Cancelled",
      imgUrl: meta,
      amount: "176.00",
      joined: "March",
      group: "Coding",
    },
    {
      userId: 11467,
      source: "Angular",
      status: "Active",
      imgUrl: Angular,
      amount: "49.00",
      joined: "February",
      group: "Merketing",
    },
    {
      userId: 67385,
      source: "Vue",
      status: "Active",
      imgUrl: Vue,
      amount: "999.00",
      joined: "October",
      group: "Finance",
    },
    {
      userId: 1234,
      source: "React",
      status: "Active",
      imgUrl: reacts,
      amount: "23.00",
      joined: "August",
      group: "Conding",
    },
  ];
  return [data];
};
