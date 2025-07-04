import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[3rem]">
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Um pouco</p> */}
        <h2 className={styles.sectionHeadText}>Sobre mim</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Olá, meu nome é Lucas Rodrigues, tenho 20 anos e sou desenvolvedor
        FullStack pleno com 2 anos de experiência na área. Atualmente, estou cursando
        Engenharia de Software no Uni-FACEF, onde busco aprofundar meus
        conhecimentos e aprimorar minhas habilidades técnicas. Embora minha
        especialidade seja no front-end, também estudo back-end para obter uma
        compreensão completa do desenvolvimento de software. Apaixonado por
        programação, estou sempre em busca de novos desafios e oportunidades
        para criar soluções inovadoras e experiências digitais marcantes.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
