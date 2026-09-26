"use client";

import { MuscleContext } from "@/components/context/MuscleContext";
import type { IMuscle } from "@/types/muscle.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const SaveLaterButton = ({ muscle }: { muscle: IMuscle }) => {
  const context = useContext(MuscleContext);

  if (!context) {
    throw new Error("SaveLaterButton must be inside MuscleProvider");
  }

  const { save, setSave } = context;

  const handleSetSave = () => {
    const alreadySaved = save.some(
      (item) => item.id === muscle.id
    );

    if (alreadySaved) {
      toast.error(`"${muscle.name}" is already saved.`);
      return;
    }

    setSave((previousSave) => [
      ...previousSave,
      muscle,
    ]);

    toast.success(`"${muscle.name}" saved for later.`);
  };

  return (
    <button
      className="btn min-h-0 h-auto border border-[#30343b] bg-transparent px-5 py-3 text-xs font-medium text-gray-300 hover:border-gray-500 hover:bg-transparent"
      onClick={handleSetSave}
    >
      ♡ Save for later
    </button>
  );
};

export default SaveLaterButton;