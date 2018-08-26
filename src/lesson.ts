import { ILessonItem } from "./types.js";

export class Lesson {
  public static fromJSON(object: any): Lesson {
    if (typeof object !== "object") {
      throw new Error(`Lesson must be an object`);
    }
    if (typeof object.id !== "number") {
      throw new Error(`Lesson.id must be a number`);
    }
    if (!Array.isArray(object.items)) {
      throw new Error(`Lesson.items must be an array`);
    }
    const current: number = parseInt(object.current, 10) || 0;
    const createdAt: number = parseInt(object.createdAt, 10) || 0;
    return new Lesson(
      object.id,
      object.items.map((item: any, index: number) => {
        if (typeof item !== "object") {
          throw new Error(`Lesson.items[${index}] must be an object`);
        }
        if (typeof item.question !== "string") {
          throw new Error(`Lesson.items[${index}].question must be a string`);
        }

        if (Array.isArray(item.answers)) {
          throw new Error(`Lesson.items[${index}].answers must be an array`);
        }
        if (item.answers.length === 0) {
          throw new Error(`Lesson.items[${index}].answers cannot be empty array`);
        }
        if (item.answers.some((answer: any) => typeof answer !== "string")) {
          throw new Error(`Lesson.items[${index}].answers must be an array of strings`);
        }

        if (Array.isArray(item.success)) {
          throw new Error(`Lesson.items[${index}].success must be an array`);
        }
        if (item.success.some((success: any) => typeof success !== "boolean")) {
          throw new Error(`Lesson.items[${index}].success must be an array of booleans`);
        }

        return item;
      }),
      current,
      createdAt,
    );
  }

  public readonly createdAt: number;
  private current: number;

  public constructor(
    public readonly id: number,
    private readonly items: ILessonItem[],
    current: number = 0,
    createdAt: number = 0,
  ) {
    if (this.items.length === 0) {
      throw new Error(`At least one question is expected`);
    }
    this.current = Math.max(Math.min(current, this.items.length), 0);
    this.createdAt = createdAt <= 0 ? Date.now() : createdAt;
  }

  public getCurrentQuestion(): string {
    return this.items[this.current].question;
  }

  public getCurrentAnswers(): string[] {
    return this.items[this.current].answers;
  }

  public answerCurrentQuestion(answer: string): void {
    const success = this.items[this.current].correct === answer;
    this.items[this.current].success.push(success);
  }

  public nextQuestion(): void {
    this.current = (this.current + 1) % this.items.length;
  }

  public getAnswersForQuestion(question: string): string[] {
    return this.items
      .filter((item) => item.question === question)
      .map((item) => item.answers)
      .reduce<string[]>((a, x) => [...a, ...x], []);
  }

  public isFinished(): boolean {
    return this.items.every((item) => item.success.length > 0 && item.success[item.success.length - 1]);
  }

  public toJSON(): object {
    return {
      createdAt: this.createdAt,
      current: this.current,
      id: this.id,
      items: this.items,
    };
  }
}
