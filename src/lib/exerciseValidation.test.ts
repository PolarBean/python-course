import { describe, expect, it } from "vitest";
import { courses } from "../data/curriculum";
import { validateCodeSubmission, validateQuizAnswer } from "./exerciseValidation";

describe("exercise validation", () => {
  it("checks quiz answers exactly", () => {
    const quiz = courses[0].lessons.find((lesson) => lesson.quiz)?.quiz;
    expect(quiz).toBeDefined();
    expect(validateQuizAnswer(quiz!, quiz!.answer)).toBe(true);
    expect(validateQuizAnswer(quiz!, "not the answer")).toBe(false);
  });

  it("checks printed results without requiring exact code fragments", () => {
    const exercise = courses[0].lessons.find((lesson) => lesson.exercise)?.exercise;
    expect(exercise).toBeDefined();
    expect(validateCodeSubmission(exercise!, "result = 1\nprint(result)", "20\n").passed).toBe(true);
    expect(validateCodeSubmission(exercise!, "answer = 20", "20\n").passed).toBe(true);
    expect(validateCodeSubmission(exercise!, "result = 1\nprint(result)", "12\n").passed).toBe(false);
  });

  it("matches expected output case-insensitively", () => {
    const exercise = courses
      .flatMap((course) => course.lessons)
      .map((lesson) => lesson.exercise)
      .find((candidate) => candidate?.expectedOutputContains?.some((fragment) => /[a-z]/i.test(fragment)));
    expect(exercise).toBeDefined();
    const fragment = exercise!.expectedOutputContains!.find((f) => /[a-z]/i.test(f))!;
    const flipped = [...fragment]
      .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
      .join("");
    expect(validateCodeSubmission(exercise!, "", flipped).missingOutput).not.toContain(fragment);
  });

  it("can require plotted output without showing the expected answer", () => {
    const challenge = courses
      .flatMap((course) => course.lessons)
      .find((lesson) => lesson.challenge?.expectedPlotCount)?.challenge;
    expect(challenge).toBeDefined();
    expect(validateCodeSubmission(challenge!, "", "2024 23.323\n", 1).passed).toBe(true);
    expect(validateCodeSubmission(challenge!, "", "2024 23.323\n", 0).passed).toBe(false);
  });
});
