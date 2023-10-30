import {create} from "zustand";


const getTheme = () =>{
    const theme = localStorage.getItem("theme");
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let themeMode = darkModeMediaQuery ? "dark" :"light"
        
        if(theme){
            return JSON.parse(theme)
        }else{
            if(darkModeMediaQuery){
                localStorage.setItem("theme",JSON.stringify(themeMode));
            }
            return themeMode
        }
};

const useGlobalState = create((set)=>({
    navigation:'home',
    theme: getTheme(),
    setNavigation: (param) =>{
        set({navigation:param});
    },
    setTheme: ()=>{
        set((state)=>{
            if(state.theme === 'light'){
                localStorage.setItem("theme",JSON.stringify('dark'));
                return {...state, theme: 'dark'}
            }else{
                localStorage.setItem("theme",JSON.stringify('light'));
                return {...state, theme: 'light'}
            }
        });
        
    }

}));

export default useGlobalState;