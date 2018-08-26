import * as C from "./constants.js";
import { Settings } from "./settings.js";
import { SettingsRepository } from "./settings.repository.js";
import { IController, Theme } from "./types.js";

const LESSON_SIZE = "lesson_size";
const NUMBER_OF_ANSWERS = "number_of_answers";
const THEME = "theme";

export class SettingsController implements IController {
  private isControllerActive: boolean = false;
  private settings: Settings;

  public constructor(
    private readonly element: HTMLElement,
    private readonly settingsRepository: SettingsRepository,
  ) {
    this.settings = this.settingsRepository.load();
    this.registerEvents();
  }

  public inactivate(): void {
    this.isControllerActive = false;
  }

  public show(): void {
    this.element.innerHTML = `
      <form>
        <label>
          Velikost lekcí:
          <input type="number"
                  min="${C.LESSON_SIZE_MIN}"
                  max="${C.LESSON_SIZE_MAX}"
                  name="${LESSON_SIZE}"
                  value="${this.settings.getLessonSize()}"
          />
        </label>
        <label>
          Počet odpovědí k otázce:
          <input type="number"
                  min="${C.NUMBER_OF_ANSWERS_MIN}"
                  max="${C.NUMBER_OF_ANSWERS_MAX}"
                  name="${NUMBER_OF_ANSWERS}"
                  value="${this.settings.getNumberOfAnswers()}"
          />
        </label>
        <label>
          Barevné téma:
          <select name="${THEME}">
            <option value="dark"
                ${this.settings.getTheme() === "dark" ? "selected" : ""}
            >Tmavý</option>
            <option value="light"
                ${this.settings.getTheme() === "light" ? "selected" : ""}
            >Světlý</option>
          </select>
        </label>
      </form>`;

    this.isControllerActive = true;
  }

  private handleChange(event: Event): void {
    if (!this.isControllerActive) {
      return;
    }
    if (!(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLSelectElement)) {
      return;
    }

    switch (event.target.name) {
      case NUMBER_OF_ANSWERS:
        this.settings.setNumberOfAnswers(parseInt(event.target.value, 10));
        this.settingsRepository.save(this.settings);
        return;
      case LESSON_SIZE:
        this.settings.setLessonSize(parseInt(event.target.value, 10));
        this.settingsRepository.save(this.settings);
        return;
      case THEME:
        this.settings.setTheme(event.target.value as Theme);
        this.settingsRepository.save(this.settings);
        return;
    }
  }

  private registerEvents(): void {
    this.element.addEventListener("change", (event) => this.handleChange(event), false);
  }
}
