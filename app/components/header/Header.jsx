import Link from "next/link"
import styles from "./header.module.css"
import Image from "next/image"

const Header = () =>{
    return(
        <div className={styles.header}>
            
            <Link href={"/Serie"} className={styles.geral}>Menu</Link>
            <Image src="/akatsuki.png" alt="Akatsuki" width={90} height={90}/>
            <Link href={"/cadastro"} className={styles.geral}>Cadastro</Link>
            
        </div>
    )
}
 export default Header