import { useLayoutEffect, useState } from 'react'
import { dataDescribe } from './data'
import './App.css'
import up from './up.png'
import down from './down.png'
import gsap from "gsap";

function About() {
    const [events, setEvents] = useState(dataDescribe);
    const [showText, setShowText] = useState (false);
    const [upDown, setUpDown] = useState (true);
    const showTextClick = (element) => {
        element.showMore =!element.showMore;
        setShowText (!showText);
    }
    
const openContent = () => {
    
    if (events === dataDescribe) {
        setEvents ([])
        
    }
    else {
        setEvents (dataDescribe)
    }
    setUpDown (!upDown)
}

useLayoutEffect(() => {
    gsap.to(".header", {opacity:1, duration:4, delay:1});
    gsap.to(".image_about", {opacity:1, duration:4, delay:2});
},[])

    return(
    <div>
        <div className="head">
            <h1 className="header">ОБО МНЕ</h1>
        </div>
        <div className="container">
            <div className="container_about">
                <div className='image_container'>
                    <img className='image_about' src='https://images.unsplash.com/photo-1624513764365-6014e29cd525?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=702&q=80' alt='about'/>
                    <p className='image_par'>Елена Кавешникова</p>      
                </div>
                <div className='allpars'>
                    <p className='par_about'>Меня зовут Елена и я фотограф. </p>
                    <p className='par_about'> Мой путь в фотографию был несколько случайным, но осталась я в этой профессии вполне осознанно. Я живу в красивейшем месте в горах, меня окружает невероятная природа, думаю она и стала моим вдохновением, как и люди конечно.</p>
                    <p className='par_about'> Фотография стала моей страстью, моей жизнью. Каждая съемка это маленькая история, наполненная яркими эмоциями. Когда я беру камеру в руки, бабочки порхают у меня в животе и я стараюсь передать эти чувства вам, стать вам другом, помогаю  расслабиться и насладиться моментом.</p>
                </div>
            </div>
        </div>
        <div className="subtitle">
            <h3>Ваша история моими глазами...</h3>
        </div>
        <div className='about'>
            {events.map (((element, index) => {
                const {picture, describtion, showMore} = element;
            
            return (
                <div className="container_description" key={ index }>
                    <img className='image_description'  src={ picture } alt="events"/>
                    <p className='par_description'>{showMore ? describtion: describtion.substring(0,116)+ "..."} <button className='show' onClick={() => showTextClick (element)}>{showMore ? "свернуть": "подробнее"}</button></p>
                </div>
            );
        }))}
    
    </div>
    <div className='arrow_btn'>
        <button className='open_close' onClick={openContent}>{upDown ? <img src={up} alt="up"/> : <img src={down} alt="down"/>}</button>
    </div>
    <div className='head'> 
        <h4>Просмотрите мои работы, сформируйте стиль и выражение, которые вы хотите увидеть на своих  фотографиях, расскажите мне о своих предпочтениях и пожеланиях!</h4>
        <hr/>
    </div>
    </div>
    )
}
export default About;