import { DndContext } from "@dnd-kit/core";

import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

const NewThing = () => {
  return (
    <div
      className="min-h-screen py-12
                text-xl font-mono text-gray-100 dark:text-gray-300
                bg-gradient-to-tr 
              from-pink-400 via-blue-300 to-green-200
              dark:from-indigo-700 dark:via-purple-600 dark:to-pink-500"
    >
      <main>
        <h1 className="flex justify-center mb-5 font-bold">
          Welcome to Ken&apos;s NewThing
        </h1>
        <DndContext>
          <Draggable />
          <Droppable />
        </DndContext>
      </main>
    </div>
  );
};
export default NewThing;
