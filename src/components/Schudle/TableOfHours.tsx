import React from "react";

export const TableOfHours = ({
  results,
  setState,
  toggleModal,
}: {
  results: Array<Date>;
  setState: any;
  toggleModal: () => void;
}) => {
  return (
    <div>
      {results.map((date: Date, index: number) => (
        <div
          key={index}
          className="my-10">
          <button
            onClick={() => {
              setState((prev) => [
                {
                  date: new Date(date),
                  name: prev.name,
                  last_name: prev.last_name,
                },
              ]);
              toggleModal();
            }}>
            {date.getHours().toLocaleString()}:00
          </button>
        </div>
      ))}
    </div>
  );
};
