import React, { Component, useState } from 'react';
import Ejemplo from './prueba';
import Post from './Post';
import { Button, Divider, Input } from "@nextui-org/react";

export default function App() {
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => {
        setExpanded(!expanded);
    }
    return (
        <div>
            <div className='fixed w-full h-full bg-blue-500'>
            </div>
            <div className='fixed top-20 left-5'>
                <Button isIconOnly onClick={() => {
                    window.location.href = '/';
                }}>
                    <span class="material-symbols-outlined text-2xl">
                        arrow_back
                    </span>
                </Button>
            </div>
            <div className={`fixed bottom-0 left-0 right-0 bg-white p-4 text-center rounded-t-lg ${expanded ? 'h-full' : 'h-1/4'}`} style={{ transition: 'height 0.5s' }}>
                <Button className='bg-[#ffffff] rounded-lg w-1/3' onClick={toggleExpand}>
                    <div className='flex flex-col text-[#7f7e89] font-semibold w-full'>
                        <h1>{expanded ? 'Bajar' : 'Subir'}</h1>
                        <Divider className='text-2xl' />
                        <Divider className='text-2xl' />
                        <Divider className='text-2xl' />
                        <Divider className='text-2xl' />
                    </div>
                </Button>
                <div className=' w-2/3 mx-auto flex flex-col justify-center mt-3'>
                    <div className='flex flex-row justify-center overflow-hidden'>
                        <span className="material-symbols-outlined text-md">
                            pin_drop
                        </span>
                        <h1 className='font-semibold text-md my-auto'>Mostrar los locales cercanos</h1>
                    </div>
                    <p className='text-[#7f7e89] text-xs mt-1'>Puedes arrastrar el mapa para buscar tus locales favoritos</p>
                    <Input
                        onBeforeInput={() => {
                            if (expanded == false) {
                                toggleExpand();
                            }
                        }}
                        className='mx-auto w-full text-xs mt-2'
                        endContent={
                            <span class="material-symbols-outlined text-md">
                                search
                            </span>
                        }
                        label="Busca tu local favorito"
                    />
                    {expanded && (
                        <div className='mt-10 flex flex-col'>
                            <Post />
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
