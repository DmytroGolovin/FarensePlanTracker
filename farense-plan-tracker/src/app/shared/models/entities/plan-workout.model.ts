import { WorkoutModel } from "./workout.model";

export interface PlanWorkoutModel {
  id: string;
  weekDay: string;
  notes?: string;
  workout: WorkoutModel
}
