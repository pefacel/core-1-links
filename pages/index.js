import { useRouter } from "next/router";
import React from "react";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl pt-16 px-4   sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-indigo-600">
              {router.asPath}
            </h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Soy DashboardPage
            </p>

            <p className="mt-3 text-base text-gray-900    italic ">
              Cada uno de estos navbars se encuentra en el repositorio github.
              Nivel por nivel, se explica un concepto con su respectiva
              instrucción. Como ayuda, el tab Dashboard incluye un ejemplo de
              muestra. Hay pequeñas trampas que se deben fijar (se darán cuenta
              si no les funciona apretando cada Link)
            </p>

            <a
              rel="noopener noreferrer"
              target="_blank"
              className="font-bold cursor-pointer text-indigo-600"
              href="https://github.com/pefacel/core-1-links"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
