
import z from "zod"
import { TaskPriority, TaskStatus } from "@/common/enums"


export const domainTaskSchema = z.object({
  description: z.string().nullable(),
  deadline: z.string().nullable(),
  startDate: z.string().nullable(),

  title: z.string(),
  id: z.string(),
  todoListId: z.string(),
  order: z.number(),
  addedDate: z.string().datetime({ local: true }),
  status: z.nativeEnum(TaskStatus),
  priority: z.nativeEnum(TaskPriority),
})

export type DomainTask = z.infer<typeof domainTaskSchema>

export type GetTasksResponse = {
  error: string | null
  totalCount: number
  items: DomainTask[]
}

export type UpdateTaskModel = {
  description: string | null
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string | null
  deadline: string | null
}
