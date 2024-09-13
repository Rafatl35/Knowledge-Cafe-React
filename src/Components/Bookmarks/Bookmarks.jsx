import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-5 mt-2 p-4">
            <div className='mb-4 border-b-2 border-black'>
                <h2 className='text-4xl text-center'>Reading Time:{readingTime}</h2>
            </div>
            <h2 className="text-3xl text-center">Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;