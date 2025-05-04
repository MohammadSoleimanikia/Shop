export default function FeaturedProducts({title,items}){
    return<section className="my-14">
        <h2 className="text-center uppercase text-4xl font-bold">{title}</h2>
        <ul>
            {items && items.map((item)=><li>{item}</li>)}
        </ul>
    </section>
}