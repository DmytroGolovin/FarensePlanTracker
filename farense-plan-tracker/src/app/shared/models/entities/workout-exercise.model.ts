import { ExerciseModel } from "./exercise.model";

export interface WorkoutExerciseModel {
  id: string;
  name: string;
  sets: string;
  reps: string;
  load: string;
  restTime: string;
  isSuperSet: boolean;
  notes?: string;
  exercise: ExerciseModel;
}
