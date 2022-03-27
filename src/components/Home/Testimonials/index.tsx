import {
  clientImage1,
  clientImage2,
  clientImage3,
  TestimonialCurveBG,
} from "assets";
import * as React from "react";
import styles from "./styles.module.css";
import { TestimonialCard, TestimonialCardProps } from "./testimonial";

const Testimonials = () => {
  const [card, setCard] = React.useState<number>(0);
  const [mobile, setMobile] = React.useState<boolean>(
    window.innerWidth <= 600 ? true : false
  );

  const checkWidth = () => {
    if (window.innerWidth <= 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  window.onresize = checkWidth;

  const unify = (e) => {
    return e.changedTouches ? e.changedTouches[0] : e;
  };

  let x0 = null;

  const lock = (e) => {
    x0 = unify(e).clientX;
  };

  const move = (e) => {
    if (x0 || x0 === 0) {
      let dx = unify(e).clientX - x0,
        s = Math.sign(dx);
      // if change is significant and is +ve, s = -ve -> card++
      // if change is significant and is -ve, s = +ve -> card--

      if (s < 0) {
        setCard((prev) => (prev < 2 ? prev + 1 : prev));
      } else {
        setCard((prev) => (prev > 0 ? prev - 1 : prev));
      }

      x0 = null;
    }
  };

  const testimonials: TestimonialCardProps[] = [
    {
      image: clientImage1,
      name: "Frank Lampard",
      role: "CEO @Paystack",
      text: "Eu amet a in neque habitant tristique nunc auctor nibh in natoque mauris, tempus, et, odio nascetur sagittis cras turpis viverra velit nullam at pulvinar tincidunt lorem at pellentesque morbi amet, commodo pellentesque viverra non sit volutpat proin diam convallis sit vestibulum, fermentum quis risus vulputate non, curabitur mauris vel",
    },
    {
      image: clientImage2,
      name: "Mike Christainson",
      role: "Business Op Lead @Brass",
      text: "Eu amet a in neque habitant tristique nunc auctor nibh in natoque mauris, tempus, et, odio nascetur sagittis cras turpis viverra velit nullam at pulvinar tincidunt lorem at pellentesque morbi amet, commodo pellentesque viverra non sit volutpat proin diam convallis sit vestibulum, fermentum quis risus vulputate non, curabitur mauris vel",
    },
    {
      image: clientImage3,
      name: "Sarah Ogu",
      role: "COO @Parthian Partners",
      text: "Eu amet a in neque habitant tristique nunc auctor nibh in natoque mauris, tempus, et, odio nascetur sagittis cras turpis viverra velit nullam at pulvinar tincidunt lorem at pellentesque morbi amet, commodo pellentesque viverra non sit volutpat proin diam convallis sit vestibulum, fermentum quis risus vulputate non, curabitur mauris vel",
    },
  ];
  return (
    <section className={styles.sectionBG}>
      <div className={`appContainer ${styles.sectionWrapper}`}>
        <h6>Some testimonials from clients who have trusted our services</h6>
        <div
          onTouchEnd={move}
          onMouseUp={move}
          onTouchStart={lock}
          onMouseDown={lock}
          className={styles.cardWrapper}
        >
          {testimonials.map((item, index) => {
            if ((card === index && mobile) || !mobile) {
              return <TestimonialCard {...item} key={index} />;
            }
          })}
        </div>
        <div className={styles.cardControl}>
          <div
            title="testimonial1"
            aria-label="testimonial1"
            onClick={() => setCard(0)}
            role="button"
            className={card === 0 ? styles.activeCard : ""}
          ></div>
          <div
            title="testimonial2"
            aria-label="testimonial2"
            onClick={() => setCard(1)}
            role="button"
            className={card === 1 ? styles.activeCard : ""}
          ></div>
          <div
            title="testimonial3"
            aria-label="testimonial3"
            onClick={() => setCard(2)}
            role="button"
            className={card === 2 ? styles.activeCard : ""}
          ></div>
        </div>
      </div>
      <TestimonialCurveBG className={styles.curve} />
    </section>
  );
};

export { Testimonials };
