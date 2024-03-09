import React, { useState } from 'react';
import { Button, Input, Checkbox, Divider } from "@nextui-org/react";
import './Start.css'; // Importa el archivo CSS donde definiremos las animaciones

export default function Body() {
    const [pages, setPages] = useState(1);

    const nextPage = () => {
        setPages(2);
    };

    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className={`page1 ${pages === 1 ? 'active' : 'inactive'}`}>
                <div className='w-screen h-screen relative'>
                    <div className='flex absolute top-0 left-0 m-10 text-2xl font-bold text-white'>
                        <span className="material-symbols-outlined my-auto mx-2 text-2xl">
                            storefront
                        </span>
                        <h1 >GastroMap</h1>
                    </div>
                    <img className='w-full h-[70%]' src="https://assets.entrepreneur.com/content/3x2/2000/1665812123-Shutterstock-1630506055.jpg" />
                    <h1 className='font-bold text-4xl mx-5 mt-5'>Primeros pasos en la app de GastroMap</h1>
                    <div className='mt-12 flex flex-row'>
                        <Button className='bg-[#12181c] text-[#ffffff] text-xl w-[95%] mx-auto' onClick={nextPage}>
                            Continuar
                            <span className="material-symbols-outlined">
                                start
                            </span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className={`page2 ${pages === 2 ? 'active' : 'inactive'} w-full h-full flex flex-col relative justify-center`}>
                <div className='flex absolute top-0 left-0 m-10 text-2xl font-bold text-white'>
                    <span className="material-symbols-outlined my-auto mx-2 text-6xl">
                        storefront
                    </span>
                    <h1 >GastroMap</h1>
                </div>
                <div className='mx-5 p-10 bg-white rounded-xl'>
                    <h1 className='text-4xl font-semibold text-center'>Inicia sesión y apoya a la comunidad!</h1>
                    <div className='w-[70%] mx-auto'>
                        <Input
                            autoFocus
                            endContent={
                                <span className="material-symbols-outlined text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Usuario"
                            placeholder="Ingresa tu Usuario"
                            variant="bordered"
                            className='my-5'
                        />
                        <Input
                            endContent={
                                <span className="material-symbols-outlined text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Contraseña"
                            placeholder="Ingresa tu contraseña"
                            type="password"
                            variant="bordered"
                            className='my-5'
                        />
                        <div className="flex py-2 px-1 justify-between">
                            <Checkbox
                                classNames={{
                                    label: "text-small",
                                }}
                            >
                                Mantener sesión iniciada
                            </Checkbox>
                        </div>
                        <Button className="w-full bg-[#4a81f2] text-white font-semibold">
                            Ingresar
                        </Button>
                        <Button className="w-full text-[#4a81f2] bg-[#ffffff] font-semibold">
                            Registrarme
                        </Button>

                        <Divider className="my-4" />
                        <h1 className='text-center text-[#212121] text-xs'>Acceso rápido con</h1>
                        <div className='flex flex-row justify-center mt-2'>
                            <Button className='mx-2 bg-[#ffffff]' isIconOnly color="success" aria-label="Like">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
                                </svg>
                            </Button>
                            <Button className='mx-2 bg-[#ffffff]' isIconOnly aria-label="Like">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                                </svg>
                            </Button>
                            <Button className='mx-2 bg-[#ffffff]' isIconOnly color="success" aria-label="Like">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='mt-12 flex flex-row'>
                    <Button className='bg-[#e7f3f6] text-[#0e2a66] text-xl w-[80%] mx-auto' onClick={()=>{
                        window.location.href = '/principal';
                    }}>
                        Continuar sin registrarme
                        <span className="material-symbols-outlined">
                            start
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
