import React, { Component, useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import Post from './Post';
import Loading from './Loading';
import { set } from 'ol/transform';

export default function Body() {
    const [valorInput, setValorInput] = useState('');
    const [busqueda, setBusqueda] = useState(false);
    return (
        <>
            <div className='relative flex flex-col gap-5 w-full lg:w-1/2 xl:w-2/3 2xl:w-4/3 mx-auto p-4 '>
                <div >
                    <Input className='sticky'
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

                {!busqueda && (
                    <>
                        <div className="bg-[#dca065] text-white rounded-md">
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

                        <div className="bg-[#dca065] text-white rounded-md">
                            <div className='flex flex-row m-5'>
                                <span className="material-symbols-outlined my-auto text-sm mx-2">
                                    restaurant
                                </span>
                                <h1 className='font-semibold text-sm my-auto'>Nuevas Publicaciones</h1>
                            </div>
                            <h1 className='ml-7 font-bold text-xl'>¡Escribe las primeras reseñal del local!</h1>
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
                    </>
                )}

            </div>
        </>
    )
}