import styles from "./footer.module.css"
 import { BsInstagram } from 'react-icons/bs'
 import { BsGithub } from 'react-icons/bs'
 import { BsFillTelephoneFill } from 'react-icons/bs'
   const Footer = () => {
 return(
    <>
    <div className={styles.footer}>
    <BsInstagram/>
    <BsGithub />
    <BsFillTelephoneFill />

    </div>
    <div>
    <div className={styles.footer2}>
    <p>©Todos os Direitos Reservados</p>
    </div>
    </div>
    </>
 )
}
export default Footer