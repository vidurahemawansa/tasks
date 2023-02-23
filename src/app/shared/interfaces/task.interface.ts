export interface Task {
  name: string;
  owner: string;
  description: string;
  isCompleted: boolean;
}

export interface dropdownFilter {
  name: string;
  value?: boolean;
}
