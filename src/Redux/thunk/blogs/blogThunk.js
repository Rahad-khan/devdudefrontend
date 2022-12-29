import { addBlog, deleteBlog, getBlogs } from "../../actionCreators/blogActionCreator";

export const loadBlogData = () => {

    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blogs");
        const data = await res.json();

        if (data.data.length) {
            dispatch(getBlogs(data.data))
        }
    };
};
export const addBlogThunk = (blogData) => {

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
        }
    };
};
export const deleteBlogThunk = (id) => {

    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        console.log(`file: blogThunk.js:42 ~ return ~ data`, data)

        if (data.deletedCount) {
            dispatch(deleteBlog(id))
        }
    };
};
