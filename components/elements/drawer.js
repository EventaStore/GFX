import React, { useEffect, useState } from 'react';
import { closeDrawer, noScroll } from '../../util/util';

const Drawer = ({ id, img, name, children, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        const handleKeyDown = (event) => {
            if (event.key === "Escape" && isOpen) {
                closeDrawer(id);
            }
        };

        const targetNode = document.getElementById(id);

        const observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isOpen = targetNode.classList.contains('translate-x-0');
                    setIsOpen(isOpen);
                    noScroll(isOpen);
                }
            }
        });

        if (targetNode) {
            observer.observe(targetNode, { attributes: true });
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            noScroll(false);
            window.removeEventListener('keydown', handleKeyDown);
            if (targetNode) {
                observer.disconnect();
            }
        };
    }, [id]);

    return (
        <>
            {
                isOpen &&
                <div onClick={() => closeDrawer(id)} className='z-20 fixed w-screen h-screen bg-black opacity-60 top-0 left-0' />
            }
            <div id={id} className={`drawer translate-x-full z-30 fixed top-0 right-0 h-full bg-DS_white shadow-lg transform transition-transform ease-in-out duration-300 overflow-y-scroll w-full md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white ${className}`}>
                <div className="h-full">
                    <div className={"flex gap-3 p-8 pb-0"}>
                        <div className='flex justify-center items-center rounded-full border px-4 cursor-pointer aspect-square' onClick={() => closeDrawer(id)}>
                            <div className='w-5 h-5 text-black' name={'angle-left'} />
                        </div>
                        <div className='flex rounded-full border font-medium items-center'>
                            {img &&
                                <img className="size-11 m-1 rounded-full object-cover object-top" src={img} alt='user' />}
                            {name &&
                                <span className='capitalize mx-5 text-lg'>{name}</span>}
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Drawer;
