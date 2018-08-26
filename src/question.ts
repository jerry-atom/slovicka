import { IAnswer } from "./types.js";
import { averageGrade, shuffle } from "./utils.js";

export class Question {
  public static fromJSON(object: any): Question {
    if (typeof object !== "object") {
      throw new Error(`Question must be an object`);
    }
    if (typeof object.question !== "string") {
      throw new Error(`Question.question must be a string`);
    }
    if (typeof object.answer !== "string") {
      throw new Error(`Question.answer must be a string`);
    }
    if (!Array.isArray(object.history)) {
      throw new Error(`Question.history must be an array`);
    }
    const createdAt: number = parseInt(object.createdAt, 10) || 0;
    return new Question(
      object.question,
      object.answer,
      object.history,
      createdAt,
    );
  }

  public readonly createdAt: number;
  private lastAnswerTime: number = 0;
  private grade: number = 0;

  public constructor(
    private question: string,
    private answer: string,
    private readonly history: IAnswer[] = [],
    createdAt: number = 0,
  ) {
    this.recalculateGrade();
    this.recalculateLastAnswerTime();
    this.createdAt = createdAt <= 0 ? Date.now() : createdAt;
  }

  public getAnswer(): string {
    return this.answer;
  }

  public getQuestion(): string {
    return this.question;
  }

  public getHistory(): IAnswer[] {
    return this.history;
  }

  public setAnswer(value: string): void {
    this.answer = value;
  }

  public setQuestion(value: string): void {
    this.question = value;
  }

  public isCorrect(answer: string): boolean {
    return this.answer === answer;
  }

  public getGrade(): number {
    return this.grade;
  }

  public getLastAnswerTime(): number {
    return this.lastAnswerTime;
  }

  public getLessonHistory(lesson: number): IAnswer[] {
    return this.history.filter((entry) => entry.lesson = lesson);
  }

  public addAnswer(lesson: number, answer: string): void {
    this.history.push({
      grade: this.isCorrect(answer) ? 1 : 0,
      lesson,
      time: Date.now(),
    });
    this.recalculateGrade();
    this.recalculateLastAnswerTime();
  }

  public getLessonGrade(lesson: number): number {
    const grades = this.history
      .filter((entry) => entry.lesson === lesson)
      .map((entry) => entry.grade);

    return averageGrade(grades);
  }

  public toJSON(): object {
    return {
      answer: this.answer,
      createdAt: this.createdAt,
      history: this.history,
      question: this.question,
    };
  }

  private recalculateGrade(): void {
    const grades = this.history.map((entry) => entry.grade);
    this.grade = averageGrade(grades);
  }

  private recalculateLastAnswerTime(): void {
    this.lastAnswerTime = Math.max(0, ...this.history.map((entry) => entry.time));
  }
}
