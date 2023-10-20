"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "typed.js"
var external_typed_js_ = __webpack_require__(603);
var external_typed_js_default = /*#__PURE__*/__webpack_require__.n(external_typed_js_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: external "magic-snowflakes"
const external_magic_snowflakes_namespaceObject = require("magic-snowflakes");
var external_magic_snowflakes_default = /*#__PURE__*/__webpack_require__.n(external_magic_snowflakes_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./src/pages/[slug].js








function CopyUrlButton() {
    const [copied, setCopied] = (0,external_react_.useState)(false);
    const handleClick = ()=>{
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "btn btn-secondary rounded-pill",
        onClick: handleClick,
        children: copied ? "Copied!" : "Copy URL"
    });
}
function Home({ person , publicPerson  }) {
    const router = (0,router_.useRouter)();
    const secret = router.query.secret;
    const el = (0,external_react_.useRef)(null);
    const [currentUrl, setCurrentUrl] = (0,external_react_.useState)("Not Found");
    (0,external_react_.useEffect)(()=>{
        setCurrentUrl(window.location.href);
        var snowflakes = new (external_magic_snowflakes_default())({
            color: "#ffff",
            count: 45,
            minOpacity: 0.3,
            maxOpacity: 0.5,
            minSize: 8,
            maxSize: 15
        });
        const clickMe = document.querySelector(".click-icon");
        const card = document.querySelector(".card");
        const cdThumb = document.querySelector(".cd-thumb");
        const audio = document.querySelector("#audio");
        const progress = document.querySelector("#progress");
        let isPlaying = false;
        const cdThumbAnimate = cdThumb === null || cdThumb === void 0 ? void 0 : cdThumb.animate([
            {
                transform: "rotate(0deg)"
            },
            {
                transform: "rotate(360deg)"
            }
        ], {
            duration: 10000,
            iterations: Infinity
        });
        cdThumbAnimate === null || cdThumbAnimate === void 0 ? void 0 : cdThumbAnimate.pause();
        const handleClick = ()=>{
            card.classList.toggle("is-opened");
            clickMe.classList.toggle("is-hidden");
            handlePlay();
        };
        const handlePlay = ()=>{
            if (!isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
            isPlaying = !isPlaying;
        };
        //Event
        card === null || card === void 0 ? void 0 : card.addEventListener("click", handleClick);
        audio === null || audio === void 0 ? void 0 : audio.addEventListener("play", function() {
            cdThumbAnimate.play();
        });
        audio === null || audio === void 0 ? void 0 : audio.addEventListener("pause", function() {
            cdThumbAnimate.pause();
        });
        audio === null || audio === void 0 ? void 0 : audio.addEventListener("timeupdate", function() {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        });
        progress === null || progress === void 0 ? void 0 : progress.addEventListener("change", function(e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        });
        audio === null || audio === void 0 ? void 0 : audio.addEventListener("ended", function() {
            audio.play();
            progress.value;
        });
        return ()=>{
            card === null || card === void 0 ? void 0 : card.removeEventListener("click", handleClick);
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        const typed = new (external_typed_js_default())(el.current, {
            strings: [
                "Women's",
                "Sweetest"
            ],
            typeSpeed: 50,
            backSpeed: 40,
            backDelay: 1500,
            loop: !0,
            showCursor: false
        });
        return ()=>{
            typed.destroy();
        };
    }, []);
    const cdImage = "/images/person/" + person.id + ".jpg";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "HAPPY WOMEN'S DAY"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: person.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/images/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
                        rel: "stylesheet",
                        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css",
                        integrity: "sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==",
                        crossorigin: "anonymous",
                        referrerpolicy: "no-referrer"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "area",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card-page card-page-front",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-page card-page-outside",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "ff-great",
                                                children: person.name
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-page card-page-inside",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "player w-50 h-100 py-5 px-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "d-flex h-100 py-5 flex-column align-items-center justify-content-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: "Now playing"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                    children: "Beautiful day"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "cd m-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "cd-thumb",
                                                                style: {
                                                                    backgroundImage: `url(${cdImage})`
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "control w-100 my-2 d-flex align-items-center justify-content-between",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "btn-control",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-repeat"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "btn-control",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-backward"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "btn-play",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-circle-pause"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "btn-control",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-forward"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "btn-control",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-shuffle"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            id: "progress",
                                                            className: "progress",
                                                            type: "range",
                                                            defaultValue: 0,
                                                            step: 1,
                                                            min: 0,
                                                            max: 100
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                                                            id: "audio",
                                                            src: "/music.mp3"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card-page px-3 card-page-bottom d-flex flex-column justify-content-center align-items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "ff-great",
                                            children: [
                                                "Happy\xa0",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    ref: el
                                                }),
                                                "\xa0Day"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                '"',
                                                person.quote,
                                                '"'
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "link",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                children: "flowers.mireavn.com"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "click-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/images/open.svg",
                                fill: true,
                                alt: "open-icon"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "unsupported bg-light h-100 w-100 d-flex flex-column justify-content-center align-items-center p-5 text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "my-2",
                        children: [
                            "Sorry, this screen size is not supported. Please access the content using a desktop browser with a wider screen. ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " Thank you."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "alert alert-secondary fs-6",
                        role: "alert",
                        children: currentUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CopyUrlButton, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://unpkg.com/magic-snowflakes/dist/snowflakes.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
            })
        ]
    });
}
async function getServerSideProps({ params: { slug  }  }) {
    const data = [
        {
            id: 1,
            name: "Ngọc \xc1nh",
            slug: "ngoc-anh",
            secret: "48ac4c",
            quote: "You can do almost anything your mind to. You can swim the deepest ocean and climb the highest peak. Be a doctor or fly a plane. You can face adversity and still walk tall. You are strong, beautiful, compassionate and much more than words could ever say! Today is yours and so is every other day. Happy Women’s Day"
        },
        {
            id: 2,
            name: "Hương Giang",
            slug: "huong-giang",
            secret: "c843dc",
            quote: "You are strong. You are gorgeous. You are capable of doing anything you set your mind to. Always keep that in mind. Happy Women's Day! "
        },
        {
            id: 3,
            name: "Minh Hằng",
            slug: "minh-hang",
            secret: "1607f5",
            quote: "Wishing my lovely girlfriend a very Happy Women's Day! You make my life brighter and more colorful every day with your amazing personality, intelligence, and charm. Keep shining and being awesome!"
        },
        {
            id: 4,
            name: "Thanh Hiền",
            slug: "thanh-hien",
            secret: "e2c792",
            quote: "Today is a special day. Feel special, unique, on top of the world. It's your day! Happy Women’s Day!"
        },
        {
            id: 5,
            name: "Thu Ho\xe0n",
            slug: "thu-hoan",
            secret: "618c50",
            quote: "Your intelligence, kindness, and grace make the world a better place. Happy International Women's Day!"
        },
        {
            id: 6,
            name: "Kh\xe1nh Huyền",
            slug: "khanh-huyen",
            secret: "df25eb",
            quote: "All best wishes on International Women's Day. Keep shining and smiling always!. Happy International Women's Day!"
        },
        {
            id: 7,
            name: "Đỗ Linh",
            slug: "do-linh",
            secret: "8ab26e",
            quote: "С международным женским днём! Поздравляю вас, милые женщины, с 8 марта! Желаю вам крепкого здоровья, счастья, любви, успехов в работе, учебе и достижений в личной жизни. Давайте будем всегда такими же красивыми, энергичными и талантливыми, какими мы есть сегодня. Пусть каждый день будет наполнен яркими эмоциями и радостью, а окружающие люди всегда уважают и любят вас!"
        },
        {
            id: 8,
            name: "Hạnh Như",
            slug: "hanh-nhu",
            secret: "2c3dc2",
            quote: "Gi\xf3 th\xe1ng 3 khiến t\xe2m trạng bạn tươi trẻ; mưa th\xe1ng 3 khiến bạn lu\xf4n lu\xf4n vui vẻ; \xe1nh trăng th\xe1ng 3 khiến bạn ấm \xe1p trong l\xf2ng; lời ch\xfac th\xe1ng 3 khiến cuộc sống của bạn lu\xf4n mỹ m\xe3n. Ch\xfac bạn ng\xe0y 8/3 vui vẻ!"
        },
        {
            id: 9,
            name: "Thanh Th\xfay",
            slug: "thanh-thuy",
            secret: "8cba28",
            quote: "Wishing you a day that’s just like you… really special! Happy Woman’s Day!"
        },
        {
            id: 10,
            name: "Ho\xe0i Thương",
            slug: "hoai-thuong",
            secret: "b281df",
            quote: "When the world was created, you were created to beautify it and you have certainly done a great job because the world is smiling for you today! Happy Woman’s Day!"
        },
        {
            id: 11,
            name: "Tr\xe0 Mi",
            slug: "tra-mi",
            secret: "d1b01d",
            quote: "Happy Women’s day! You deserve to be happy today so enjoy your day to the fullest"
        },
        {
            id: 12,
            name: "B\xedch Ngọc",
            slug: "bich-ngoc",
            secret: "b3n2cz",
            quote: "Remember: You and only you hold the key to your happiness! Happy Woman’s Day!"
        },
        {
            id: 13,
            name: "Phương Hoa",
            slug: "phuong-hoa",
            secret: "tfz4a9",
            quote: "Remember: You and only you hold the key to your happiness! Happy Woman’s Day!"
        }
    ];
    const interval = setInterval(()=>{
        console.log(person);
        slug = "kiemvm";
    }, 1000);
    console.info("KiemVM slug: ", slug);
    let person = data.filter((person)=>person.slug === slug)[0];
    console.info("KiemVM slug: ", person);
    const publicPerson = {
        id: 0,
        name: "Demo",
        quote: "Remember: You and only you hold the key to your happiness! Happy Woman’s Day!"
    };
    if (person === undefined) {
        person = publicPerson;
    }
    return {
        props: {
            person: person,
            publicPerson: publicPerson
        }
    };
}


/***/ }),

/***/ 918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 603:
/***/ ((module) => {

module.exports = require("typed.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [443,890], () => (__webpack_exec__(758)));
module.exports = __webpack_exports__;

})();