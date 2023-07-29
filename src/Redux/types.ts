export type Task = {
    id: number;
    action: string;
    completed: boolean;
};

export type TodoState = Task[];
