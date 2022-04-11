import Stories from "./Stories/Stories";
import Posts from "./Posts/Posts";

function Feed() {
    return (
        <div className="flex-grow h-screen pb-44 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-xl">
                <Stories />
                <Posts />
            </div>
        </div>
    );
}

export default Feed;
