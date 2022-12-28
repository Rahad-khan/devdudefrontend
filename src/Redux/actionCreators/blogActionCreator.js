import { FETCH_BLOGS } from "../actionTypes/blogActionTypes"

export const getBlogs = (blogs) => {
    return {
        type: FETCH_BLOGS,
        payload: blogs
    }
}
