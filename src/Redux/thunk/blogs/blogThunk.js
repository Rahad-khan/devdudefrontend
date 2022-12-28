import { getBlogs } from "../../actionCreators/blogActionCreator";

export const loadBlogData = () => {

    return async (dispatch, getState) => {
        const res = await fetch("blog.json");
        console.log(res);
        const data = await res.json();

        if (data.length) {
            dispatch(getBlogs(data))
        }
    };
}
