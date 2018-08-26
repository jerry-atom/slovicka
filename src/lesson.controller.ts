import { Lesson } from "./lesson.js";
import { LessonRepository } from "./lesson.repository.js";
import { Question } from "./question.js";
import { QuestionRepository } from "./question.repository.js";
import { IController } from "./types.js";
import { atou, getElement, handleSwipe, shuffle, utoa } from "./utils.js";

const CORRECT_CLASS = "correct";
const WRONG_CLASS = "wrong";

type Status = "question" | "answer";

export class LessonController implements IController {
  private status: Status = "question";
  private isControllerActive: boolean = false;
  private lesson: Lesson;
  private question: Question;

  public constructor(
    private readonly element: HTMLElement,
    private readonly lessonRepository: LessonRepository,
    private readonly questionRepository: QuestionRepository,
  ) {
    this.registerEvents();
    this.lesson = this.lessonRepository.getCurrentLesson();
    this.question = this.questionRepository.findByQuestion(this.lesson.getCurrentQuestion());
  }

  public inactivate(): void {
    this.isControllerActive = false;
  }

  public show(): void {
    const answers = shuffle([
      this.question.getAnswer(),
      ...this.lesson.getAnswersForQuestion(this.question.getQuestion()),
    ]).map((answer) => `<div class="answer" data-answer="${utoa(answer)}">${answer}</div>`);

    this.element.innerHTML = `
      <div id="word">${this.question.getQuestion()}</div>
      <div id="answers">${answers.join("")}</div>`;

    this.isControllerActive = true;
  }

  private handleAnswer(event: Event): void {
    if (!this.isControllerActive || this.status === "answer") {
      return;
    }
    if (!(event instanceof Event && event.target instanceof HTMLElement && event.target.dataset.answer)) {
      return;
    }
    this.status = "answer";

    const answer = atou(event.target.dataset.answer);

    this.renderAnswer(answer);

    this.lesson.answerCurrentQuestion(answer);
    this.question.addAnswer(this.lesson.id, answer);
    this.questionRepository.save(this.question);
    this.lessonRepository.save(this.lesson);
  }

  private handleSwipe(): void {
    if (!this.isControllerActive || this.status === "question") {
      return;
    }
    this.status = "question";

    if (this.lesson.isFinished()) {
      this.lesson = this.lessonRepository.create();
    } else {
      this.lesson.nextQuestion();
    }
    this.question = this.questionRepository.findByQuestion(this.lesson.getCurrentQuestion());

    this.lessonRepository.save(this.lesson);
    this.show();
  }

  private registerEvents(): void {
    this.element.addEventListener("click", (event) => this.handleAnswer(event), false);
    handleSwipe(this.element, {left: () => this.handleSwipe()});
  }

  private renderAnswer(answer: string): void {
    const correct = this.question.getAnswer();
    const answers = this.element.querySelectorAll("[data-answer]");

    for (let i = answers.length; i--;) {
      answers[i].classList.remove(WRONG_CLASS, CORRECT_CLASS);
    }

    if (this.question.isCorrect(answer)) {
      getElement(this.element, `[data-answer="${utoa(answer)}"]`).classList.add(CORRECT_CLASS);
    } else {
      getElement(this.element, `[data-answer="${utoa(answer)}"]`).classList.add(WRONG_CLASS);
      getElement(this.element, `[data-answer="${utoa(correct)}"]`).classList.add(CORRECT_CLASS);
    }
  }
}
