import {create} from "zustand";


const getTheme = () =>{
    const theme = localStorage.getItem("theme");
    if(theme){
        return JSON.parse(theme);
    }else {
        localStorage.setItem("theme",JSON.stringify("light"));
        return 'light';
    }
};

const useGlobalState = create((set)=>({
    theme: getTheme(),
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