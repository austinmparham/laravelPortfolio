import { Link, Head } from '@inertiajs/react';
import React from "react";
import image from '/public/images/ProfilePic.jpg';
import javaimg from '/public/images/java-svgrepo-com.svg';
import pythonIcon from '/public/images/pythonIcon.svg';
import htmlIcon from '/public/images/htmlIcon.svg';
import cucumberIcon from '/public/images/cucumberIcon.svg';
import jenkinsIcon from '/public/images/jenkinsIcon.svg';
import postmanIcon from '/public/images/postmanIcon.svg';
import awsIcon from '/public/images/awsIcon.svg';
import laravelIcon from '/public/images/laravelIcon.svg';
import reactIcon from '/public/images/reactIcon.svg';
import seleniumIcon from '/public/images/seleniumIcon.svg';
import colors from "tailwindcss/colors.js";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    return (
        <>
            <Head title="Austin Parham" />
            <div className="text-black/50 dark:bg-black dark:text-white/50 bg-cover bg-center h-128" style={{backgroundImage: 'url("/images/background.jpg")'}}>
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <h1 className="text-white font-bold text-4xl">Hi there.</h1>
                            </div>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <a
                                    href="https://laravel.com/docs"
                                    id="docs-card"
                                    className="flex flex-col items-start gap-4 overflow-hidden rounded-lg bg-transparent p-3
                                    shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05]
                                    transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none
                                    focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800
                                    dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div
                                        id="screenshot-container"
                                        className="relative flex w-full flex-1 items-stretch"
                                    >
                                        <img src={image} className="rounded self-center" height="50%" width="70%"></img>
                                        <img
                                            src="https://laravel.com/assets/img/welcome/docs-dark.svg"
                                            alt="Laravel documentation screenshot"
                                            className="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"
                                        />
                                        <div
                                            className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] dark:via-zinc-900 dark:to-zinc-900"></div>
                                    </div>

                                    <div className="relative flex items-center gap-6 lg:items-end text-white">
                                        <div id="docs-card-content" className="flex items-start gap-6 lg:flex-col">


                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="text-xl font-semibold dark:text-white">
                                                    I'm Austin Parham
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed">
                                                    I've been working in the web and software development industry for more than five years.
                                                    While my primary experience is in Quality Assurance Automation, I'm always looking for opportunities to strengthen my skills
                                                    in full stack development.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://laracasts.com"
                                    className="flex items-start gap-4 rounded-lg bg-#6c4ee4 p-3 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="grid grid-cols-1">
                                        <div className="pt-3 sm:pt-5 text-white">
                                            <h2 className="text-xl font-semibold dark:text-white text-center">Experience
                                                &
                                                Skills</h2>
                                        </div>
                                        <div className="grid grid-cols-5 gap-4">
                                            <div>
                                                <embed src={javaimg} type="image/svg+xml" width="100"
                                                       height="100" className="w-24 h-24"/>
                                            </div>
                                            <div>
                                                <embed src={pythonIcon} type="image/svg+xml" width="100"
                                                       height="100" className="w-24 h-24"/>
                                            </div>
                                            <div>
                                                <embed src={htmlIcon} type="image/svg+xml" width="100"
                                                       height="100" className="w-24 h-24"/>
                                            </div>
                                            <div>
                                                <embed src={cucumberIcon} type="image/svg+xml" width="100"
                                                       height="100" className="w-24 h-24"/>
                                            </div>
                                            <div>
                                                <embed src={jenkinsIcon} type="image/svg+xml" width="100"
                                                       height="100" className="w-24 h-24"/>
                                            </div>
                                            <div>
                                                <embed src={postmanIcon} type="image/svg+xml" width="100"
                                                       height="100" className="w-24 h-24"/>
                                            </div>
                                            <div>
                                                <embed src={awsIcon} type="image/svg+xml" width="100"
                                                       height="100" className="w-24 h-24"/>
                                            </div>
                                            <div>
                                                <embed src={laravelIcon} type="image/svg+xml" width="100"
                                                       height="100" className="w-24 h-24"/>
                                            </div>
                                            <div>
                                                <embed src={reactIcon} type="image/svg+xml" width="100"
                                                       height="100" className="w-24 h-24"/>
                                            </div>
                                            <div>
                                                <embed src={seleniumIcon} type="image/svg+xml" width="100"
                                                       height="100" className="w-24 h-24"/>
                                            </div>
                                        </div>
                                    </div>


                                </a>

                                <div
                                    className="flex text-white items-start gap-4 rounded-lg bg-transparent p-3 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
                                    <svg className="self-center" fill="#6c4ee4" width="64px" height="64px"
                                         viewBox="-5.6 -5.6 67.20 67.20"
                                         xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0">
                                                <rect x="-5.6" y="-5.6" width="67.20" height="67.20" rx="33.6"
                                                      fill="#9ac8f9" strokeWidth="0"></rect>
                                            </g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                               stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M 9.4843 48.1914 L 47.2184 48.1914 C 51.4376 48.1914 53.8751 45.7539 53.8751 40.9258 L 53.8751 15.0508 C 53.8751 10.2461 51.4141 7.8086 46.5157 7.8086 L 8.7812 7.8086 C 4.5858 7.8086 2.1249 10.2227 2.1249 15.0508 L 2.1249 40.9258 C 2.1249 45.7773 4.6093 48.1914 9.4843 48.1914 Z M 25.2109 29.1836 L 7.5155 11.7227 C 8.0312 11.5117 8.6405 11.3945 9.3671 11.3945 L 46.6564 11.3945 C 47.3826 11.3945 48.0157 11.5117 48.5548 11.7696 L 30.8827 29.1836 C 29.8749 30.1914 28.9843 30.6367 28.0468 30.6367 C 27.1093 30.6367 26.2187 30.1914 25.2109 29.1836 Z M 5.7109 40.9258 L 5.7109 15.0508 C 5.7109 14.8867 5.7109 14.9570 5.7109 14.8164 L 19.1874 28.0352 L 5.7343 41.3242 C 5.7109 41.2070 5.7109 41.0664 5.7109 40.9258 Z M 50.2890 15.0742 L 50.2890 40.9492 C 50.2890 41.0430 50.2890 41.1602 50.2890 41.2539 L 36.9062 28.0352 L 50.2890 14.8867 C 50.2890 15.0742 50.2890 15.0742 50.2890 15.0742 Z M 9.3671 44.6055 C 8.6874 44.6055 8.1249 44.5117 7.6327 44.3008 L 21.6484 30.4492 L 23.1718 31.9492 C 24.8124 33.5664 26.3827 34.2461 28.0468 34.2461 C 29.6874 34.2461 31.2812 33.5664 32.9218 31.9492 L 34.4452 30.4492 L 48.4376 44.2773 C 47.9452 44.5117 47.3360 44.6055 46.6564 44.6055 Z"></path>
                                            </g>
                                        </svg>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold dark:text-white">
                                            Links and Contact Info
                                        </h2>

                                        <h3 className="mt-4 text-md/relaxed">
                                            Email: austinmparham@gmail.com
                                        </h3>
                                        <h3 className="mt-4 text-md/relaxed">
                                            Phone: +1 (207) 329-7709
                                        </h3>
                                        <h3 className="mt-4 text-md/relaxed underline">
                                            <a href="https://github.com/austinmparham">Github:
                                                https://github.com/austinmparham</a>
                                        </h3>
                                        <h3>Resume: <PrimaryButton><a href={'resume'}>Download
                                            Resume</a></PrimaryButton></h3>

                                    </div>
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-white dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}

