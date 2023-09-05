export enum TodoPriority {
  Low = "low",
  Medium = "medium",
  High = "high"
}

export interface ITodo {
  id: string;
  title: string;
  isComplete: boolean;
  priority: TodoPriority;
}

export type TodoAction =
  | { type: "ADD_TODO"; payload: ITodo }
  | { type: "REMOVE_TODO"; payload: ITodo }
  | { type: "UPDATE_TODO"; payload: { id: string; isComplete: boolean } };
