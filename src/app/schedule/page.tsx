"use client";
import { TopBarMenu } from "@/components/TopBar/TopBarMenu";
import { addDays, eachDayOfInterval, eachHourOfInterval } from "date-fns";
import React, { Suspense, useEffect, useState } from "react";
import { postSchedule } from "../../../methods/postSchedule";
import { getSchedule } from "../../../methods/getSchedule";
import { TableOfHours } from "@/components/Schudle/TableOfHours";
import { ScheduleModal } from "@/components/Schudle/ScheduleModal";

const Schedule = () => {
  const [formData, setFormData] = useState([
    {
      date: null,
      name: null,
      last_name: null,
    },
  ]);
  const [schedule, SetSchedule] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const getAvailableDate = eachDayOfInterval({
    start: new Date(),
    end: addDays(new Date(), 6),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData[0]);
    const response = await postSchedule(formData[0]);
    if (response?.status === 200) {
      alert("Zapisano");
      toggleModal();
    } else {
      alert("Error connection");
    }
  };

  const getData = async () => {
    const { data } = await getSchedule();
    const restructureAvailableDates = data.schedule.map((item) => {
      console.log(item.date);
      return new Date(item.date);
    });
    SetSchedule(restructureAvailableDates);
  };
  useEffect(() => {
    getData();
  }, [isOpenModal]);
  return (
    <TopBarMenu isActive={"schedule"}>
      <div className="px-20">
        <h1 className="text-3xl text-center mb-10">Umów się juz dziś!</h1>
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
                <Suspense fallback={<div>loading</div>}>
                  <TableOfHours
                    setState={setFormData}
                    results={results}
                    toggleModal={toggleModal}
                    schedule={schedule}
                  />
                </Suspense>
              </div>
            );
          })}
        </div>
      </div>
      {isOpenModal && (
        <ScheduleModal
          handleSubmit={handleSubmit}
          setFormData={setFormData}
          toggleModal={toggleModal}
        />
      )}
    </TopBarMenu>
  );
};
export default Schedule;
