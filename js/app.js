// animHeader();
const animHeader = () => {
    let tl = gsap.timeline()
    tl.fromTo(".logo", {
        x: -150,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 2
    })
    tl.fromTo(".menu", {
            x: 200,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 2
        },
        "<=0")
}

// animHome();
const animHome = () => {
    let tl = gsap.timeline()
    tl.fromTo("#tug", {
        y: 100,
        opacity: 0,
    }, {
        delay: 1,
        y: 0,
        opacity: 1,
        duration: 2
    })
    tl.fromTo(".girl", {
            height: 0
        }, {
            height: 600,
            duration: 1
        },
        "<=0")
    tl.fromTo(".boy", {
            height: 0
        }, {
            height: 600,
            duration: 1
        },
        "<+.5")
    tl.fromTo(".shape1-home", {
            scale: 0
        }, {
            scale: 1,
            duration: 1
        },
        "<=0")
    tl.fromTo(".shape2", {
            opacity: 0,
            y: -300,
            rotate: 30,
        }, {
            opacity: .3,
            y: -350,
            rotate: -30,
            yoyo: "true",
            duration: 5,
            repeat: -1
        },
        "<+1")
    tl.fromTo(".shape3", {
            opacity: 0,
            y: 300,
            rotate: 30,
        }, {
            opacity: .3,
            y: 350,
            rotate: -30,
            yoyo: "true",
            duration: 5,
            repeat: -1
        },
        "<=0")

    tl.fromTo("#motto", {
            x: -20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1
        },
        "<=0>")

    tl.fromTo(".call-actions", {
            opacity: 0,
            x: 20
        }, {
            x: 0,
            opacity: 1,
            duration: 1
        },
        "<=0>")
}

// animAbout();
const animAbout = () => {
    let tl = gsap.timeline()
    tl.fromTo("p", {
        y: 50,
        opacity: 0,
    }, {
        delay: 1,
        y: 0,
        opacity: 1,
        duration: 1.5
    })
    tl.fromTo(".dad", {
            height: 0
        }, {
            height: 450,
            duration: 1
        },
        "<=0")
    tl.fromTo(".fam", {
            width: 0
        }, {
            width: 400,
            duration: 1
        },
        "<=0")
    tl.fromTo(".shape1-about", {
            scale: 0
        }, {
            scale: 1,
            duration: 1
        },
        "<=0")
    tl.fromTo("#trapezoid", {
            opacity: 0,
            y: 0,
            rotate: 30,
        }, {
            opacity: .3,
            y: 40,
            rotate: -30,
            yoyo: "true",
            duration: 5,
            repeat: -1
        },
        "<+1")
    tl.fromTo("#star", {
            opacity: 0,
            y: 0,
            rotate: 30,
        }, {
            opacity: .3,
            y: -40,
            rotate: -30,
            yoyo: "true",
            duration: 5,
            repeat: -1
        },
        "<=0")

    tl.fromTo("#mission", {
            x: -20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1
        },
        "<=0>")
}

// animGallery();
const animGallery = () => {
    let tl = gsap.timeline()
    tl.fromTo(".white-bg", {
            y: 50,
            opacity: 0,
        }, {
            delay: .5,
            y: 0,
            opacity: 1,
            ease: "sineOut"
        })
        .fromTo(".white-bg ul li", {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: .5,
            stagger: .4,
            ease: "sineOut"
        })


}

//page-wipe transitions

const pageLeave = () => {
    let tl = gsap.timeline()
    tl.fromTo(".loading-bg", {
        y: "100%"
    }, {
        y: 0,
        duration: "1.7",
    })
}

const pageEnter = () => {
    let tl = gsap.timeline()
    tl.fromTo(".loading-bg", {
        y: 0
    }, {
        y: "100%",
        duration: "1.7",
    })
}

const delay = (n) => {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    })
}

// animations and transitions action area
barba.init({
    transitions: [{
        name: "page-wipe",
        async leave(data) {
            const done = this.async();
            pageLeave();
            console.log("Leaving Page")
            await delay(1700);
            done();
        },
        async enter(data) {
            const done = this.async();
            pageEnter();
            console.log("Entering Page")
            done();
        }
    }],
    views: [{
        namespace: 'home',
        afterEnter(data) {
            animHeader();
            animHome();
        }
    }, {
        namespace: 'about',
        afterEnter(data) {
            animAbout();
        }
    }, {
        namespace: 'gallery',
        afterEnter(data) {
            animGallery();
        }
    }]
});