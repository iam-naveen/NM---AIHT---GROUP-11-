import { Button } from "@/components/ui/button";
// import TaskCard from "./components/TaskCard";
import TaskArea from "./components/TaskArea";
// import { Dispatch, DragEvent, useState } from "react";

export default function App() {
  return (
    <div className="flex h-screen w-full bg-slate-100">
      <div className="flex flex-col w-72 border-r border-slate-200 bg-slate-50 dark:bg-slate-900">
        <div className="flex items-center h-16 px-6 border-b border-slate-200 bg-slate-50 dark:bg-slate-900">
          <svg
            className=" h-6 w-6 text-slate-500 dark:text-slate-300"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
            <path d="M15 3v6h6" />
          </svg>
          <h1 className="ml-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
            Projects
          </h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="py-4 space-y-2">
            <Button
              className="justify-start text-slate-900 dark:text-slate-100"
              variant="ghost"
            >
              <svg
                className=" h-5 w-5 text-slate-500 dark:text-slate-300"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
              </svg>
              <span className="ml-2">All Projects</span>
            </Button>
            <Button
              className="justify-start text-slate-900 dark:text-slate-100"
              variant="ghost"
            >
              <svg
                className=" h-5 w-5 text-slate-500 dark:text-slate-300"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
              <span className="ml-2">Trash</span>
            </Button>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800" />
          <div className="p-4 space-y-2">
            <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-slate-200 dark:bg-slate-800">
              <span className="text-sm text-slate-900 dark:text-slate-100">
                Project 1
              </span>
              <svg
                className=" h-5 w-5 text-slate-500 dark:text-slate-300"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">
              <span className="text-sm text-slate-900 dark:text-slate-100">
                Project 2
              </span>
              <svg
                className=" h-5 w-5 text-slate-500 dark:text-slate-300"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <h2 className="flex items-center h-16 px-6 border-b border-slate-200 bg-slate-50 dark:bg-slate-900 text-lg font-semibold text-slate-900 dark:text-slate-100">
          Project 1
        </h2>
        <p className="flex overflow-y-auto p-6 space-y-4 text-sm text-slate-900 dark:text-slate-100">
          This is the Project Description.
        </p>
        <TaskArea></TaskArea>
      </div>
    </div>
  );
}
