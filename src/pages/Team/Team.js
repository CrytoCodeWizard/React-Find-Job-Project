import React from 'react';
import { BsFacebook, BsFillPhoneVibrateFill, BsLinkedin } from 'react-icons/bs';

const Team = () => {
    return (
        <div className="p-6 ">
            <h1 className="font-bold text-3xl  py-2">Team</h1>
          
            
            <div className="grid lg:grid-cols-4  md:grid-cols-2  gap-4 py-6">
               
                <div class="flex   justify-center bg-slate-100">
                    <div class="group h-96 w-80 [perspective:1000px]">
                        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div class="absolute inset-0">
                                <img
                                    class="h-full w-full rounded-xl object-cover shadow-xl "
                                    src="https://i.ibb.co/R3NVhbf/clint-patterson-d-YEu-FB8-KQJk-unsplash.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div class="flex min-h-full flex-col items-center justify-center">
                                    <h1 class="text-3xl font-bold">Joken</h1>
                                    <p class="text-lg">Photographer & Art</p>
                                    <p class="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                                        <BsFacebook />
                                        <BsLinkedin />
                                        <BsFillPhoneVibrateFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex   justify-center bg-slate-100">
                    <div class="group h-96 w-80 [perspective:1000px]">
                        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div class="absolute inset-0">
                                <img
                                    class="h-full w-full rounded-xl object-cover shadow-xl "
                                    src=" https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-5.webp"
                                    alt=""
                                />
                            </div>
                            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div class="flex min-h-full flex-col items-center justify-center">
                                    <h1 class="text-3xl font-bold">Joken</h1>
                                    <p class="text-lg">Photographer & Art</p>
                                    <p class="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                                        <BsFacebook />
                                        <BsLinkedin />
                                        <BsFillPhoneVibrateFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex   justify-center bg-slate-100">
                    <div class="group h-96 w-80 [perspective:1000px]">
                        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div class="absolute inset-0">
                                <img
                                    class="h-full w-full rounded-xl object-cover shadow-xl "
                                    src=" https://i.ibb.co/R3NVhbf/clint-patterson-d-YEu-FB8-KQJk-unsplash.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div class="flex min-h-full flex-col items-center justify-center">
                                    <h1 class="text-3xl font-bold">Joken</h1>
                                    <p class="text-lg">Photographer & Art</p>
                                    <p class="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                                        <BsFacebook />
                                        <BsLinkedin />
                                        <BsFillPhoneVibrateFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex   justify-center bg-slate-100">
                    <div class="group h-96 w-80 [perspective:1000px]">
                        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div class="absolute inset-0">
                                <img
                                    class="h-full w-full rounded-xl object-cover shadow-xl "
                                    src=" https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-5.webp"
                                    alt=""
                                />
                            </div>
                            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div class="flex min-h-full flex-col items-center justify-center">
                                    <h1 class="text-3xl font-bold">Joken</h1>
                                    <p class="text-lg">Photographer & Art</p>
                                    <p class="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                                        <BsFacebook />
                                        <BsLinkedin />
                                        <BsFillPhoneVibrateFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Team;