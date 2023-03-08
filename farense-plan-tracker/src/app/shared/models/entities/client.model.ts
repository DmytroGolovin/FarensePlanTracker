import { PlanModel } from "./plan.model";

export interface ClientModel {
  id: string;
  name: string;
  email: string;
  team: string;
  plan?: PlanModel;
}
