/*~
 * This file defines the core TypeScript types and interfaces used throughout the backend.
 * It ensures data consistency between the database, API endpoints, and business logic.
 */

// Represents the structure of a single Todo item in the database.
export interface Todo {
  id: string;
  user_id: string;
  task: string;
  is_completed: boolean;
  created_at: string;
  updated_at: string;
}

// Defines the shape of the data required to create a new Todo item.
// Used for validating the request body in the `create-todo` endpoint.
export interface CreateTodoPayload {
  task: string;
}

// Defines the shape of the data for updating an existing Todo item.
// Used for validating the request body in the `update-todo` endpoint.
export interface UpdateTodoPayload {
  task?: string;
  is_completed?: boolean;
}
