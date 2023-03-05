import { PlatformPlan } from "../entities/PlatformPlan"

export interface IPlatformPlanRepository {
  findById(id: string): Promise<PlatformPlan>
  findByName(name: string): Promise<PlatformPlan>
  insert(platformPlan: PlatformPlan): Promise<void>
  update(platformPlan: PlatformPlan): Promise<void>
}