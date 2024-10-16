import { Request, Response } from "express";
import { Contact, Group } from "../../models";
import { handleResponseError } from "../helpers/errorHandler";


export const createGroup = async (req: Request, res: Response): Promise<void> => {
    try {
        const group = await Group.create(req.body);
        res.status(201).json(group);
    } catch (error: any) {
        handleResponseError(res, error);
    }
}
export const getAllGroups = async (req: Request, res: Response): Promise<void> => {
    try {
        const groups = await Group.findAll();
        res.json(groups);
    } catch (error: any) {
        handleResponseError(res, error);
    }
}
export const deleteGroup = async (req: Request, res: Response): Promise<void> => {
    try {
        const group = await Group.findByPk(req.params.id);
        if (!group) {
            res.status(404).json({ message: 'Group not found' });
            return;
        }
        await group.destroy();
        res.json({ message: 'Group deleted' });
    } catch (error: any) {
        handleResponseError(res, error);
    }
}