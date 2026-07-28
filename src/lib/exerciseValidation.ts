import type { CodeExercise, DatasetChallenge, QuizQuestion } from "../data/types";

export const validateQuizAnswer = (quiz: QuizQuestion, answer: string): boolean =>
  quiz.answer === answer;

export const validateCodeSubmission = (
  exercise: CodeExercise | DatasetChallenge,
  code: string,
  output = "",
  plotCount = 0,
): { passed: boolean; missing: string[]; missingCode: string[]; missingOutput: string[] } => {
  const expectedOutput = exercise.expectedOutputContains ?? [];
  const missingCode: string[] = [];
  // Convert to lowercase for case-insensitive comparison
  const lowerOutput = output.toLowerCase();
  const missingOutput = expectedOutput.filter(
    (fragment) => !lowerOutput.includes(fragment.toLowerCase()),
  );
  const missingPlot =
    exercise.expectedPlotCount && plotCount < exercise.expectedPlotCount
      ? [`${exercise.expectedPlotCount} plot${exercise.expectedPlotCount === 1 ? "" : "s"}`]
      : [];
  const missing = [...missingCode, ...missingOutput, ...missingPlot];
  return { passed: missing.length === 0, missing, missingCode, missingOutput };
};
