export interface IAnswer {
  grade: number;
  lesson: number;
  time: number;
}

export interface IController {
  inactivate(): void;
  show(): void;
}

export interface ILessonItem {
  answers: string[];
  correct: string;
  success: boolean[];
  question: string;
}

export type Theme = "light" | "dark";
