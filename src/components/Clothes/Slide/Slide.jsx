import style from './slide.module.scss'
import image from '../../../img/musicians.png';


const Slide = (props) => {
    return ( 
        <div>
        <h1 className={style.title}>number one</h1>
        <div className={style.content}>
            <img src={image} alt='' />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti quaerat fugit ea, similique
                explicabo. Aspernatur nemo qui nostrum, repellat quo delectus deserunt ipsa consectetur distinctio, cum
                omnis fuga quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias quis
                suscipit sit blanditiis! Saepe minima ad provident consequuntur repudiandae architecto, totam inventore
                nisi maiores reprehenderit repellat nobis itaque delectus?
            </p>
        </div>
    </div>
     );
}
 
export default Slide;