import React, { Component } from 'react'
import { Avatar, Button, Input } from "@nextui-org/react";


export class Header extends Component {
    render() {
        return (
            <div className='p-3 flex flex-row justify-between mx-auto w-full lg:w-1/2 xl:w-2/3 2xl:w-4/3'>
                <div className='flex flex-row'>
                    <Avatar className="my-auto bg-[#e79d5a]" isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <div className='my-auto mx-2 flex flex-col justify-stretch'>
                        <h1 className='text-lg font-semibold '> Paul Quezada</h1>
                        <p className='text-sm text-[#7f7e8a]'>Moderador</p>
                    </div>
                </div>

                <div >
                    <Button isIconOnly className='bg-[#e79d5a] text-white' aria-label="Like">
                        <span className="material-symbols-outlined">
                            notifications
                        </span>
                    </Button>
                </div>
            </div>
        )
    }
}

export default Header