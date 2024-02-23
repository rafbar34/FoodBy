"use client";
import { TableOfHours } from "@/components/Schudle/TableOfHours";
import { TopBarMenu } from "@/components/TopBar/TopBarMenu";
import {
  addDays,
  eachDayOfInterval,
  eachHourOfInterval,
  getWeek,
} from "date-fns";
import React, { useState } from "react";
import { postSchedule } from "../../../methods/postSchedule";

const Schudle = () => {
  const [formData, setFormData] = useState([
    {
      date: null,
      name: null,
      last_name: null,
    },
  ]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const getAvailableDate = eachDayOfInterval({
    start: new Date(),
    end: addDays(new Date(), 6),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = postSchedule(formData[0]);
    console.log(response);
    toggleModal();
  };
  return (
    <TopBarMenu>
      <div className="px-20">
        <div className="grid grid-cols-7 ">
          {getAvailableDate.map((date, index) => {
            const results = eachHourOfInterval({
              start: new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                12
              ),
              end: new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                15
              ),
            });
            return (
              <div
                key={index}
                className="justify-center items-center flex flex-col border-2">
                <div className="border-b-2 w-full text-center">
                  {new Date(date).getDate().toLocaleString()}
                </div>
                <TableOfHours
                  setState={setFormData}
                  results={results}
                  toggleModal={toggleModal}
                />
              </div>
            );
          })}
        </div>
      </div>
      {isOpenModal && (
        <div className="h-screen w-screen flex items-center justify-center absolute">
          <div className="w-1/2 h-1/2 bg-white glass-effect rounded-lg border-2 flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label htmlFor="name">Imie</label>
                <input
                  className="rounded-lg"
                  id="name"
                  onChange={(e) => {
                    setFormData((prev) => [
                      {
                        date: prev[0].date,
                        name: e.target.value,
                        last_name: prev.last_name,
                      },
                    ]);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">Nazwisko</label>
                <input
                  className="rounded-lg"
                  id="last_name"
                  onChange={(e) => {
                    setFormData((prev) => [
                      {
                        date: prev[0].date,
                        name: prev[0].name,
                        last_name: e.target.value,
                      },
                    ]);
                  }}
                />
              </div>
              <button
                type="submit"
                className="px-10 py-2 bg-gray-500 rounded-lg">
                Wyślij
              </button>
            </form>
          </div>
        </div>
      )}
    </TopBarMenu>
  );
};
export default Schudle;
