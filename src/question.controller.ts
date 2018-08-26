import { QuestionRepository } from "./question.repository.js";
import { IController } from "./types.js";
import { getElement, utoa } from "./utils.js";

const SEARCH = "search";
const CREATE = "create";
const QUESTION = "question";
const ANSWER = "answer";
const WORD = "word";

interface Item {
  anchor: HTMLAnchorElement;
  question: string;
}

export class QuestionController implements IController {
  private isControllerActive: boolean = false;
  private items: Item[] = [];

  public constructor(
    private readonly element: HTMLElement,
    private readonly questionRepository: QuestionRepository,
  ) {
    this.registerEvents();
  }

  public inactivate(): void {
    this.isControllerActive = false;
  }

  public show(): void {
    this.element.innerHTML = `<form>
      <label>
        <input
            type="search"
            name="${SEARCH}"
            size="40"
            placeholder="hledat&hellip;"
            autocomplete="off"
        />
      </label>
      <div class="list"></div>
      <!--<button type="button" name="${CREATE}">+</button>-->
    </form>`;

    const list = getElement(this.element, ".list");
    this.items = this.questionRepository.findAll()
      .map((question) => question.getQuestion())
      .map((question) => {
        const anchor = document.createElement("a");
        anchor.href = `#question/${utoa(question)}`;
        anchor.innerText = question;
        return {anchor, question: question.toLocaleLowerCase()};
      });
    this.items.forEach((item) => list.appendChild(item.anchor));
    this.isControllerActive = true;
  }

  public edit(word: string): void {
    const question = this.questionRepository.findByQuestion(word);
    const history = question.getHistory().map((answer) => `<div>
      <i class="icon ${answer.grade ? "success" : "failure"}"></i>
      ${new Date(answer.time).toLocaleDateString()}
      ${new Date(answer.time).toLocaleTimeString()}
    </div>`);
    this.element.innerHTML = `
      <form>
        <input type="hidden" name="${WORD}" value="${word}"/>
        <label>
          Otázka:
          <input
              type="text"
              name="${QUESTION}"
              size="40"
              value="${question.getQuestion()}"
          />
        </label>
        <label>
          Odpověď:
          <textarea
              name="${ANSWER}"
              cols="40"
              rows="5"
          >${question.getAnswer()}</textarea>
        </label>
        <label>
          Historie odpovědí:
          <div class="history">
            ${history.join("")}
          </div>
        </label>
      </form>
    `;
    this.isControllerActive = true;
  }

  private registerEvents(): void {
    this.element.addEventListener("keyup", (event) => this.handleKeyup(event), false);
    this.element.addEventListener("change", (event) => this.handleChange(event), false);
  }

  private handleKeyup(event: Event): void {
    if (!this.isControllerActive) {
      return;
    }
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }

    switch (event.target.name) {
      case SEARCH:
        this.handleSearch(event.target.value);
        return;
    }
  }

  private handleChange(event: Event): void {
    if (!this.isControllerActive) {
      return;
    }
    if (!(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLTextAreaElement)) {
      return;
    }

    switch (event.target.name) {
      case QUESTION:
      case ANSWER:
        const word = getElement<HTMLInputElement>(this.element, `[name="${WORD}"]`).value;
        this.questionRepository.update(word, {
          answer: getElement<HTMLTextAreaElement>(this.element, `[name="${ANSWER}"]`).value,
          question: getElement<HTMLInputElement>(this.element, `[name="${QUESTION}"]`).value,
        });
        return;
    }
  }

  private handleSearch(text: string): void {
    text = text.trim().toLocaleLowerCase();
    this.items.forEach((item) => item.anchor.classList.remove("hidden"));

    if (text.length < 2) {
      return;
    }

    this.items.filter((item) => item.question.indexOf(text) < 0)
      .forEach((item) => item.anchor.classList.add("hidden"));
  }

  private handleSubmit(event: Event): void {
    console.log(event);
  }
}
