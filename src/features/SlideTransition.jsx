import { CSSTransition } from 'react-transition-group';
import '../App.css'; 

const SlideTransition = ({ children, ...props }) => {
  return (
    <CSSTransition
      {...props}
      classNames="slide"
      timeout={500} // Durée de l'animation en millisecondes
    >
      {children}
    </CSSTransition>
  );
};

export default SlideTransition;
