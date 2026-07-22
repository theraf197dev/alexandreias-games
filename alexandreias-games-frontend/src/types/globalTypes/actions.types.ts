import type { ActionEnum } from "../enums/actions.enum.types";

export interface Action<ActionPayload> {
    payload: ActionPayload,
    type: ActionEnum, 
}