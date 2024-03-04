import React from "react";

export const ScheduleModal = ({
  setFormData,
  toggleModal,
  handleSubmit,
}: {
  setFormData: React.Dispatch<
    React.SetStateAction<
      {
        date?: null | Date;
        name?: null | string;
        last_name?: null | string;
      }[]
    >
  >;
  toggleModal: () => void;
  handleSubmit: (e: any) => Promise<void>;
}) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center absolute">
      <div className="bg-white glass-effect w-1/2 h-1/2  rounded-lg border-2">
        <button
          onClick={toggleModal}
          className="w-10 h-10 text-black absolute right-0">
          X
        </button>
        <div className="flex justify-center items-center h-full">
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
    </div>
  );
};
