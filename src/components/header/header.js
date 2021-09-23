import { ChevronDownIcon, SearchIcon } from '@heroicons/react/outline';
import { BellIcon } from '@heroicons/react/solid';

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center shadow-md px-5 py-2">
            <div className='flex items-center'>
                <img className="w-50 h-30" alt="instagram logo" src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'/>
            </div>
            <div className="flex justify-center flex-grow ">
                <div className="flex search border-2 border-gray-200 py-2 px-4 rounded justify-center">
                    <SearchIcon className='h-5 text-gray-500'/>
                    <input type="text" className="hidden md:inline-flex ml-2 pr-5 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink h-5" placeholder="Search" />
                </div>
            </div>
            <div className="flex items-center sm:spacing-x-2 justify-end">
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' />
                <img src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" alt='user' className='w-10'/>
            </div>
        </div>
    );
}

export default Header;
