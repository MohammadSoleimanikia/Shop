export default function Button({type,children}){
    let classes="bg-gray-900 text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-slate-200 hover:text-blue-500 hover:cursor-pointer"
    if (type==="light"){
        classes="bg-white text-blue-500 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-900 hover:text-white hover:cursor-pointer"
    }
    return <button className={classes}>{children}</button>
}