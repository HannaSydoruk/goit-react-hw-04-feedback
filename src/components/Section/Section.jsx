import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      <div className={css.children}>{children}</div>
    </>
  );
};

export default Section;
