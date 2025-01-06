import React, { useState } from 'react';

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];

    return (
        <div className='flex'>
            <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
                <img
                    src='./images/control.png'
                    alt="Toggle Sidebar"
                    className={`absolute cursor-pointer right-3 top-9 w-7 border-2 border-dark-purple rounded-full
                        ${!open && 'rotate-180'}`}
                    onClick={() => setOpen(!open)}
                />

                <div className='flex gap-x-4 items-center'>
                    <img
                        src="./images/logo.png"
                        alt="Logo"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                    />
                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>
                        Sidebar
                    </h1>
                </div>
                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md
                            ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && 'bg-light-white'}`}
                        >
                            <img
                                src={`./images/${menu.src}.png`}
                                alt={`${menu.title} Icon`}
                            />
                            <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
                <h1>Home Page</h1>
            </div>
        </div>
    );
};

export default Sidebar;
