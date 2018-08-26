import { Question } from "./question.js";
import { shuffle } from "./utils.js";
import words from "./words.js";

const KEY = "questions";

export class QuestionRepository {
  private readonly questions: Question[] = [];

  public constructor() {
    this.questions = this.load() || this.create();
  }

  public findAll(): Question[] {
    return this.questions;
  }

  public findByQuestion(question: string): Question {
    const result = this.questions.find((x) => x.getQuestion() === question);
    if (result === undefined) {
      throw new Error(`Question "${question} not found`);
    }
    return result;
  }

  public chooseAnswers(count: number): string[] {
    const answers = words.map((x) => x[1])
      .filter((x, i, a) => a.indexOf(x) === i);

    return shuffle(answers).slice(0, count);
  }

  public getOldestQuestions(count: number): Question[] {
    const now = Date.now();
    const ws = this.questions.sort((a, b) => a.getLastAnswerTime() - b.getLastAnswerTime());
    const xs = shuffle(ws.filter((x) => x.getLastAnswerTime() <= now)).slice(0, count);

    if (xs.length < count) {
      xs.concat(ws.filter((x) => x.getLastAnswerTime() > now).slice(0, count - xs.length));
    }

    return xs;
  }

  public save(question: Question): void {
    const index = this.questions.map((x) => x.getQuestion())
      .indexOf(question.getQuestion());

    if (index < 0) {
      this.questions.push(question);
    } else {
      this.questions[index] = question;
    }

    window.localStorage.setItem(KEY, JSON.stringify(this.questions));
  }

  public update(word: string, data: {question: string, answer: string}): void {
    const index = this.questions.map((x) => x.getQuestion()).indexOf(word);

    if (index >= 0) {
      this.questions[index].setQuestion(data.question);
      this.questions[index].setAnswer(data.answer);
    }
  }

  private load(): Question[] | null {
    try {
      return JSON.parse(String(window.localStorage.getItem(KEY)))
        .map(Question.fromJSON);
    } catch (e) {
      return null;
    }
  }

  private create(): Question[] {
    return words.map((word: [string, string]) => new Question(
      word[0],
      word[1],
    ));
  }
}
