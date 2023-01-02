import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBlogThunk } from "../../Redux/thunk/blogs/blogThunk";

const AddForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const date = new Date();

    const submit = (data) => {
        const { title, author, description, image } = data;
        const product = {
            title, author, description, image,
            tags: [
                data.tag1,
                data.tag2,
                data.tag3,
                data.tag4,
            ],
            views: 0,
            createdAt: date
        };
        dispatch(addBlogThunk(product, reset));
    };

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='title'>
                        Title
                    </label>
                    <input type='text' id='title' {...register("title")} required />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='author'>
                        Author
                    </label>
                    <input type='text' name='author' id='author' {...register("author")} required />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='description'>
                        Description
                    </label>
                    <textarea type="textarea" name='description' id='description' {...register("description")} required ></textarea>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input type='text' placeholder="Enter Image URL" name='image' id='image' {...register("image")} required />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag1'>
                        Tag 1
                    </label>
                    <input
                        type='text'
                        name='tag1'
                        id='tag1'
                        {...register("tag1")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag2'>
                        Tag 2
                    </label>
                    <input
                        type='text'
                        name='tag2'
                        id='tag2'
                        {...register("tag2")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag3'>
                        Tag 3
                    </label>
                    <input
                        type='text'
                        name='tag3'
                        id='tag3'
                        {...register("tag3")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag4'>
                        Tag 4
                    </label>
                    <input
                        type='text'
                        name='tag4'
                        id='tag4'
                        {...register("tag4")}
                    />
                </div>

                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddForm;
