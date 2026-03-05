import React from 'react';
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  // Definim care skill-uri sunt "Technical"
  const technicalTitles = ["Python", "C++", "SQL", "React", "Java", "HTML", "CSS", "Matlab", "Linux"];
  
  const technicalSkills = skills.filter(skill => technicalTitles.includes(skill.title));
  const softSkills = skills.filter(skill => !technicalTitles.includes(skill.title));

  // Funcție helper pentru randarea unei liste de skill-uri
  const renderSkillList = (skillsList) => (
    <div className={styles.skillsGrid}>
      {skillsList.map((skill, id) => (
        <div key={id} className={styles.skill}>
          <div className={styles.skillImageContainer}>
            <img src={skill.imageSrc} alt={skill.title} />
          </div>
          <p>{skill.title}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.mainTitle}>Experience & Skills</h2>

      <div className={styles.content}>
        <div className={styles.skillsSection}>
          
          <h2 className={styles.subTitle}>Technical Skills</h2>
          {renderSkillList(technicalSkills)}

          <h2 className={styles.subTitle} style={{marginTop: '40px'}}>Soft Skills</h2>
          {renderSkillList(softSkills)}
          
        </div>

        {/* HISTORY */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img src={historyItem.imageSrc} alt={`${historyItem.organisation} Logo`} />
              <div className={styles.historyItemDetails}>
                <h3>{historyItem.role}, {historyItem.organisation}</h3>
                <p>{historyItem.startDate} - {historyItem.endDate}</p>
                <ul>
                  {historyItem.experience.map((exp, i) => (
                    <li key={i}>{exp}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};