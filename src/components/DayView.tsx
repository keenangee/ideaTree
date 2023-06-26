"use client";

import { useEffect, useState } from "react";
import IdeaInput from "./IdeaInput";
import { Ideas } from "@/types";
import { getDailyIdeas } from "@/utils/api";

const DayView = () => {
  const [ideas, setIdeas] = useState<Ideas>({});

  useEffect(() => {
    try {
      const fetchIdeas = async () => {
        const ideas = (await getDailyIdeas()) || {};
        console.log(ideas);
        setIdeas(ideas.dailyIdeas);
      };
      fetchIdeas();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Today</h2>
      {Object.entries(ideas).map(([key, value]) => (
        <div key={key} className="flex flex-row justify-center items-center">
          <h3 className="text-xl font-bold">{value}</h3>
          <button className="px-1 mx-2 bg-lightest border-solid border-2 border-darkest rounded-md">
            X
          </button>
        </div>
      ))}
      <IdeaInput />
    </div>
  );
};

export default DayView;
