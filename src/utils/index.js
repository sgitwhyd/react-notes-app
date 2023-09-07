let notes = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { showFormattedDate };

export const getArchivedNotes = () => {
  const archivedNotes = notes.filter((note) => note.archived);
  return archivedNotes;
};

export const getAllNotes = () => notes;

export const deleteNoteHandler = (id) => {
  notes = notes.filter((note) => note.id !== id);
};

export const getActiveNotes = () => {
  const activeNotes = notes.filter((note) => !note.archived);
  return activeNotes;
};

export const handleSwitchToArchieve = (id) => {
  notes = notes.map((note) => {
    if (note.id === id) {
      return {
        ...note,
        archived: !note.archived,
      };
    }

    return note;
  });
};

export const handleSwitchToActive = (id) => {
  notes = notes.map((note) => {
    if (note.id === id) {
      return {
        ...note,
        archived: !note.archived,
      };
    }
    return note;
  });
};

export const handleAddNote = ({ title, body }) => {
  const newNote = {
    id: +new Date(),
    createdAt: new Date().toISOString(),
    title,
    body,
    archived: false,
  };
  notes = [...notes, newNote];
};

export const handleSearchNotes = (notesData, searchParam) => {
  const filteredNotes = notesData.filter((note) =>
    note.title
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(searchParam.toLowerCase().replace(/\s+/g, ""))
  );

  return {
    filteredNotes,
  };
};

export const getNote = (id) => {
  return notes.find((note) => note.id === id);
};
