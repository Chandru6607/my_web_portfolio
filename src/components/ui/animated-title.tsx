import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTitleProps {
  children: ReactNode;
  gradient?: boolean;
  className?: string;
}

export const AnimatedTitle = ({ children, gradient, className = "" }: AnimatedTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={className}
    >
      {gradient ? (
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {typeof children === 'string' ? (
            children.split(' ').map((word, i, arr) => (
              i === arr.length - 1 ? (
                <span key={i} className="gradient-text">{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            ))
          ) : (
            children
          )}
        </h2>
      ) : (
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {children}
        </h2>
      )}
    </motion.div>
  );
};
