import { HeartIcon, ChatIcon, ShareIcon, BookmarkIcon, DotsHorizontalIcon } from '@heroicons/react/outline';

function Post() {
    return (
        <div className="flex flex-col">
            <div className=' bg-white mt-5  border-2 rounded'>
                <div className="flex p-2">
                    <div className="flex flex-grow">
                        <img className="h-10 m-0 rounded-full border-pink-700" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/9397/production/_113838773_donkey.jpg" alt="story" />
                        <h5 className='ml-2 my-auto'>Name</h5>
                    </div>
                    <div>
                        <DotsHorizontalIcon className='post-icon'/>
                    </div>
                </div>
                <div className="image">
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/9397/production/_113838773_donkey.jpg" alt="story" />
                </div>
                <div className="p-3">
                    <div className="flex icon-buttons pb-2">
                        <div className="flex flex-grow">
                            <HeartIcon className='post-icon'/>
                            <ChatIcon className='post-icon'/>
                            <ShareIcon className='post-icon'/>
                        </div>
                        <div className="flex-end">
                            <BookmarkIcon className='post-icon'/>
                        </div>
                    </div>
                    <div className="font-bold text-sm">
                        942,2151 views
                    </div>
                    <div className="comments">
                        comments
                    </div>
                </div>
                <div className="flex border-t p-3">
                    <div className="flex-grow mr-2">
                        <input className='w-full outline-none text-gray-500' placeholder='Add a comment...'></input>
                    </div>
                    <div className=" flex-end post-button text-blue-500 cursor-pointer">
                        Post
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
