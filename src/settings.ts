import * as C from "./constants.js";
import { Theme } from "./types.js";
import { limit } from "./utils.js";

export class Settings {
  public static fromJSON(object: any): Settings {
    if (typeof object !== "object") {
      throw new Error(`Settings must be an object`);
    }
    if (typeof object.lessonSize !== "number") {
      throw new Error(`Settings.lessonSize must be a number`);
    }
    if (typeof object.numberOfAnswers !== "number") {
      throw new Error(`Settings.numberOfAnswers must be a number`);
    }
    if (typeof object.theme !== "string") {
      throw new Error(`Settings.theme must be a string`);
    }
    if (object.theme !== "dark" && object.theme !== "light") {
      throw new Error(`Settings.theme must be "dark" or "light"`);
    }
    return new Settings(
      object.lessonSize,
      object.numberOfAnswers,
      object.theme,
    );
  }

  private lessonSize: number;
  private numberOfAnswers: number;

  public constructor(
    lessonSize: number,
    numberOfAnswers: number,
    private theme: Theme,
  ) {
    this.lessonSize = limit(lessonSize, C.LESSON_SIZE_MIN, C.LESSON_SIZE_MAX);
    this.numberOfAnswers = limit(numberOfAnswers, C.NUMBER_OF_ANSWERS_MIN, C.NUMBER_OF_ANSWERS_MAX);
  }

  public getLessonSize(): number {
    return this.lessonSize;
  }

  public getNumberOfAnswers(): number {
    return this.numberOfAnswers;
  }

  public setLessonSize(value: number): void {
    this.lessonSize = limit(value, C.LESSON_SIZE_MIN, C.LESSON_SIZE_MAX);
  }

  public setNumberOfAnswers(value: number): void {
    this.numberOfAnswers = limit(value, C.NUMBER_OF_ANSWERS_MIN, C.NUMBER_OF_ANSWERS_MAX);
  }

  public getTheme(): Theme {
    return this.theme;
  }

  public setTheme(value: Theme): void {
    this.theme = value;
  }

  public toJSON(): object {
    return {
      lessonSize: this.lessonSize,
      numberOfAnswers: this.numberOfAnswers,
      theme: this.theme,
    };
  }
}
