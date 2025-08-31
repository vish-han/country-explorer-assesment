import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

export const slideInFromLeft: Variants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
};

export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
};

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Page-specific animations
export const heroAnimations = {
    title: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    },
    subtitle: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    },
    searchBar: {
        initial: { opacity: 0, y: 20, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
    }
};

export const searchAnimations = {
    suggestion: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
        transition: { duration: 0.3 }
    },
    dropdown: {
        initial: { opacity: 0, y: -10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.95 },
        transition: { duration: 0.2 }
    }
};

// Transition configurations
export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

export const smoothTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30
};

// Higher-order animation functions
export const createStaggeredList = (itemCount: number, staggerDelay = 0.1): Variants => ({
    initial: {},
    animate: {
        transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
        }
    }
});

export const createHoverScale = (scale = 1.05): Variants => ({
    initial: { scale: 1 },
    hover: { scale },
    tap: { scale: scale * 0.95 }
});

// Animation presets for common components
export const buttonAnimations = {
    primary: {
        whileHover: { scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400, damping: 17 }
    },
    secondary: {
        whileHover: { y: -2 },
        whileTap: { y: 0 },
        transition: { type: "spring", stiffness: 400, damping: 17 }
    }
};
