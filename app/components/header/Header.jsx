import Link from "next/link"
import styles from "./header.module.css"
import Image from "next/image"

const Header = () =>{
    return(
        <div className={styles.header}>
            <Link href={"/"} className={styles.geral}>
            <Image src="/akatsuki.png" alt="Akatsuki" width={100} height={100} className={styles.img}/>
            </Link>
          
            
        </div>
    )
}
 export default Header