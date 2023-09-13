import { card, multisig } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h3 className={styles.heading2}>
        Sensitive files are stored as strings on the blockchain.
      </h3>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the help of mutlisig, we make sure your private files remain secure.
      </p>

     
    </div>

    <div className={layout.sectionImg}>
      <img src={multisig} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
