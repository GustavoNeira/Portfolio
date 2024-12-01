import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github, Mail } from "lucide-react";

export const socialNetworks = [
    
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/gustavo-neira-184765260/",
    },
    
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/GustavoNeira",
    }, 
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/sobre-mi",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/experiencia",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/proyectos",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contacto",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "HOSPITAL REGIONAL RANCAGUA/Remplazo",
        subtitle: "Desarrollo web/Soporte de usuario",
        description: "Toma de requerimientos. Desarrollo utilizando Html, CSS, Bootstrap, PHP, Ajax, Mysql. Soporte de usuario para los funcionarios del hospital,Soporte tecnico Mantenimiento equipos:Notebook,PC,Impresoras",
        date: "2020",
    },
    {
        id: 2,
        title: "DIGITAL 5",
        subtitle: "Desarrollo web",
        description: "Sitio web administrable empresa: Html, Css, Bootstrap, Php, Ajax, Mysql.",
        date: "2021",
    },
    {
        id: 3,
        title: "DIGITAL 5",
        subtitle: "Desarrollo web/Mobil ",
        description: "Inicio sistema de actividades y tareas para la empresa :Desarrollo utilizando Html, Css, Bootstrap, Php, Ajax, Mysql, Flutter.",
        date: "2022",
    },
    {
        id: 4,
        title: "DIGITAL 5",
        subtitle: "Desarrollo web",
        description: "Creacion Base de Datos y Api Re-Inicio Verde:NestJS, TypeScript, TypeORM, Mysql, GitLab.",
        date: "2024",
    },
    {
        id: 5,
        title: "TUNICHE FRUITS",
        subtitle: "ASISTENTE TIC",
        description: "Soporte tecnico, instalacion puntos de red,uso de tickets con GLPI, mantencion de equipos informaticos:impresoras ,notebook ,pc ,",
        date: "2024",
    },
]
export const dataExp = [
    {
        id: 1,
        title: "Técnico programador Nivel medio",
        subtitle: "Liceo Comercial Diego Portales/Perfil Egreso",
        description: "Los estudiantes que desarrollen esta especialidad podrán realizar aplicaciones, construir programas informáticos, administrar bases de datos, desarrollar y mantener sitios web, mantener y configurar equipos y entregar soporte a usuarios.",
        date: "2018 - 2019",
    },
    {
        id: 2,
        title: "Analista programador",
        subtitle: "Instituto Profesional AIEP/Perfil Egreso",
        description: "El Técnico en Programación y Análisis de Sistemas es un técnico de nivel superior capacitado para realizar el ciclo de desarrollo de software, incorporando en ello el análisis de requerimientos, diseño, construcción, pruebas e implementación de soluciones. Su formación lo habilita para diseñar y construir sistemas y soluciones informáticas seguras, conforme a estándares de calidad técnica y a los requerimientos del cliente.",
        date: "2020 - 2022",
    },
    {
        id: 3,
        title: "Ingeniería De Ejecución En Informática Mención Desarrollo De Sistemas",
        subtitle: "Instituto Profesional AIEP/Perfil Egreso",
        description: "El Ingeniero de Ejecución en Informática es un profesional capacitado para realizar y proponer soluciones integrales en desarrollo de sistemas, incorporando el análisis, metodologías, pruebas e implementación de soluciones seguras. Su formación lo habilita para formular, evaluar y gestionar proyectos informáticos, conforme a estándares de calidad técnica y a los requerimientos del cliente.",
        date: "2022 - 2024",
    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
   
    {
        id: 1,
        endCounter: 7,
        text: "Proyectos Realizados",
        lineRight: true,
        lineRightMobile: true,
    },
   
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Tu-Du",
        description:"Proyecto tesis Aplicacion movil para servicios y ventas integra chat,autenticacion de google",
        stack:"Java | Firebase",
        image: "/tu-du.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Tu-Du",
        description:"Proyecto tesis Aplicacion movil para servicios y ventas integra chat,autenticacion de google",
        stack:"Java | Firebase",
        image: "/tu-du.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Tu-Du",
        description:"Proyecto tesis Aplicacion movil para servicios y ventas integra chat,autenticacion de google",
        stack:"Java | Firebase",
        image: "/tu-du.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Tu-Du",
        description:"Proyecto tesis Aplicacion movil para servicios y ventas integra chat,autenticacion de google",
        stack:"Java | Firebase",
        image: "/tu-du.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
  
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];