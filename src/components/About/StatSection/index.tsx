import styles from "./styles.module.css";

interface StatProps {
  value: string;
  title: string;
  description: string;
}

const Stat = ({ value, title, description }: StatProps) => {
  return (
    <div className={styles.statCard}>
      <p className={styles.statCardVal}>{value}</p>
      <p className={styles.statCardTtl}>{title}</p>
      <p className={styles.statCardTxt}>{description}</p>
    </div>
  );
};

const StatSection = () => {
  const StatList: StatProps[] = [
    {
      value: "78+",
      title: "Satisfied Clients",
      description:
        "Eu amet a in neque habitant tristique nunc auctor nibh in natoque mauris, tempus, et, ",
    },
    {
      value: "600%",
      title: "Return on investment",
      description:
        "Eu amet a in neque habitant tristique nunc auctor nibh in natoque mauris, tempus, et, ",
    },
    {
      value: "500+",
      title: "Onboarded for clients",
      description:
        "Eu amet a in neque habitant tristique nunc auctor nibh in natoque mauris, tempus, et, ",
    },
  ];
  return (
    <section className={styles.sectionBG}>
      <div className={`appContainer ${styles.statContainer}`}>
        <h3 className={styles.ttl}>We are only just getting started</h3>
        <p className={styles.txt}>
          We have a track record to show for our progress, your success is our
          success
        </p>

        <div className={styles.statListWrapper}>
          {StatList.map((item, index) => (
            <Stat {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { StatSection };
