import { PlatformPlan } from "../entities/PlatformPlan"

export interface IPlatformPlanRepository {
  findById(id: string): Promise<PlatformPlan>
  findByName(name: string): Promise<Array<PlatformPlan>>
  findByPeriodInMonth(periodInMonth: number): Promise<Array<PlatformPlan>>
  findByValue(value: number): Promise<Array<PlatformPlan>>
  insert(platformPlan: PlatformPlan): Promise<void>
  update(platformPlan: PlatformPlan): Promise<void>
  delete(platformPlan: PlatformPlan): Promise<void>
}