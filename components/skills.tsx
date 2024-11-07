import styles from './SkillsStyles.module.css';
import Image from 'next/image';

interface SkillItemProps {
  src: string;
  skill: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ src, skill }) => (
  <div className={styles.skillItem}>
    <Image src={src} alt={`${skill} icon`} width={24} height={24} />
    <span>{skill}</span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <div className="z-20 grid items-center text-justify h-full  p-6  md:py-0 ">
    <div className="flex flex-col justify-center ">
    <section id="skills" className={styles.container}>
      <h1 className="mb-5 text-2xl leading-tight text-start md:text-4xl md:mb-10">
        Mis <span className={styles.habilidades}>Habilidades</span>
      </h1>
      <br />

      <div className={styles.skillList}>
        <SkillItem src="/checkmark-dark.svg" skill="HTML" />
        <SkillItem src="/checkmark-dark.svg" skill="CSS" />
        <SkillItem src="/checkmark-dark.svg" skill="JavaScript" />
        <SkillItem src="/checkmark-dark.svg" skill="TypeScript" />
        <SkillItem src="/checkmark-dark.svg" skill="PHP" />
      </div>
      <hr className={styles.divider} />

      <div className={styles.skillList}>
        <SkillItem src="/checkmark-dark.svg" skill="React" />
        <SkillItem src="/checkmark-dark.svg" skill="Nest" />
        <SkillItem src="/checkmark-dark.svg" skill="Node" />
        <SkillItem src="/checkmark-dark.svg" skill="Tailwind CSS" />
      </div>
      <hr className={styles.divider} />

      <div className={styles.skillList}>
        <SkillItem src="/checkmark-dark.svg" skill="MySQL" />
        <SkillItem src="/checkmark-dark.svg" skill="Git" />
        <SkillItem src="/checkmark-dark.svg" skill="FireBase" />
        <SkillItem src="/checkmark-dark.svg" skill="Bootstrap" />
      </div>
      <hr className={styles.divider} />
    </section>
    </div>
    </div>
  );
};

export default Skills;
