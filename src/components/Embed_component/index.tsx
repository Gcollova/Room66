import  { createElement } from "react";
import styles from './embed.module.scss'


const EmbedComponent = () =>{
   

const embed = createElement('whereby-embed',{logo:'off',className:styles.embed,room:process.env.REACT_APP_ROOM})
    return(
        <div className={styles.main}>
            {embed}
        </div>
    )
}

export default EmbedComponent