import {
  FacebookLogoWhite,
  LinkedinLogoWhite,
  teamMember,
  TwitterLogoWhite,
} from "assets";
import * as React from "react";
import styles from "./styles.module.css";

interface MemberProps {
  image: string;
  name: string;
  bio: string;
  linkedinURL: string;
  twitterURL: string;
  facebookURL: string;
}

const Member = ({
  image,
  name,
  bio,
  linkedinURL,
  twitterURL,
  facebookURL,
}: MemberProps) => {
  return (
    <div className={styles.memberContainer}>
      <img src={image} />
      <div className={styles.memberInfo}>
        <p>{name}</p>
        <p>{bio}</p>
        <div>
          <LinkedinLogoWhite title="linkedin" />
          <TwitterLogoWhite title="twitter" />
          <FacebookLogoWhite title="facebook" />
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const MemberList: MemberProps[] = [
    {
      image: teamMember,
      name: "Ibukunoluwa Adebayo",
      bio: "Eu amet a in neque habitant tristique nunc auctor nibh in natoque mauris, tempus, et, odio nascetur sagittis cras turpis viverra velit nullam at pulvinar tincidunt lorem at",
      linkedinURL: "",
      twitterURL: "",
      facebookURL: "",
    },
    {
      image: teamMember,
      name: "Majid Menseh",
      bio: "Eu amet a in neque habitant tristique nunc auctor nibh in natoque mauris, tempus, et, odio nascetur sagittis cras turpis viverra velit nullam at pulvinar tincidunt lorem at",
      linkedinURL: "",
      twitterURL: "",
      facebookURL: "",
    },
    {
      image: teamMember,
      name: "Yvonne Samuels",
      bio: "Eu amet a in neque habitant tristique nunc auctor nibh in natoque mauris, tempus, et, odio nascetur sagittis cras turpis viverra velit nullam at pulvinar tincidunt lorem at",
      linkedinURL: "",
      twitterURL: "",
      facebookURL: "",
    },
  ];
  return (
    <section className={styles.sectionBG}>
      <div className={`appContainer ${styles.teamsContainer}`}>
        <h2 className={styles.ttl}>Meet our Team</h2>
        <p className={styles.txt}>
          We have a team of well grounded individuals to help you take your
          organisation to the where you want it to be{" "}
        </p>
        <div className={styles.memberListWrapper}>
          {MemberList.map((item, index) => (
            <Member {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export { TeamSection };
