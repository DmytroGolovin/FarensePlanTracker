import { ExerciseModel } from "./exercise.model";

export interface WorkoutExerciseModel {
  id: string;
  sets: string;
  reps: string;
  weight: string;
  restTime: string;
  notes?: string;
  exercise: ExerciseModel;
}
