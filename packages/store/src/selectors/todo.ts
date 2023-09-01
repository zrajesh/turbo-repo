import { selector } from "recoil";
import { todoState } from "../atoms/todo";

export const todoDetails = selector({
    key: "todoDetails",
    get: ({get}) => {
        const state = get(todoState);
        return state.todos;
    }
})
