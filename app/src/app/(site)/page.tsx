import Image from 'next/image'
import {SectionSearch} from "../sections/search";

export default function Home() {
  return (
    <>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <div className="flex items-center justify-center">
                        <Image className="items-center" src="/logo.png" width="200" height="50" alt="Logo"/>
                    </div>
                    <hr className="mt-8 mb-8"/>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Prueba Técnica
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Realiza la búsqueda de un usuario de Github y obtén sus repositorios públicos.
                    </p>
                    <SectionSearch/>
                </div>
            </div>
        </div>
    </>
  )
}
