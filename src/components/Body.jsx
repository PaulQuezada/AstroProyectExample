import React, { Component } from 'react';
import { Input, Button } from "@nextui-org/react";
import Post from './Post';
import Loading from './Loading';

export class Body extends Component {
    render() {
        return (
            <div className='flex flex-col gap-5 w-full lg:w-1/2 xl:w-2/3 2xl:w-4/3 mx-auto p-2'>
                <div>
                    <Input
                        endContent={
                            <Button isIconOnly className='bg-[#e79d5a] text-white' aria-label="Like">
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                            </Button>
                        }
                        label="Buscar"
                    />
                </div>

                <div className="bg-[#9529dd] text-white rounded-md">
                    <div className='flex flex-row m-5'>
                        <span className="material-symbols-outlined my-auto text-sm mx-2">
                            add_reaction
                        </span>
                        <h1 className='font-semibold text-sm my-auto'>Promociones</h1>
                    </div>
                    <h1 className='ml-7 font-bold text-xl'> Aprovecha los descuentos</h1>
                    <div className='overflow-x-auto overflow-hidden whitespace-nowrap rounded-md p-4'>
                        <div className="inline-block w-64 h-50 mx-2">
                            <Post />
                        </div>
                        <div className="inline-block w-64 h-50 mx-2">
                            <Post />
                        </div>
                        <div className="inline-block w-64 h-50 mx-2">
                            <Post />
                        </div>
                        <div className="inline-block w-64 h-50 mx-2">
                            <Post />
                        </div>
                        <div className="inline-block w-64 h-50 mx-2">
                            <Post />
                        </div>
                        <div className="inline-block w-64 h-50 mx-2">
                            <Post />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Body;
