import instance from ".";
import { IHistory } from "../model/history";
export const getAllHistory = () => {
    const uri = "/history/";
    return instance.get(uri);
};

export const getHistory = (id: string) => {
    const uri = "/history/" + id;
    return instance.get(uri);
};
export const deleteHistory = (id: String) => {
    const uri = "/history/" + id;
    return instance.delete(uri);
};
export const putHistory = (id: string, data: IHistory) => {
    return instance.put("/history/" + id, data);
};
