import PropTypes from 'prop-types';
import './blog.css'
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmarks}) => {
    const { Title, Cover, Reading_time, Author_img, Author, Posted_date, Hashtags,Description } = blog;
    return (
        <div className='mb-20 space-y-3'>
            <img className='w-full mb-8' src={Cover} alt={`Cover picture of the title${Title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex items-center'>
                    <img className='aut-img' src={Author_img} alt="" />
                    <dir>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>{Posted_date}</p>
                    </dir>
                </div>
                <div>
                    <span>{Reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmarks(blog)} className='ml-2'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl">{Title}</h2>
            <p>{Description}</p>
            <p>
                {
                    Hashtags.map((hash,idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
}
export default Blog;