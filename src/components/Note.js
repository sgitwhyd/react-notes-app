import React from "react";
import { showFormattedDate } from "../utils";

const Note = ({
  title,
  date,
  body,
  id,
  isArchived,
  onDelete,
  onSwitchToArchive,
  onSwitchToActiveNote,
}) => {
  return (
    <>
      <div className="border-1 relative flex max-h-fit w-full flex-col rounded-md border border-border-color">
        <div className="mb-10 flex-1 p-4">
          <div className="overflow-x-hidden text-ellipsis text-xl">{title}</div>
          <p className="my-3 text-xs">{showFormattedDate(date)}</p>
          <p className="text-sm">{body}</p>
        </div>
        <div className="bottom-0 flex w-full justify-center">
          <button
            onClick={() => onDelete(id)}
            className="border-1 w-full border-t border-r border-border-color py-2 px-4 text-base font-bold text-red-700"
          >
            Delete
          </button>
          <button
            onClick={
              isArchived
                ? () => onSwitchToActiveNote(id)
                : () => onSwitchToArchive(id)
            }
            className="border-1 w-full border-t border-border-color py-2 px-4 text-base text-primary"
          >
            {isArchived ? "Pindahkan" : "Pindahkan Ke Arsip"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;
