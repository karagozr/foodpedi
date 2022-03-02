import { useApiRequest } from "../../core"

const BASE_URL = "comment/";
const PARENT_COMMENTS_URL = "list";
const EDIT_COMMENT_URL = "edit";


export type CommentType = {
    id? : string,
    comment : string,
    itemId : string,
    parentId : string,
    rate : number
}

export const useComments = () => {

    const request = useApiRequest();

 
    const getParentComments = async (itemId: string|undefined) => {
        var result = await request.get(null, BASE_URL + PARENT_COMMENTS_URL+`/${itemId}`);
        return result.data;
    }

    const editComment = async (data: any) => {
        
        console.log("data : ",data)
        var result = await request.post(data, BASE_URL + EDIT_COMMENT_URL);
        return result;
    }

    const updateComment = async (itemId: string) => {
        var result = await request.get(null, BASE_URL + PARENT_COMMENTS_URL+`/${itemId}`);
        return result.data;
    }

    const deleteComment = async (itemId: string) => {
        var result = await request.get(null, BASE_URL + PARENT_COMMENTS_URL+`/${itemId}`);
        return result.data;
    }

    return {
        getParentComments,
        editComment,
        updateComment,
        deleteComment
    };

}