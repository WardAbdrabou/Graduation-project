import { useEffect, useState } from 'react';
import { Axios } from '../../Api/axios';
import { CAT, UPDATEPOST } from '../../Api/Api';
import Loading from '../../Components/Loading';
import { useNavigate, useParams } from 'react-router-dom';

export default function Post() {

  const [category_id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSubslug] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const [_method] = useState("patch")

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    setLoading(true);
    Axios.get(`${CAT}/edit/${id}`)
      .then((data) => {
        setTitle(data.data.title);

        setLoading(false);
      })
      .then(() => setDisable(false))
      .catch(() => nav('/dashboard/categories/page/404', { replace: true }));
  }, []);

  //function Update post edit
  async function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const form = new FormData();
    form.append('category_id', category_id);
    form.append('title', title);
    form.append('slug', slug);
    form.append("body", body);
    form.append('image', image);
    form.append('_method', _method);
    try {
      const res = await Axios.post(`${CAT}/${UPDATEPOST}/${id}`, form);
      console.log(res);      
      window.location.pathname = "/dashboard/posts";
    } catch (err) {
      setLoading(false);
      console.log(err);
    }

  }
  return (
    <>
      {loading && <Loading></Loading>}
      <div>
        <form className='bg-white w-100 mx-2 p-3' onSubmit={HandleSubmit}>
            <label > Category_Id </label>
            <input
              className='inputdash'
              name='id'
              value={category_id}
              required
              onChange={(e) => setId(e.target.value)}
              type="number" placeholder="id....." />

            <label> Title </label>
            <input
              name='name'
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              type="text" placeholder="title....." />

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
              type="file" />
          
            <label> Description </label>
            <input
                        className='inputdash w-100 desdash'
                        style={{outline:"none" , height:"200px" }}
                        name='body'
                        value={body}
                        required
                        onChange={(e) => setBody(e.target.value)}
                        type="text" placeholder="Description....." />


          <button disabled={disable} className='btnpost' type='submit'>Update Post</button>
        </form>
      </div>

    </>
  );
}

