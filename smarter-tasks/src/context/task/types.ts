export interface TaskListState {
    projectData: ProjectData;
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  export type ProjectData = {
    tasks: Tasks;
    columns: Columns;
    columnOrder: AvailableColumns[];
  };
  export type Tasks = {
    [k: string]: TaskDetails;
  };
  export type Columns = {
    [k in AvailableColumns]: ColumnData;
  };
  export type ColumnData = {
    id: string;
    title: string;
    taskIDs: string[];
  };
  export type TaskDetails = {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    state: AvailableColumns;
    assignee?: number,
    assignedUserName?: string
  };
// Actions that are available
export enum TaskListAvailableAction {
  CREATE_TASK_REQUEST = "CREATE_TASK_REQUEST",
  CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS",
  CREATE_TASK_FAILURE = "CREATE_TASK_FAILURE",

  REORDER_TASKS = "REORDER_TASKS",
  
  FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE",

  
  DELETE_TASKS_REQUEST = "DELETE_TASKS_REQUEST",
  DELETE_TASKS_SUCCESS = "DELETE_TASKS_SUCCESS",
  DELETE_TASKS_FAILURE = "DELETE_TASKS_FAILURE",

  UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST",
  UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS",
  UPDATE_TASK_FAILURE = "UPDATE_TASK_FAILURE",
}

  export type TaskDetailsPayload = {
    title: string;
    description: string;
    dueDate: string;
  };
  // Create a type to hold list of actions that can be dispatched
  export type TaskActions =
    | { type: TaskListAvailableAction.CREATE_TASK_REQUEST }
    | { type: TaskListAvailableAction.CREATE_TASK_SUCCESS }
    | { type: TaskListAvailableAction.CREATE_TASK_FAILURE; payload: string }
    | { type: TaskListAvailableAction.REORDER_TASKS; payload: ProjectData }
    | { type: TaskListAvailableAction.FETCH_TASKS_REQUEST }
    | { type: TaskListAvailableAction.FETCH_TASKS_SUCCESS; payload: ProjectData }
    | { type: TaskListAvailableAction.FETCH_TASKS_FAILURE; payload: string }
    | { type: TaskListAvailableAction.DELETE_TASKS_REQUEST }
    | { type: TaskListAvailableAction.DELETE_TASKS_SUCCESS }
    | { type: TaskListAvailableAction.DELETE_TASKS_FAILURE; payload: string }
    | { type: TaskListAvailableAction.UPDATE_TASK_REQUEST }
    | { type: TaskListAvailableAction.UPDATE_TASK_SUCCESS }
    | { type: TaskListAvailableAction.UPDATE_TASK_FAILURE; payload: string };
  // A type to hold dispatch actions in a context.
  export type TasksDispatch = React.Dispatch<TaskActions>;

  export type AvailableColumns = "pending" | "in_progress" | "done";