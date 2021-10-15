export const fadeIn = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            // delay: 3,
            duration: 0.8
        }

    },
    exit: {
        opacity: 0,
        transition: {
            // delay: 3,
            duration: 0.8

        }
    }
}

export const popUp = {
    hidden: {
        opacity: 0,
        scale: 0.5
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            // delay: 3,
            duration: 0.8
        }

    },
    exit: {
        opacity: 0,
        transition: {
            // delay: 3,
            duration: 0.8

        }
    }
}