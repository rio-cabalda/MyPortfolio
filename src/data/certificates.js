import reactCertImg from '../assets/certificates/reactCert.png';
import CssAndSassCertImg from '../assets/certificates/AdvanceCssAndSassCert.png';
import typescriptCertImg from '../assets/certificates/typescriptCert.png';
import reactCertPdf from '../assets/certificates/reactCert.pdf';
import CssAndSassCertPdf from '../assets/certificates//AdvanceCssAndSassCert.pdf';
import typescriptCertPdf from '../assets/certificates/typescriptCert.pdf';


const  featured = [
{
    id: 1,
    image: reactCertImg,
    title: "React 18 Tutorial and Projects Course (2023)",
    certLink: "https://www.udemy.com/certificate/UC-254d2aec-aa04-46fe-b2c9-223f23bccdf5",
    download: reactCertPdf,
    topics: ["React Fundamentals","useState Hook","useEffect Hook","Conditional Rendering","Forms","useRef Hook","useReducer Hook","Prop drilling","Context API","Custom Hooks","useCallback Hook","useMemo Hook","React Router 6","Axios Http Library","Redux-toolkit."]
},
{
    id: 2,
    image: CssAndSassCertImg,
    title: "Advance CSS and SASS: Flexbox, Grid, Animations and More",
    certLink: "https://www.udemy.com/certificate/UC-835d0d93-694b-4c64-a037-c43888e07b6c",
    download: CssAndSassCertPdf,
    topics: ["Modern CSS techniques to create stunning designs and effects, Flexbox layout, Global variables, Architecting CSS, Managing media queries,Responsive images in HTML and CSS, NPM ecosystem, Advanced CSS animations, CSS architecture, CSS Grid layouts, Advanced responsive design, SVG images and videos in HTML and CSS."]
},
{
    id: 3,
    image: typescriptCertImg,
    title: "Understanding TypeScript",
    certLink: "https://www.udemy.com/certificate/UC-43b54470-d92b-46dc-aca7-82f8e2078e58",
    download: typescriptCertPdf,
    topics: ["Types, ES6 Support, Classes, Modules, Interfaces","Combine TypeScript with ReactJS or NodeJS / Express","Understand what TypeScript really is about and how it works","Learn TypeScript both in theory as well as applied to real use-cases and projects."]
}
];

export default featured;