import Story from './Story';

function Stories() {
    return (
        <div className="flex border-2 rounded mt-10 overflow-x-scroll scrollbar-hide bg-white">
            <Story />
            <Story />
        </div>
    );
}

export default Stories;
