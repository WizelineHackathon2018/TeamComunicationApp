export interface Article {
    id: number;
    title: string;
    description: string;
    userId: number;
    tags: string[];
    proyecto: number;
}

export interface User {
    id: number;
    name: string;
    username: string;
    image: string;
}

export interface Project {
    id: number;
    name: string;
    members: number[]; // Array of user ids
    description: string;
}