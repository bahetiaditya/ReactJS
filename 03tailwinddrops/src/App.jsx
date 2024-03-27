import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-10">
        Tailwind Test
      </h1>

      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>

      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/19126536/pexels-photo-19126536/free-photo-of-rabbit-on-grass.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui
              dicta nemo eos at asperiores quos voluptate! Architecto dolore cum
              natus atque, doloremque perspiciatis est magni odit, possimus ut
              in.
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky">Rabbit</div>
            <div>lorem*4</div>
          </figcaption>
        </div>
      </figure>
      <Card />
      <Card />
    </>
  );
}

export default App;
