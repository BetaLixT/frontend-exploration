import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import tailwindcssLogo from '/tailwindcss.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex h-screen bg-zinc-900 text-slate-300">
    <div class="m-auto">
 
      <div class="container flex items-center justify-center gap-14">
        <a href="https://vitejs.dev" target="_blank">
          <img src="${viteLogo}" class="w-24" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src="${typescriptLogo}" class="w-24" alt="TypeScript logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src="${tailwindcssLogo}" class="w-24" alt="TypeScript logo" />
        </a>
      </div>

      <h1 class="container flex justify-center pt-16 text-5xl font-semibold text-center">Vite + TypeScript + Tailwindcss</h1>
      
      <div class="container flex justify-center pt-20">
        <button id="counter" type="button" class="font-semibold rounded-lg px-10 py-3 border border-zinc-900 hover:border-solid hover:border-blue-900"></button>
      </div>
      <p class="container flex justify-center pt-20 font-light">
        Click on the logos to learn more
      </p>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
