import { ADD_CONTENT, DELETE_CONTENT, FIRST_UPLOAD, GET_CONTENT, LAST_UPLOAD, UPDATE_CONTENT } from "../actionTypes/blogActionTypes"

export const getBlogs = (blogs) => {
    return {
        type: GET_CONTENT,
        payload: blogs
    }
};
export const addBlog = (blogData) => {
    return {
        type: ADD_CONTENT,
        payload: blogData
    }
};
export const deleteBlog = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    }
};
export const updateBlog = (content) => {
    return {
        type: UPDATE_CONTENT,
        payload: content
    }
};
export const lastUpload = () => {
    return {
        type: LAST_UPLOAD,
    }
};
export const firstUpload = () => {
    return {
        type: FIRST_UPLOAD,
    }
};


