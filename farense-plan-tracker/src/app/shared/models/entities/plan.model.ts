import { PlanWorkoutModel } from "./plan-workout.model";

export interface PlanModel {
  id: string;
  name: string;
  description?: string;
  objectives?: string;
  videoUrl?: string;
  startDate: Date;
  endDate: Date;
  workouts: Array<PlanWorkoutModel>;
}
