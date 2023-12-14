import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/blog.module.css";
import Link from "next/link";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.blog}>
      <div className={styles.title}>
        <Link href="/blog">
          <button>back</button>
        </Link>
        <h1>{slug}</h1>
      </div>
      <div className={styles.description}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          deserunt at, dicta alias molestiae consequuntur similique quasi
          debitis labore nobis laudantium in? Perferendis fugit omnis libero et.
          Deleniti, id dolore dolor distinctio temporibus quos voluptatibus
          corporis laboriosam doloribus sequi blanditiis voluptas vel
          consectetur similique ratione harum cum delectus obcaecati maiores
          voluptatum quaerat animi alias quod. Temporibus nobis molestias
          aliquid sit quae maiores quia atque asperiores voluptatum, enim alias
          possimus totam quisquam quidem optio! Similique quam illum modi
          quibusdam natus quia ipsa consequuntur omnis labore a ea quasi,
          corrupti veritatis minus nihil, quas temporibus necessitatibus quod.
          Perferendis sunt officia nesciunt magni atque ipsum, aliquid nisi
          minima dolorem quis fugiat provident voluptate quia sapiente
          perspiciatis consequuntur voluptatem, ipsa repudiandae, impedit hic
          est cum ad recusandae neque? Cumque laborum, porro repellendus at ut
          tempore mollitia iusto accusamus! Cum, non. Ullam sit accusantium
          veniam inventore dolore laudantium totam debitis similique culpa a
          cumque maxime reprehenderit quo libero nobis facilis consectetur
          omnis, nemo iure. Quae maxime at rerum ipsam repudiandae maiores
          nostrum ipsa saepe labore expedita, unde, iusto modi quas soluta
          reprehenderit, alias blanditiis omnis sint accusamus dolore velit ut
          quasi. Quisquam repellendus nihil rem possimus odit tenetur quo ad
          magni doloribus, eum quis doloremque enim, ratione repudiandae
          voluptas. Dolorem recusandae nam maiores earum amet, minus vel!
          Repudiandae neque temporibus cumque soluta molestiae. Ratione amet
          placeat similique aliquid! Aut ducimus sunt unde tempora beatae
          laborum atque iste? Doloribus ullam eveniet reiciendis dolores dolore
          atque, iusto ab laboriosam. Officiis est suscipit ratione assumenda
          quae esse quod soluta rerum possimus saepe. Laboriosam ducimus tempore
          nesciunt nulla rerum maxime ab laudantium eaque enim excepturi
          delectus voluptatibus doloribus illo sint, animi saepe iste. Quisquam
          dignissimos laudantium quidem, impedit rem beatae odio, cumque eaque
          officia sint deleniti culpa laborum delectus, repellendus vitae ab
          minus nam fuga magnam ad dolores aliquid? Amet ad, harum assumenda,
          nam fugiat quia laboriosam perferendis reprehenderit eius incidunt
          perspiciatis nihil eaque minus? Quas accusamus nam ut cumque a animi
          consectetur rem officiis maxime explicabo autem velit tempora incidunt
          veritatis nobis suscipit expedita harum, neque ipsum, perspiciatis
          modi perferendis. Voluptatem vitae nobis magni dolorem corrupti nam
          nostrum velit rerum cupiditate, ut autem commodi, voluptate
          recusandae, dicta corporis enim eligendi esse sequi itaque! Tempore
          recusandae mollitia iste, dolore maiores quo, dolorem autem nostrum
          dolor laudantium, dicta libero? Expedita quisquam totam corporis,
          magnam sint labore neque laboriosam animi culpa. Quidem saepe dolores
          qui repudiandae consequatur dolorem corporis cupiditate modi commodi
          est quasi nostrum explicabo at, sit, recusandae neque molestias ullam
          adipisci reiciendis maxime alias praesentium voluptatibus earum
          similique. Architecto illo nostrum perspiciatis nulla est minus error
          dolor fugiat. Corrupti mollitia perferendis pariatur laboriosam!
          Nostrum quasi enim dicta, nisi nemo iusto quisquam minus! Adipisci
          atque tenetur quibusdam molestias qui impedit minima eligendi
          laboriosam quo dignissimos rem, eius exercitationem? Tempore
          exercitationem consectetur dolor sed fugiat blanditiis perspiciatis,
          repellendus deserunt quidem quam facilis dignissimos vitae cum
          necessitatibus excepturi aut voluptatibus. Voluptate maxime
          voluptatibus ratione placeat, praesentium voluptatum natus sunt
          reiciendis molestias, repellat aliquid quam recusandae perspiciatis
          exercitationem consectetur nostrum nulla? Alias, quo.
        </p>
      </div>
    </div>
  );
};

export default slug;
