import { addBlog, deleteBlog, getBlogs, updateBlog } from "../../actionCreators/blogActionCreator";
import { toast } from 'react-toastify'

export const loadBlogData = () => {

    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blogs");
        const data = await res.json();

        if (data.data.length) {
            dispatch(getBlogs(data.data))
        }
    };
};
export const addBlogThunk = (blogData, reset) => {

    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blog", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        });
        const data = await res.json();
        if (data.insertedId) {
            dispatch(addBlog({
                _id: data.insertedId,
                ...blogData

            }))
            toast.success("Blog Posted Successfully");
            reset()
        }
    };
};
export const deleteBlogThunk = (id) => {

    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        if (data.deletedCount) {
            dispatch(deleteBlog(id))
        }
    };
};
export const updateBlogThunk = (id, doc, reset) => {

    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doc)
        });
        const data = await res.json();
        if (data.modifiedCount) {
            toast.success("Blog Updated Successfully")
            dispatch(updateBlog({
                _id: id,
                ...doc
            }))
        }
    };
};
