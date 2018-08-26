import { Lesson } from "./lesson.js";
import { QuestionRepository } from "./question.repository.js";
import { Settings } from "./settings.js";

const KEY = "lesson";

export class LessonRepository {
  public constructor(
    private readonly settings: Settings,
    private readonly questionRepository: QuestionRepository,
  ) {}

  public getCurrentLesson(): Lesson {
    let lesson = this.load();
    if (lesson == null) {
      lesson = this.create();
      this.save(lesson);
    }
    return lesson;
  }

  public isFinished(lesson: Lesson): boolean {
    return true;
  }

  public create(): Lesson {
    const items = this.questionRepository
      .getOldestQuestions(this.settings.getLessonSize())
      .map((question) => ({
        answers: this.questionRepository.chooseAnswers(this.settings.getNumberOfAnswers() - 1),
        correct: question.getAnswer(),
        question: question.getQuestion(),
        success: [],
      }));

    return new Lesson(
      Date.now(),
      items,
    );
  }

  public load(): Lesson | null {
    try {
      return Lesson.fromJSON(JSON.parse(String(window.localStorage.getItem(KEY))));
    } catch (e) {
      return null;
    }
  }

  public save(lesson: Lesson): void {
    window.localStorage.setItem(KEY, JSON.stringify(lesson));
  }
}
