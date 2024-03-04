import React from "react";

export const TableOfHours = ({
  results,
  setState,
  toggleModal,
  schedule,
}: {
  results: Array<Date>;
  setState: any;
  toggleModal: () => void;
  schedule: any;
}) => {
  return (
    <div>
      {results.map((date: Date, index: number) => {
        const checkIsAvailable = schedule.some((unavailable) => {
          return String(unavailable) === String(date);
        });

        return (
          <div
            key={index}
            className={checkIsAvailable ? "my-10 opacity-40" : "my-10"}>
            <button
              onClick={() => {
                if (!checkIsAvailable) {
                  setState((prev) => [
                    {
                      date: new Date(date),
                      name: prev.name,
                      last_name: prev.last_name,
                    },
                  ]);
                  toggleModal();
                }
              }}>
              {checkIsAvailable
                ? `Niedostępny`
                : `${new Date(date).getHours()}:00`}
            </button>
          </div>
        );
      })}
    </div>
  );
};
