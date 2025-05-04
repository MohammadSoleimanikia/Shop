export default function Button({type,children}){
    let classes="bg-gray-900 text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-white hover:text-blue-500"
    if (type==="light"){
        classes="bg-white text-blue-500 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-900 hover:text-white"
    }
    return <button className={classes}>{children}</button>
}