import {HomeIcon, UserGroupIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, ShoppingCartIcon } from '@heroicons/react/outline';

function Footer() {
    return (
        <div className="sticky bottom-0 z-50 bg-white flex border-t-2 items-center p-4 lg:px-5">
            <div className='flex justify-center flex-grow'>
                <div className='flex'>
                    <HomeIcon className='bottom-icon'/>
                    <ShoppingCartIcon className='bottom-icon'/>
                    <FlagIcon className='bottom-icon'/>
                    <PlayIcon className='bottom-icon'/>
                    <UserGroupIcon className='bottom-icon'/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
