import {
  serviceFirstImage,
  serviceFourthImage,
  ServicesCurveBG,
  serviceSecondImage,
  serviceThirdImage,
} from "assets";
import * as React from "react";
import styles from "./styles.module.css";

interface List {
  title: string;
  items: string[];
}

interface ServicesProps {
  image: string;
  title: string;
  list: List[];
}

const Services: React.FC<ServicesProps> = ({ image, title, list }) => {
  return (
    <div className={styles.serviceSection}>
      <div className={styles.imageSection}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.textSection}>
        <h3>{title}</h3>
        {list.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <ul>
              {item.items.map((item2, index2) => (
                <li key={index2}>{item2}</li>
              ))}{" "}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const ServicesList: ServicesProps[] = [
    {
      image: serviceFirstImage,
      title: "Business Advisory",
      list: [
        {
          title: "Corperate strategy",
          items: [
            "Strategy Design and Implementation",
            "Business Planning & Transformation",
            "Policy and Process Design and Standardization",
            "Cost Reduction planning and Implementation",
            "Branding and Marketing Strategy",
          ],
        },
        {
          title: "Outsourcing",
          items: ["Personnel Outsourcing", "Business Process Outsourcing"],
        },
      ],
    },
    {
      image: serviceSecondImage,
      title: "Human Capital Consulting",
      list: [
        {
          title: "Advisory",
          items: [
            "Human Resource Management",
            "Organizational Development & Strategy",
            "HR Policies and Procedure Development",
            "Job Analysis and Design",
            "HR Tools, Technology and Surveys",
            "Diversity, Equality and Inclusion Strategy Design",
          ],
        },
        {
          title: "Recruitment",
          items: [
            "Executive Search & Headhunting",
            "Contract Staffing & Background Verification  ",
            "CV Sourcing, Resume Writing & Formatting ",
            "Testing & Assessment",
          ],
        },
        {
          title: "Learning & Development",
          items: [
            "Customized Training Programs",
            "Training Development, Customization & Integration",
            "Training and Gap Assessment",
            "New Hire training program development, integration & optimization",
          ],
        },
        {
          title: "Payroll Management",
          items: [
            "Payroll outsourcing & Provider onboarding or migration",
            "Payroll Reconciliation & Set up of new payroll",
            "Filing of Employee & Employer Annual Pay As You Earn (PAYE) Tax Returns",
            "Processing Employees’ Tax Clearance Certificates & Registration of Companies for PAYE",
          ],
        },
      ],
    },
    {
      image: serviceThirdImage,
      title: "Digital Transformation",
      list: [
        {
          title: "Business Transformation",
          items: [
            "Policy Review and Standardization",
            "Business Process Modeling",
            "Business Process Re-engineering",
          ],
        },
        {
          title: "Automation",
          items: ["ERP Onboarding", "Workflow design and Automation"],
        },
        {
          title: "Digital Marketing",
          items: [
            "Social Media Optimization",
            "Search Engine Optimization",
            " Website Design",
          ],
        },
        {
          title: "Technology Advisory",
          items: [
            "Application Planning ",
            "Technology Outsourcing",
            "Technology Onboarding and Implementation",
            "Software Engineering and Design",
            "Data Analytics and Business Intelligence",
          ],
        },
      ],
    },
    {
      image: serviceFourthImage,
      title: "Research and Development",
      list: [
        {
          title: " Environmental, Social and Governance",
          items: [
            "Risk Assessment ",
            " Sustainability Planning and Compliance",
            "Life Cycle Assessment",
            "Environmental Impact Assessment",
          ],
        },
        {
          title: "Research Planning and Implementation",
          items: ["Product Research", " Market Research"],
        },
        {
          title: "Compliance and Standardization",
          items: ["ISO Implementation", "HSE and Sustainability Compliance"],
        },
      ],
    },
  ];
  return (
    <section className={styles.sectionBG}>
      <div className={`appContainer ${styles.servicesContainer}`}>
        {ServicesList.map((item, index) => (
          <Services {...item} key={index} />
        ))}
      </div>
      <ServicesCurveBG className={styles.curve} />
    </section>
  );
};

export { ServicesSection };
