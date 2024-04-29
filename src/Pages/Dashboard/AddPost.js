import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Axios } from '../../Api/axios';
import Loading from '../../Components/Loading';
import { CAT, CREATEPOST, baseURL } from '../../Api/Api';

export default function AddPost() {
    const [category_id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [slug, setSubslug] = useState("");
    const [body, setBody] = useState("");
    const[image , setImage] = useState("")
    const [loading, setLoading] = useState(false);

    //function CREATE POST
    async function HandleSubmit(e) {
        setLoading(true);
        e.preventDefault();

        const form = new  FormData();
        form.append('category_id', category_id);
        form.append('title', title);
        form.append('slug', slug);
        form.append("body" , body);
        form.append('image', image);
        try {
            const res = await Axios.post(`${baseURL}/${CAT}/${CREATEPOST}`,form) ;
            console.log(res);           
            window.location.pathname = "/dashboard/posts";
        } catch (err) {
            setLoading(false);
            console.log(err);
        }

    }
    return (
        <>
        <div >
        {loading && <Loading></Loading>}
            <form className='bg-white w-100 mx-2 p-3' onSubmit={HandleSubmit}>
                
                    <label> Category_Id </label>
                    <input
                        className='inputdash'
                        name='id'
                        value={category_id}
                        required
                        onChange={(e) => setId(e.target.value)}
                        type="number" placeholder="id....." />

                    <label> Title </label>
                    <input
                    className='inputdash'

                        name='name'
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" placeholder="name....." />

                    <label> Subslug </label>
                    <input
                    className='inputdash'
                        name='slug'
                        value={slug}
                        required
                        onChange={(e) => setSubslug(e.target.value)}
                        type="text" placeholder="name....." />

                 <label> Image </label>
                    <input onChange={(e) => setImage(e.target.files.item(0))}
                        type="file" className='inputdash'/>

                    <label> Description </label>
                    <input
                        className='inputdash w-100 desdash'
                        style={{outline:"none", height:"200px" }}
                        name='body'
                        value={body}
                        required
                        onChange={(e) => setBody(e.target.value)}
                        type="text" placeholder="Description....." />
                <button 
                disabled={
                    title.length > 1 
                    ? false : true
                    } className='btnpost'>Create Post</button>
            </form>

        </div>
            
        </>
    );
}

