import type Project from "@/type/Project.type";

const Projects = [
    {
        title: 'Audioplayer' ,
        description: 'Un reproductor de audio personalizable.',
        platform: 1,
        icon: "url('/icon/Audioplayer.png')" ,
        appColor: '#ee7c11',
        repo: 'https://github.com/Corro-Kun/Audioplayer.git',
        tools: 'https://skillicons.dev/icons?i=tauri,react,ts,rust,sqlite',
        colors:{
            color1: '#ee7c11',
            color2: '#f48623',
            color3: '#fff',
            color4: '#f29945',
        },
        video: 'https://res.cloudinary.com/daqrkk4sr/video/upload/v1722034429/github/ianvpt6utqlv8hidaezf.webm'
    },
    {
        title: 'Remember.App',
        description: 'Una aplicación para recordar tus series.',
        platform: 2,
        icon: "url('/icon/Remember.png')" ,
        appColor: '#164863',
        repo: 'https://github.com/Corro-Kun/Remember.App.git',
        tools: 'https://skillicons.dev/icons?i=flutter,sqlite',
        colors:{
            color1: '#164863',
            color2: '#427D9D',
            color3: '#DDF2FD',
            color4: '#9BBEC8',
        },
        video: 'https://res.cloudinary.com/daqrkk4sr/video/upload/v1722037466/github/qlf6uwzfhyr9zazcchkm.webm'
    },
    {
        title: 'DolHack',
        description: 'Un sistema para administrar las clases de un profesor a sus estudiantes.',
        platform: 3,
        icon: "url('/icon/DolHack.png')" ,
        appColor: '#282c36',
        repo: 'https://github.com/Corro-Kun/DolHack2.0',
        tools: 'https://skillicons.dev/icons?i=mysql,spring,react',
        colors:{
            color1: '#282c36',
            color2: '#323946',
            color3: '#fff',
            color4: '#05a6e8',
        },
        video: 'https://res.cloudinary.com/daqrkk4sr/video/upload/v1729356948/github/nwaouixkb1zvd9h3dkyj.webm'
    }

] as Project[];

export default Projects;