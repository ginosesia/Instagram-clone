function User() {
    return (
        <div className="flex p-2">
            <div className="flex flex-grow">
                <img className="h-10 m-0 rounded-full" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/9397/production/_113838773_donkey.jpg" alt="user" />
                <div className="ml-2 my-auto">
                    <h5>Mikesmith44</h5>
                    <span className="text-gray-400 text-xs">Followed by sesiagino + 30 more</span>
                </div>
            </div>
            <div className="text-blue-400 my-auto mr-2">
                Follow
            </div>
        </div>
    );
}

export default User;