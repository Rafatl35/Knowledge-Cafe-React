import PropTypes from 'prop-types';
import './blog.css'

const Blog = ({ blog }) => {
    const { Title, Cover, Reading_time, Author_img, Author, Posted_date, Hashtags } = blog;
    return (
        <div className='mx-6'>
            <img className='w-full' src={Cover} alt={`Cover picture of the title${Title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='aut-img' src={Author_img} alt="" />
                    <dir>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>{Posted_date}</p>
                    </dir>
                </div>
                <div>
                    <span>{Reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-3xl">{Title}</h2>
            <p>
                {
                    Hashtags.map((hash,idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;