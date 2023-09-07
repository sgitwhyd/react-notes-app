import React, { useContext } from "react";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LocalizationContext } from "../context/LocalizationContext";

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
  const { locale } = useContext(LocalizationContext);

  const switchButtonActive = () =>
    locale === "id" ? "Tidak Diarsipkan" : "Unarchived";
  const switchButtonArchive = () => (locale === "id" ? "Arsipkan" : "Archived");

  return (
    <>
      <div className="border-1 relative flex max-h-fit w-full flex-col rounded-md border border-border-color">
        <div className="mb-10 flex-1 p-4">
          <Link
            to={`/note/${id}`}
            className="overflow-x-hidden text-ellipsis text-xl"
          >
            {title}
          </Link>
          <p className="my-3 text-xs">{showFormattedDate(date)}</p>
          <p className="text-sm">{body}</p>
        </div>
        <div className="bottom-0 flex w-full justify-center">
          <button
            onClick={() => onDelete(id)}
            className="border-1 w-full border-t border-r border-border-color py-2 px-4 text-base font-bold text-red-700"
          >
            {locale === "id" ? "Hapus" : "Delete"}
          </button>
          <button
            onClick={
              isArchived
                ? () => onSwitchToActiveNote(id)
                : () => onSwitchToArchive(id)
            }
            className="border-1 w-full border-t border-border-color py-2 px-4 text-base text-primary"
          >
            {isArchived ? switchButtonActive() : switchButtonArchive()}
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;

Note.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSwitchToArchive: PropTypes.func,
  onSwitchToActiveNote: PropTypes.func,
};
