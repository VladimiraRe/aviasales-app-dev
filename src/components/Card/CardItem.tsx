export default function CardItem({ title, info }: { title: string; info: string }) {
    return (
        <section className='card__item'>
            <h3 className='card__itemTitle'>{title}</h3>
            <span className='card__itemInfo'>{info}</span>
        </section>
    );
}
