import { LessonController } from "./lesson.controller.js";
import { QuestionController } from "./question.controller.js";
import { SettingsController } from "./settings.controller.js";
import { atou } from "./utils.js";

export class Router {
  public constructor(
    private readonly element: HTMLElement,
    private readonly lesson: LessonController,
    private readonly settings: SettingsController,
    private readonly questions: QuestionController,
  ) {
    this.registerEvents();
    this.handleHashChanged();
  }

  private open(page: string): void {
    this.element.dataset.page = page;
  }

  private handleHashChanged(): void {
    const hash = window.location.hash;
    if (hash === "#settings") {
      this.open("settings");
      this.questions.inactivate();
      this.lesson.inactivate();
      this.settings.show();
      return;
    }
    if (hash === "#lesson" || hash === "") {
      this.open("lesson");
      this.settings.inactivate();
      this.questions.inactivate();
      this.lesson.show();
      return;
    }
    if (hash === "#questions") {
        this.open("questions");
        this.settings.inactivate();
        this.lesson.inactivate();
        this.questions.show();
        return;
    }
    const question = /^#question\/(.+)$/.exec(hash);
    if (question !== null) {
      this.open("question");
      this.settings.inactivate();
      this.lesson.inactivate();
      console.log(atou(question[1]));
      this.questions.edit(atou(question[1]));
      return;
    }
  }

  private registerEvents(): void {
    window.addEventListener("hashchange", (event) => this.handleHashChanged(), false);
  }
}
