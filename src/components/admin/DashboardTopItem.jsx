export default function DashboardTopItem({title,icon,value,info}){
return <div className="flex gap-5 w-full bg-white rounded-md p-5">
        {icon}
    
    <div className="flex flex-col ">
        <h2 className="text-slate-600 font-bold text-2xl">{value}</h2>
        <p className=" text-lg">{title}</p>
        <p className=" text-base"><span className={info.number<0 ? "text-red-400":"text-green-400"}>{info.number}</span> {info.text}</p>
    </div>
</div>
}