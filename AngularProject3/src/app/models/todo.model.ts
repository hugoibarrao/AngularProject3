export interface ToDo {
  id: string;
  title: string;
}
export interface status {
  code: string;
  name: string;

}
export interface Column {
  title: string;
  todos: ToDo[];
}
