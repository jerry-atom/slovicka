import { LessonController } from "./lesson.controller.js";
import { LessonRepository } from "./lesson.repository.js";
import { QuestionController } from "./question.controller.js";
import { QuestionRepository } from "./question.repository.js";
import { Router } from "./router.js";
import { SettingsController } from "./settings.controller.js";
import { SettingsRepository } from "./settings.repository.js";
import { getElement } from "./utils.js";

const questionRepository = new QuestionRepository();
const settingsRepository = new SettingsRepository();
const settings = settingsRepository.load();
const lessonRepository = new LessonRepository(settings, questionRepository);

window.addEventListener("load", () => {
  const main = getElement(document.body, "main");

  document.body.classList.remove("theme-dark");
  document.body.classList.remove("theme-light");
  document.body.classList.add("theme-" + settings.getTheme());

  const router = new Router(
    document.body,
    new LessonController(main, lessonRepository, questionRepository),
    new SettingsController(main, settingsRepository),
    new QuestionController(main, questionRepository),
  );
}, false);
