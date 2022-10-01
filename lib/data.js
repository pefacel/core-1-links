export const posts = [
  {
    title: "Core Concept: Link",
    description:
      "Permite crear un Link y navegar entre páginas. Se importa desde next/link.",
    level: "Level 0",
    code: `
    <Link href="/">
      {...}
    </Link>
    `,
    instruction: "Ir al navbar level-0-link y pasar los tabs a Link.",
  },
  {
    title: "Core Concept: asPath",
    description:
      "Permite saber en dónde se encuentra. Se debe instanciar el hook useRouter desde next/router.",
    level: "Level 0",
    code: `
      const router = useRouter();
      console.log(router.asPath) 
      // /teams
      
    `,
    instruction:
      "Ir al navbar level-0-asPath y asignarle la correcta clase Tailwind, a cada link, si es current",
  },
  {
    title: "Simplificando nuestro Link",
    description:
      "Ocupando los condicionales de manera correcta, el código se puede simplificar.",
    level: "Level 1",
    code: `
      className={
        currentPath === "/"
          ? "px-1 pt-1 border-indigo-500"
          : "px-1 pt-1 border-b-2 border-transparent"
      }    
    `,
    instruction: "Ir al navbar level-1 y simplificar los links",
  },
  {
    title: "Entendiendo las función classNames",
    description:
      "Ocupando la clase classNames, el código se puede simplificar aun más. Permite solo agragar lo justo y necesario de cada condicional, sumándose al final las clases en común.",
    level: "Level 2",
    code: `
       classNames(
        "/" === currentPath
          ? "border-indigo-500""
          : "border-b-2 border-transparent"
          , "px-1 pt-1"
      )  
    `,
    instruction: "Ir al navbar level-2 y utilizar la función classNames",
  },
  {
    title: "Separando en componentes",
    description:
      "Separando el Link en componentes reutilizables, queda el código aún más limpio.",
    level: "Level 3",
    code: `
       <NavbarLevel3Link 
          href={"/"} 
          currentPath={currentPath} />
    
    `,
    instruction: "Separar cada link en componentes reutilizables.",
  },
  {
    title: "Centralizando la información",
    description:
      "Creando y centralizando una data en un array nos permitirá rápidamente mantener el código futuro.",
    level: "Level 4",
    code: `
       const navegation = [
        { id: 1, href: "/", title: "Dashboard" },
        { id: 2, href: "/team", title: "Team" },
      ];
      
    
    `,
    instruction: "Finalizar el navbar level 4, tanto desktop como mobile",
  },
  {
    title: "Core Concept: push",
    description:
      "Otra propiedad, además del asPath, es el push. Simplemente se lo agregamos a un elemento y, al hacer click, no dirigue a donde le digamos.",
    level: "Extra",
    code: `
     onClick={()=>router.push('/')}         
    `,
    instruction: "Agregarlo al navbar level 4, en donde, al apretar el logo de tailwind, nos rediriga al Dashboard",
  },
  {
    title: "Aplicando lo aprendido",
    description:
      "El enrutamiento es clave en React y NextJs nos lo simplifica a niveles básicos.",
    level: "Level 5",
    code: `   
      `,
    instruction:
      "Elegir cualquier navbar de TailwindUI que no sea el Simple y aplicar los niveles anteriores. ",
  },

];
